import { useState, useCallback } from "react";
import LastFmUser from "../../resources/LastFmUser";
import { processTop5 } from "../../utils/process_data";
import UserPanels from "../UserPanels";
import "./App.css";

function App() {
  const [user, setUser] = useState("opedropinho");
  const [loading, setLoading] = useState(false);

  const getInfo = useCallback(async () => {
    setLoading(true);
    const artists = await LastFmUser.getWeeklyArtistChart(user);
    const albums = await LastFmUser.getWeeklyAlbumChart(user);
    const tracks = await LastFmUser.getWeeklyTrackChart(user);

    const top5 = processTop5(artists, albums, tracks);

    console.log(top5);
    setLoading(false);
  }, [user]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>semaninha.fm</h1>
      </header>
      <div className="App-container">
        <h3>
          Lorem ipsum lalallla Lorem ipsum lalallla Lorem ipsum lalallla
          <br /> Lorem ipsum lalallla Lorem ipsum lalallla Lorem ipsum lalallla
        </h3>
        <input
          placeholder="Nome de usuário"
          value={user}
          onChange={e => setUser(e.currentTarget.value)}
        />
        <button onClick={() => getInfo()}>Gerar</button>
        <UserPanels loading={loading} />
      </div>
      <footer className="App-footer">Copyright © Pedro Pinho 2023</footer>
    </div>
  );
}

export default App;
