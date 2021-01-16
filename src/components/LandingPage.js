import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <h1>DOJO</h1>
      <h2>Teach what you know. Learn what you don't.</h2>
      <Link to={"/join"} className="ui button primary">
        Step into the Dojo
      </Link>
    </div>
  );
};

export default LandingPage;
