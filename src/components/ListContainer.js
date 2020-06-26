import React, { Component } from "react";

import { Container } from "./index";

class ListContainer extends Component {
  renderContainer() {
    return this.props.timers.map(timer => {
      // console.log("timer", timer);
      return (
        <Container
          title={timer.title}
          project={timer.project}
          elapsed={timer.elapsed}
          id={timer.id}
          key={timer.id}
          runningSince={timer.runningSince}
          onFormSubmit={this.props.onFormSubmit}
          onTrashClick={this.props.onTrashClick}
          onPauseClick={this.props.onPauseClick}
          onPlayClick={this.props.onPlayClick}
        />
      );
    });
  }
  render() {
    return <div className="list--container">{this.renderContainer()}</div>;
  }
}

export { ListContainer };
