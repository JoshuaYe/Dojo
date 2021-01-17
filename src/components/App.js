import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import LandingPage from "./LandingPage";
import JoinUs from "./JoinUs";
import VideoCall from "./VideoCall";
import history from "../history";
import { useState } from "react";

const App = () => {
  const [info, setInfo] = useState([]);

  return (
    <div>
      <Router history={history}>
        <Header />
        <div className="ui container">
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route
              path="/join"
              exact
              render={(props) => <JoinUs {...props} onSubmit={setInfo} />}
            />
            <Route
              path="/video"
              exact
              render={(props) => <VideoCall {...props} info={info} />}
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
