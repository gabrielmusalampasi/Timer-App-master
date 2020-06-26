import React, { Component } from "react";

import { Timer, TimerForm } from "./index";

class Container extends Component {
  state = {
    isEditFormOpen: false
  };
  handleEditClick = () => {
    this.setState({ isEditFormOpen: true });
  };
  handleFormClose = () => {
    this.setState({ isEditFormOpen: false });
  };
  handleFormSubmit = timer => {
    this.props.onFormSubmit(timer);
    this.setState({ isEditFormOpen: false });
  };
  render() {
    if (this.state.isEditFormOpen) {
      // console.log("props", this.props);
      return (
        <TimerForm
          title={this.props.title}
          project={this.props.project}
          id={this.props.id}
          onFormClose={this.handleFormClose}
          onFormSubmit={this.handleFormSubmit}
        />
      );
    } else {
      return (
        <Timer
          id={this.props.id}
          title={this.props.title}
          project={this.props.project}
          elapsed={this.props.elapsed}
          runningSince={this.props.runningSince}
          onEditClick={this.handleEditClick}
          onTrashClick={this.props.onTrashClick}
          onPauseClick={this.props.onPauseClick}
          onPlayClick={this.props.onPlayClick}
        />
      );
    }
  }
}

export { Container };
