// replace these values with those generated in your TokBox Account (these are hardcoded)
var apiKey = "47084244";
var sessionId =
  "2_MX40NzA4NDI0NH5-MTYxMDc5MTYxNTc5NX5xekh5TGFOalZEVVBIc2t6U3JmeENWc2R-fg";
var token =
  "T1==cGFydG5lcl9pZD00NzA4NDI0NCZzaWc9YmZmZDU5N2EwOGE2N2UyODdkZDczNmQ4OWZhOGM2MTc4ZTU1ZGQ2YzpzZXNzaW9uX2lkPTFfTVg0ME56QTROREkwTkg1LU1UWXhNRGd4TlRrME9UUTVOWDVSU1hKQ1VtZHFVMkZMWVhSbmNtczNNMHRoV0dkdE1EVi1mZyZjcmVhdGVfdGltZT0xNjEwODE1OTU3Jm5vbmNlPTAuNDk5NjE2NjEzMDcwMDQxNyZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNjEwODE5NTU3JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9";

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

initializeSession();
// Handling all of our errors here by alerting them
function handleError(error) {
  if (error) {
    alert(error.message);
  }
}

function initializeSession() {
  if (OT.checkSystemRequirements() == 1) {
    var session = OT.initSession(apiKey, sessionId);
  } else {
    // The client does not support WebRTC.
    // You can display your own message.
    alert(error.message);
  }

  // Subscribe to a newly created stream
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
}
