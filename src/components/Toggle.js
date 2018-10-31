import React, { Component } from 'react';

import { Switch } from './Switch';

const ToggleContext = React.createContext();

class Toggle extends Component {
  static On = ({ children }) => (
    <ToggleContext.Consumer>
      {contextValue => (contextValue.on ? children : null)}
    </ToggleContext.Consumer>
  );
  static Off = ({ children }) => (
    <ToggleContext.Consumer>
      {contextValue => (contextValue.on ? null : children)}
    </ToggleContext.Consumer>
  );
  static Button = (props) => (
    <ToggleContext.Consumer>
      {contextValue => (
        <Switch
          on={contextValue.on}
          onClick={contextValue.toggle}
          {...props}
        />
      )}
    </ToggleContext.Consumer>
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
    return <ToggleContext.Provider value={{
      on: this.state.on,
      toggle: this.toggle,
    }}>
      {this.props.children}
    </ToggleContext.Provider>;
  }
}

export default Toggle;
