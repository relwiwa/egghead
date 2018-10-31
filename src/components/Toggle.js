import React, { Component } from 'react';

import { Switch } from './Switch';

const ToggleContext = React.createContext();

const ToggleConsumer = (props) => <ToggleContext.Consumer>
  {context => {
    if (!context) {
      throw new Error('Toggle compount components must be rendered within the toggle component');
    }
    return props.children(context);
  }}
</ToggleContext.Consumer>;

class Toggle extends Component {
  static On = ({ children }) => (
    <ToggleConsumer>
      {contextValue => (contextValue.on ? children : null)}
    </ToggleConsumer>
  );
  static Off = ({ children }) => (
    <ToggleConsumer>
      {contextValue => (contextValue.on ? null : children)}
    </ToggleConsumer>
  );
  static Button = (props) => (
    <ToggleConsumer>
      {contextValue => (
        <Switch
          on={contextValue.on}
          onClick={contextValue.toggle}
          {...props}
        />
      )}
    </ToggleConsumer>
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
