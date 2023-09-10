import { useState, useCallback } from "react";
import LastFmUser from "../../resources/LastFmUser";
import LastFmAlbum from "../../resources/LastFmAlbum";
import {
  processTop5,
  getReportDate,
  getReportScrobbles
} from "../../utils/process_data";
import UserPanels from "../UserPanels";
import "./App.css";
import { event } from "../../utils/firebase"

function App() {
  const [user, setUser] = useState("");
  const [userFixed, setUserFixed] = useState("");
  const [loading, setLoading] = useState(false);
  const [top, setTop] = useState();

  const getInfo = useCallback(async () => {
    const artists = await LastFmUser.getWeeklyArtistChart(user);
    const albums = await LastFmUser.getWeeklyAlbumChart(user);
    const tracks = await LastFmUser.getWeeklyTrackChart(user);

    const userInfo = await LastFmUser.getInfo(user);

    const top5 = processTop5(artists, albums, tracks, userInfo);

    const topAlbumInfo = await LastFmAlbum.getInfo(
      top5.albums[0].name,
      top5.albums[0].artist["#text"],
      top5.albums[0].mbid
    );
    top5.albums[0].img_url = topAlbumInfo.album.image[3]["#text"];

    top5.date = getReportDate();
    top5.scrobbles = getReportScrobbles(tracks.weeklytrackchart.track);

    setTop(top5);
    setUserFixed(user);
    setLoading(false);
  }, [user]);

  const clearTopBeforeGet = () => {
    setLoading(true);

    if (top)
      setTop(null);
    if (userFixed)
      setUserFixed("");
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          <a href="/"> semaninha.fm</a>
        </div>
      </header>
      <div className="App-container">
        <h3 className="App-text">
          Gerador de relatório semanal do last.fm
        </h3>
        <input
          placeholder="Nome de usuário no last.fm"
          value={user}
          onChange={e => setUser(e.currentTarget.value)}
        />
        <button
          onClick={() => {
            if (user !== userFixed) {
              event('generateReport', { "username": user })
              clearTopBeforeGet();
              getInfo();
            }
          }}
        >
          {loading ? "Gerando" : "Gerar"}
        </button>
        {loading && !top && <h3>Buscando as informações, peraaii...</h3>}
        {top && <UserPanels loading={loading} top5={top} user={userFixed} />}
      </div>
      <footer className="App-footer">Github <a style={{ marginLeft: "5px", color: "#005399", textDecoration: "none"}} href="https://github.com/PedrosPinho/semaninha-fm">pedrospinho/semaninha-fm</a></footer>
    </div>
  );
}

export default App;
