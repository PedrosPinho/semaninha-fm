import { useRef, useEffect, useState } from "react";
import html2canvas from "html2canvas";
import "./BasePanel.css";
import { event } from "../../utils/firebase"

function BasePanel({ loading, top5, user }) {
  const cardRef = useRef(null);
  const [imageDataURL, setImageDataURL] = useState(null);

  useEffect(() => {
    if (cardRef.current) {
      html2canvas(cardRef.current, {
        logging: true,
        allowTaint: false,
        useCORS: true,
        dpi: 300,
        scale: 5
      }).then(canvas => {
        setImageDataURL(canvas.toDataURL("image/png"));
      });
    }
  }, [top5]);

  function handleDownload(e) {

    event('download', { "username": user})
    e.preventDefault();
    html2canvas(cardRef.current, {
      logging: true,
      allowTaint: false,
      useCORS: true,
      dpi: 300,
      scale: 5
    }).then(canvas => {
      const link = document.createElement("a");
      link.download = `${user}-semaninha.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  }
  return imageDataURL ? (
    <>
      <button
        style={{ margin: "25px auto", display: "block", width: "336px" }}
        onClick={handleDownload}
      >
        Baixar imagem
      </button>
      <img
        id="wrapped-image"
        style={{ width: "336px", height: "600px" }}
        ref={cardRef}
        src={imageDataURL}
        alt="Wrapped"
      />
    </>
  ) : (
    <>
      <button
        style={{ margin: "25px auto", display: "block", width: "336px" }}
        disabled
      >
        Preparando arquivo...
      </button>
      <div className="BasePanel" ref={cardRef}>
        <div className="section">
          <h4 style={{ textAlign: "center", color: " #d92323" }}>
            semaninha.fm
          </h4>
          <img
            id="profile-image"
            className="top profile"
            src={top5.user_img}
            alt="profile"
          />
          <h3>{user}</h3>
          <span className="secondaryInfo">{top5.date}</span>
          <span className="secondaryInfo">
            Scrobbles: {top5.scrobbles || 0}
          </span>
        </div>
        <div className="section">
          <h4 className="redOutline">Top 5 Albums</h4>
          <img
            id="album-image"
            className="top"
            src={top5.albums[0].img_url}
            alt="album"
          />
          {top5.albums.map((album, ind) => (
            <>
              <p>
                {ind + 1}. {album.name}
              </p>
              <span className="artist">{album.artist["#text"]}</span>
            </>
          ))}
        </div>
        <div className="section">
          <h4 className="redOutline">Top 5 Tracks</h4>
          {top5.tracks.map((track, ind) => (
            <>
              <p>
                {ind + 1}. {track.name}
              </p>
              <span className="artist">{track.artist["#text"]}</span>
            </>
          ))}
        </div>
        <div className="section">
          <h4 className="bottom redOutline">Top 5 Artistas</h4>
          {top5.artists.map((artist, ind) => (
            <p>
              {ind + 1}. {artist.name}
            </p>
          ))}
        </div>
        <span className="foot">semaninhafm.web.app</span>
      </div>
    </>
  );
}

export default BasePanel;
