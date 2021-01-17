import React from "react";
import "./index.css";

const Header = () => {
  return (
    <div
      id="header"
      className="ui secondary pointing menu"
      style={{ backgroundColor: "#5c4033" }}
    >
      <a href="/">
        <img src="/ying-yang.png" alt="logo" width="100" height="auto" />
        <div style={{ float: "right" }}>
          <h1 id="nav">Dojo</h1>
        </div>
      </a>
    </div>
  );
};

export default Header;
