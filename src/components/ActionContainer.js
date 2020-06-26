import React, { Component } from "react";

import { ActionButton, TimerForm } from "./index";

class ActionContainer extends Component {
  state = {
    isFormOpen: false
  };
  handleFormOpen = () => {
    this.setState({ isFormOpen: true });
  };
  handleFormClose = () => {
    this.setState({ isFormOpen: false });
  };
  handleFormSubmit = timer => {
    this.props.onFormSubmit(timer);
    this.setState({ isFormOpen: false });
  };
  render() {
    if (this.state.isFormOpen) {
      return (
        <TimerForm
          onFormClose={this.handleFormClose}
          onFormSubmit={this.handleFormSubmit}
        />
      );
    } else {
      return <ActionButton handleFormOpen={this.handleFormOpen} />;
    }
  }
}

export { ActionContainer };
