import React, { Component } from 'react';

export default class Toggle extends Component {
  state={
    on: true,
  }
  toggle = () => {
    this.setState({
      on: !this.state.on
    })
  }
  render() {
    return (
      <div>
        {this.state.on && <h1>Toggle Me</h1>}
        <button className={`ui basic button`} onClick={this.toggle}>
          show/hide
        </button>
      </div>
    )
  }
}
