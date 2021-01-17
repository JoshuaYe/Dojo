import { useEffect } from "react";
import "./VideoCall.css";

import { initializeSession } from "./vonage";

const WatchCall = () => {
  useEffect(() => {
    initializeSession(false);
  }, []);

  return (
    <div style={{ height: "100%", paddingTop: "300px" }}>
      <div id="videos">
        <div id="subscriber"></div>
        <div id="publisher"></div>
      </div>

      <button className="ui button">
        <a href="/" style={{ color: "black" }}>
          Exit
        </a>
      </button>
    </div>
  );
};

export default WatchCall;
