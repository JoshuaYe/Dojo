import OT from "@opentok/client";

// replace these values with those generated in your TokBox Account (these are hardcoded)
var apiKey = "47084244";
var sessionId =
  "1_MX40NzA4NDI0NH5-MTYxMDg1MzM5NTY4M35ZWlNDdHVIbzhtcmJQeEZrbnpRWnVMbTl-fg";
var token =
  "T1==cGFydG5lcl9pZD00NzA4NDI0NCZzaWc9Zjg2YTdiZDFjZTgyNjI3ZGZjYzJlOTY5NTdiMjEzOTc4Y2Y3MDkwOTpzZXNzaW9uX2lkPTFfTVg0ME56QTROREkwTkg1LU1UWXhNRGcxTXpNNU5UWTRNMzVaV2xORGRIVkliemh0Y21KUWVFWnJibnBSV25WTWJUbC1mZyZjcmVhdGVfdGltZT0xNjEwODUzNDAyJm5vbmNlPTAuMjcyNTc2MjQ0NDI0ODQ3MiZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNjExNDU4MjAyJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9";

// (optional) add server code here
// var SERVER_BASE_URL = "https://dojo-apprentice.herokuapp.com";
// fetch(SERVER_BASE_URL + "/session")
//   .then(function (res) {
//     return res.json();
//   })
//   .then(function (res) {
//     apiKey = res.apiKey;
//     sessionId = res.sessionId;
//     token = res.token;
//     initializeSession();
//   })
//   .catch(handleError);

// Handling all of our errors here by alerting them
const handleError = (error) => {
  if (error) {
    alert(error.message);
  }
};

export const initializeSession = (subscribe) => {
  if (OT.checkSystemRequirements() === 1) {
    var session = OT.initSession(apiKey, sessionId);
  } else {
    // The client does not support WebRTC.
    // You can display your own message.
    handleError("Failed to initialize session");
  }

  // Subscribe to a newly created stream
  if (subscribe) {
    session.on("streamCreated", function (event) {
      session.subscribe(
        event.stream,
        "subscriber",
        {
          insertMode: "append",
          width: "100%",
          height: "100%",
        },
        handleError
      );
    });
  }

  // Create a publisher
  var publisher = OT.initPublisher(
    "publisher",
    {
      insertMode: "append",
      width: "100%",
      height: "100%",
    },
    handleError
  );

  // Connect to the session
  session.connect(token, function (error) {
    // If the connection is successful, publish to the session
    if (error) {
      handleError(error);
    } else {
      session.publish(publisher, handleError);
    }
  });
};
