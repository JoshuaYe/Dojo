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

  return (
    <div style={{ height: "100%", paddingTop: "300px" }}>
      <div id="videos">
        <div id="subscriber"></div>
        <div id="publisher"></div>
      </div>

      <div
        style={{ color: "white", paddingTop: "15px", paddingBottom: "15px" }}
      >
        <h3>
          Name: {props.info[0]}
          <br />
          Age: {props.info[1]}
          <br />
          Gender: {props.info[2]}
          <br />
          Master: {props.info[3]}
          <br />
          Apprentice: {props.info[4]}
        </h3>
      </div>

      <a href="/" style={{ color: "black" }}>
        <button className="ui button">Exit</button>
      </a>
    </div>
  );
};

export default VideoCall;
