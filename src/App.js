import React, { Component } from 'react';

import Toggle from './components/Toggle';

class App extends Component {

  onToggle = (...args) => console.log('onToggle', ...args);

  render() {
    return (
      <div className="App">
        <Toggle onToggle={this.onToggle}>
          <Toggle.On>The button is on</Toggle.On>
          <Toggle.Off>The button is off</Toggle.Off>
          <div>
            <Toggle.Button />
          </div>
        </Toggle>
      </div>
    );
  }
}

export default App;
