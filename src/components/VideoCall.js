import { useEffect } from "react";
import "./VideoCall.css";
import { initializeSession } from "./vonage";

const VideoCall = (props) => {
  useEffect(() => {
    initializeSession(true);
  }, []);

  return (
    <div style={{ height: "100%", paddingTop: "445px" }}>
      <div id="videos">
        <div id="subscriber"></div>
        <div id="publisher"></div>
      </div>

      <br />

      <div
        style={{ color: "white", paddingTop: "15px", paddingBottom: "15px" }}
      >
        <h2>
          Name: {props.info[0]}
          <br />
          Age: {props.info[1]}
          <br />
          Gender: {props.info[2]}
          <br />
          Master: {props.info[3]}
          <br />
          Apprentice: {props.info[4]}
        </h2>
      </div>

      <div
        style={{ color: "white", paddingTop: "15px", paddingBottom: "15px" }}
        id="info"
      >
        <h2>
          Name: Sarah
          <br />
          Age: 18
          <br />
          Gender: Female
          <br />
          Master: Music
          <br />
          Apprentice: Cooking
        </h2>
      </div>

      <br />

      <a href="/" style={{ color: "black" }}>
        <button className="huge ui button red">Exit</button>
      </a>
    </div>
  );
};

export default VideoCall;
