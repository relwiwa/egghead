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
    /*  Render props pattern:
        - You only return this.props.children and call it as a function
        - You provide any state updates the children might need as arguments */
    return this.props.children({
      on: this.state.on,
      toggle: this.toggle,
    });
  }
}

export default Toggle;
