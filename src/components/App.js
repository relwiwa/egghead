import React from 'react';
import universal from 'react-universal-component';

import './App.css';

const BarTab = universal(import('./Bar'));
const FooTab = universal(import('./Foo'));
const HomeTab = universal(import('./Home'));

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: 'Home' };
  }

  render() {
    return (
      <div>
        { this.state.selected === 'Home' &&
          <HomeTab /> }
        { this.state.selected === 'Foo' &&
          <FooTab /> }
        { this.state.selected === 'Bar' &&
          <BarTab /> }

        <button onClick={ () => this.setState({ selected: 'Home' }) }>
          Home
        </button>
        <button onClick={ () => this.setState({ selected: 'Foo' }) }>
          Foo
        </button>
        <button onClick={ () => this.setState({ selected: 'Bar' }) }>
          Bar
        </button>
      </div>
    );
  }
}