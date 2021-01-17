import { useEffect } from "react";
import "./VideoCall.css";

const VideoCall = (props) => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "vonage.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const infoList = props.info.map((i) => {
    return <h5>{i}</h5>;
  });

  return (
    <div style={{ height: "100%", paddingTop: "300px" }}>
      <div id="videos">
        <div id="subscriber"></div>
        <div id="publisher"></div>
      </div>

      <div
        style={{ color: "white", paddingTop: "15px", paddingBottom: "15px" }}
      >
        {infoList}
      </div>

      <a href="/" style={{ color: "black" }}>
        <button className="ui button">Exit</button>
      </a>
    </div>
  );
};

export default VideoCall;
