import React, { Component } from 'react';

import Toggle from './components/Toggle';

class App extends Component {

  onToggle = (...args) => console.log('onToggle', ...args);

  render() {
    return (
      <div className="App">
        <Toggle onToggle={this.onToggle} />
      </div>
    );
  }
}

export default App;
