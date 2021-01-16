import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <h1>Dojo</h1>
      <Link to={"/join"} className="ui button primary">
        Step into the Dojo
      </Link>
    </div>
  );
};

export default LandingPage;
