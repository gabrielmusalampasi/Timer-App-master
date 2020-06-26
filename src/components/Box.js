import React, { Component } from "react";

import { ListContainer, ActionContainer } from "./index";

import uuid from "uuid";

class Box extends Component {
  state = {
    timers: [
      {
        title: "Apprendre React",
        project: "Développement Web",
        elapsed: 5609620,
        id: "0a4a79cb-b06d-4cb1-883d-549a1e3b66d7",
        runningSince: null
      },
      {
        title: "Apprendre Angular",
        project: "Développement Web",
        elapsed: 1349620,
        id: "0a4a79cb-b06d-4cb1-883d-549a1e3b66d4",
        runningSince: null
      }
    ]
  };
  handleCreateFormSubmit = ({ title, project }) => {
    const timer = {
      title,
      project,
      id: uuid.v4(),
      elapsed: 0,
      runningSince: null
    };
    this.setState({ timers: [...this.state.timers, timer] });
  };
  handleEditFormSubmit = ({ id, title, project }) => {
    this.setState({
      timers: this.state.timers.map(timer => {
        if (timer.id === id) {
          return {
            ...timer,
            title,
            project
          };
        }
        return { ...timer };
      })
    });
  };
  handleTrashClick = id => {
    this.setState({
      timers: this.state.timers.filter(timer => {
        return timer.id !== id;
      })
    });
  };
  handlePauseClick = timerId => {
    const now = Date.now();
    this.setState({
      timers: this.state.timers.map(timer => {
        if(timerId === timer.id) {
          const lastElapsed = now - timer.runningSince;
          return {
            ...timer,
            runningSince: null,
            elapsed: timer.elapsed + lastElapsed
          }
        } else {
          return { ...timer };
        }
      })
    });
  };
  handlePlayClick = timerId => {
    const now = Date.now();
    this.setState({
      timers: this.state.timers.map(timer => {
        if(timerId === timer.id) {
          return {
            ...timer,
            runningSince: now
          }
        } else {
          return { ...timer };
        }
      })
    });
  };
  render() {
    return (
      <div className="boxed--view">
        <div className="boxed--view__box">
          <ListContainer
            timers={this.state.timers}
            onFormSubmit={this.handleEditFormSubmit}
            onTrashClick={this.handleTrashClick}
            onPauseClick={this.handlePauseClick}
            onPlayClick={this.handlePlayClick}
          />
          <ActionContainer onFormSubmit={this.handleCreateFormSubmit} />
        </div>
      </div>
    );
  }
}

export { Box };
