import React, { Component } from "react";

import "../helpers.js";

class Timer extends Component {
  componentDidMount() {
    this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 50);
  }
  componentWillUnmount() {
    clearInterval(this.forceUpdateInterval);
  }
  handleTrashClick = () => {
    this.props.onTrashClick(this.props.id);
  };
  onPauseClick = () => {
    console.log("Pause clicked");
    this.props.onPauseClick(this.props.id);
  };
  onPlayClick = () => {
    console.log("Play clicked");
    this.props.onPlayClick(this.props.id);
  };
  renderButton = () => {
    if (this.props.runningSince) {
      return (
        <button className="button red" onClick={this.onPauseClick}>
          Pause
        </button>
      );
    } else {
      return (
        <button className="button" onClick={this.onPlayClick}>
          Play
        </button>
      );
    }
  };
  render() {
    const elapsedString = window.helpers.renderElapsedString(
      this.props.elapsed,
      this.props.runningSince
    );
    // console.log('runningSince', this.props.runningSince);
    return (
      <div className="timer--box">
        <div className="timer--content">
          <div className="timer--header">
            <h2>{this.props.title}</h2>
          </div>
          <div className="timer--meta">
            <p>{this.props.project}</p>
          </div>
          <div className="timer--h2">
            <h4>{elapsedString}</h4>
          </div>
          <div className="actions">
            <span className="trash" onClick={this.handleTrashClick}>
              Trash
            </span>
            <span className="edit" onClick={this.props.onEditClick}>
              Edit
            </span>
          </div>
        </div>
        {this.renderButton()}
      </div>
    );
  }
}

export { Timer };
