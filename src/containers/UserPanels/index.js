import { useRef, useEffect, useState } from "react";
import html2canvas from "html2canvas";
import BasePanel from "../../components/BasePanel";
import "./UserPanels.css";

function UserPanels({ loading, top5, user }) {
  const cardRef = useRef(null);
  const [imageDataURL, setImageDataURL] = useState(null);

  const baseStyle = {
    height: "600px",
    width: "606px"
  };

  useEffect(() => {
    if (cardRef.current) {
      html2canvas(cardRef.current, {
        logging: true,
        allowTaint: false,
        useCORS: true,
        dpi: 400,
        scale: 5
      }).then(canvas => {
        setImageDataURL(canvas.toDataURL("image/png"));
      });
    }
  }, [top5]);

  function handleDownload(e) {
    console.log(cardRef.current);
    e.preventDefault();
    html2canvas(cardRef.current, {
      logging: true,
      allowTaint: false,
      useCORS: true,
      dpi: 300,
      scale: 15
    }).then(canvas => {
      const link = document.createElement("a");
      link.download = `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}-wrapped.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  }

  return (
    <div className="UserPanels">
      <button onClick={handleDownload}>BAIXA</button>
      {imageDataURL ? (
        <img
          id="wrapped-image"
          ref={cardRef}
          src={imageDataURL}
          alt="Wrapped"
          style={baseStyle}
        />
      ) : (
        <div ref={cardRef}>
          <BasePanel loading={loading} top5={top5} user={user} />
        </div>
      )}
    </div>
  );
}

export default UserPanels;
