// replace these values with those generated in your TokBox Account (these are hardcoded)
var apiKey = "47084244";
var sessionId = "2_MX40NzA4NDI0NH5-MTYxMDc5MTYxNTc5NX5xekh5TGFOalZEVVBIc2t6U3JmeENWc2R-fg";
var token = "T1==cGFydG5lcl9pZD00NzA4NDI0NCZzaWc9ZGJkNWFkMWY2YTNhYWE3OTU4YTNjNTE4NmRlMWYyYTRhZmUwMmUxZjpzZXNzaW9uX2lkPTJfTVg0ME56QTROREkwTkg1LU1UWXhNRGM1TVRZeE5UYzVOWDV4ZWtoNVRHRk9hbFpFVlZCSWMydDZVM0ptZUVOV2MyUi1mZyZjcmVhdGVfdGltZT0xNjEwNzkxNjIyJm5vbmNlPTAuMDA1MDk0Mjc5MDQ4NjE1NzAyJnJvbGU9cHVibGlzaGVyJmV4cGlyZV90aW1lPTE2MTA3OTUyMjMmaW5pdGlhbF9sYXlvdXRfY2xhc3NfbGlzdD0=";

// (optional) add server code here
var SERVER_BASE_URL = 'https://dojo-apprentice.herokuapp.com';
fetch(SERVER_BASE_URL + '/session').then(function(res) {
  return res.json()
}).then(function(res) {
  apiKey = res.apiKey;
  sessionId = res.sessionId;
  token = res.token;
  initializeSession();
}).catch(handleError);

initializeSession();
// Handling all of our errors here by alerting them
function handleError(error) {
    if (error) {
      alert(error.message);
    }
  }
  
  function initializeSession() {
    var session = OT.initSession(apiKey, sessionId);
  
    // Subscribe to a newly created stream
    session.on('streamCreated', function(event) {
        session.subscribe(event.stream, 'subscriber', {
          insertMode: 'append',
          width: '100%',
          height: '100%'
        }, handleError);
      });

    // Create a publisher
    var publisher = OT.initPublisher('publisher', {
      insertMode: 'append',
      width: '100%',
      height: '100%'
    }, handleError);
  
    // Connect to the session
    session.connect(token, function(error) {
      // If the connection is successful, publish to the session
      if (error) {
        handleError(error);
      } else {
        session.publish(publisher, handleError);
      }
    });
  }