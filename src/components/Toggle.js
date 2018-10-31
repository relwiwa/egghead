import React, { Component } from 'react';

import { Switch } from './Switch';

const renderUI = ({ on, toggle }) => {
  return <Switch
    on={on} onClick={toggle}
  />;
}

class Toggle extends Component {
  static defaultProps = { renderUI };
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
    return this.props.renderUI({
      on: this.state.on,
      toggle: this.toggle,
    });
  }
}

export default Toggle;
