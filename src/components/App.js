import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import LandingPage from "./LandingPage";
import JoinUs from "./JoinUs";
import VideoCall from "./VideoCall";
import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <Header />
        <div>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/join" exact component={JoinUs} />
            <Route path="/video" exact component={VideoCall} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
