import React, { Component } from 'react';

import { Switch } from './components/Switch'
import Toggle from './components/Toggle';

class App extends Component {

  onToggle = (...args) => console.log('onToggle', ...args);

  render() {
    return (
      <div className="App">
        <Toggle onToggle={this.onToggle}>
          {({ on, toggle }) => (
            <div>
              {on ? 'The button is on' : 'The button is off'}
              <Switch on={on} onClick={toggle} />
              <hr />
              <button onClick={toggle}>
                {on ? 'on' : 'off'}
              </button>
            </div>
          )}
        </Toggle>
      </div>
    );
  }
}

export default App;
