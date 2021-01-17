import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const LandingPage = () => {
  return (
    <div>
      <h1>DOJO</h1>
      <h2 id="headline">Teach what you know. Learn what you don't.</h2>
      <div id="button">
        <Link to="/join" className="ui brown button">
          Step into the Dojo
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
