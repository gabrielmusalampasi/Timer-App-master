import React, { Component } from "react";

class ActionButton extends Component {
  render() {
    return (
      <button className="button__outline" onClick={this.props.handleFormOpen}>
        +
      </button>
    );
  }
}

export { ActionButton };
