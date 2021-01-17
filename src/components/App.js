import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import LandingPage from "./LandingPage";
import JoinUs from "./JoinUs";
import VideoCall from "./VideoCall";
import WatchCall from "./WatchCall";
import history from "../history";

const App = () => {
  return (
    <Router history={history}>
      <Header />
      <div className="ui container main">
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/join" exact component={JoinUs} />
          <Route path="/video" exact component={VideoCall} />
          <Route path="/watch" exact component={WatchCall} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
