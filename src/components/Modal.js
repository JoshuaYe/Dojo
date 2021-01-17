import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import history from "../history";

const Modal = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [master, setMaster] = useState("");
  const [apprentice, setApprentice] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit([name, age, gender, master, apprentice]);

    history.push("/video");
  };

  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">Welcome to the Dojo</div>

        <form style={{ padding: "15px" }} onSubmit={handleSubmit}>
          <div className="ui form" style={{ paddingBottom: "10px" }}>
            <div className="field">
              <label>Name</label>
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
          </div>
          <div className="ui form" style={{ paddingBottom: "10px" }}>
            <div className="field">
              <label>Age</label>
              <input
                type="number"
                value={age}
                onChange={(event) => setAge(event.target.value)}
              />
            </div>
          </div>
          <div className="ui form" style={{ paddingBottom: "10px" }}>
            <div className="field">
              <label>Gender</label>
              <select
                className="ui selection dropdown"
                value={gender}
                onChange={(event) => setGender(event.target.value)}
              >
                <option value="">Select an option</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div className="ui form" style={{ paddingBottom: "10px" }}>
            <div className="field">
              <label>Master</label>
              <select
                className="ui selection dropdown"
                value={master}
                onChange={(event) => setMaster(event.target.value)}
              >
                <option value="">Select an option</option>
                <option value="Art">Art</option>
                <option value="Dance">Dance</option>
                <option value="Education">Education</option>
                <option value="Music">Music</option>
                <option value="Cooking">Cooking</option>
              </select>
            </div>
          </div>
          <div className="ui form" style={{ paddingBottom: "10px" }}>
            <div className="field">
              <label>Apprentice</label>
              <select
                className="ui selection dropdown"
                value={apprentice}
                onChange={(event) => setApprentice(event.target.value)}
              >
                <option value="">Select an option</option>
                <option value="Art">Art</option>
                <option value="Dance">Dance</option>
                <option value="Education">Education</option>
                <option value="Music">Music</option>
                <option value="Cooking">Cooking</option>
              </select>
            </div>
          </div>

          <div>
            <button type="submit" className="ui button brown">
              Submit
            </button>
            <Link to="/" className="ui button">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
