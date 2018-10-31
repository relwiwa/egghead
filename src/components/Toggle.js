import React, { Component } from 'react';

import { Switch } from './Switch';

class Toggle extends Component {
  static On = ({ on, children }) => (on ? children : null);
  static Off = ({ on, children }) => (on ? null : children);
  static Button = ({ on, toggle, ...props }) => (
    <Switch on={on} onClick={toggle} {...props} />
  );

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
    return React.Children.map(
      this.props.children,
      childElement => React.cloneElement(
        childElement, {
          on: this.state.on,
          toggle: this.toggle,
        }),
    );
  }
}

export default Toggle;
