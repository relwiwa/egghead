import React, { Component } from 'react';

import { Switch } from './Switch';

class Toggle extends Component {
  state = { on: false };

  toggle = () => {
    this.setState(
      currentState => ({ on: !currentState.on }),
      () => {
        this.props.onToggle(this.state.on);
      },
    );
  };

  render() {
    return (
      <Switch
        on={this.state.on} onClick={this.toggle}
      />
    );
  }
}

export default Toggle;
