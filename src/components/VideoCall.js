import React from "react";

const VideoCall = () => {
  const script = document.createElement("script");
  script.src = "vonage.js";
  script.async = true;
  document.body.appendChild(script);
  return (
    <div style={{ height: "100%" }}>
      <div id="videos">
        <div id="subscriber"></div>
        <div id="publisher"></div>
      </div>
    </div>
  );
};

export default VideoCall;
