import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">Step into the Dojo</div>

        <div style={{ padding: "15px" }}>
          <div className="ui form" style={{ paddingBottom: "10px" }}>
            <div className="field">
              <label>Name</label>
              <input type="text" />
            </div>
          </div>
          <div className="ui form" style={{ paddingBottom: "10px" }}>
            <div className="field">
              <label>Age</label>
              <input type="text" />
            </div>
          </div>
          <div className="ui form" style={{ paddingBottom: "10px" }}>
            <div className="field">
              <label>Sex</label>
              <select className="ui selection dropdown">
                <option value=""> </option>
                <option value="1">Male</option>
                <option value="0">Female</option>
              </select>
            </div>
          </div>

          <div className="ui form" style={{ paddingBottom: "10px" }}>
            <div className="field">
              <label>Master</label>
              <select className="ui selection dropdown">
                <option value=""></option>
                <option value="3">Art</option>
                <option value="2">Education</option>
                <option value="1">Music</option>
                <option value="0">Cooking</option>
              </select>
            </div>
          </div>
          <div className="ui form" style={{ paddingBottom: "10px" }}>
            <div className="field">
              <label>Apprentice</label>
              <select className="ui selection dropdown">
                <option value=""></option>
                <option value="3">Art</option>
                <option value="2">Education</option>
                <option value="1">Music</option>
                <option value="0">Cooking</option>
              </select>
            </div>
          </div>
        </div>

        <div style={{ padding: "15px" }}>
          <button className="ui brown button">Join</button>
          <Link to="/" className="ui button">
            Cancel
          </Link>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
