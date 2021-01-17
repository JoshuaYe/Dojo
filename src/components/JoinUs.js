import React from "react";
import Modal from "./Modal";
import history from "../history";

class JoinUs extends React.Component {
  render() {
    return (
      <Modal
        onSubmit={this.props.onSubmit}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

export default JoinUs;
