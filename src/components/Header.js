import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      className="ui secondary pointing menu"
      style={{ backgroundColor: "#5c4033" }}
    >
      <a href="/">
        <img src="/ying-yang.png" alt="logo" width="100" height="auto" />
      </a>
    </div>
  );
};

export default Header;
