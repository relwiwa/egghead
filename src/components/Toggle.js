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

  
  toggle = () => {
    this.setState(
      currentState => ({ on: !currentState.on }),
      () => {
        this.props.onToggle(this.state.on);
      },
    );
  };
    
  state = {
    on: false,
    toggle: this.toggle,
  };

  render() {
    /* pass state object to avoid re-renders due to creation of value object on every render */
    return <ToggleContext.Provider value={this.state}>
      {this.props.children}
    </ToggleContext.Provider>;
  }
}

export default Toggle;
