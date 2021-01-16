import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./VideoCall.css";

const VideoCall = () => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "vonage.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ height: "100%", paddingTop: "300px" }}>
      <div id="videos">
        <div id="subscriber"></div>
        <div id="publisher"></div>
      </div>

      <Link to="/" className="ui button">
        Exit
      </Link>
    </div>
  );
};

export default VideoCall;
