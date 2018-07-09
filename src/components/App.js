import React from 'react';
import universal from 'react-universal-component';

import Loading from './Loading';

import './App.css';

const UniversalTab = universal(({ tab }) => import(`./${tab}`), {
  alwaysDelay: true,
  loadingTransition: false,
  minDelay: 500,
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      selected: 'Home',
    };
  }

  loadEnd = () => {
    this.setState({ loading: false });
  }


  loadStart = () => {
    this.setState({ loading: true });
  }

  render() {
    return (
      <div>
        {this.state.loading && <Loading />}
        <div className={this.state.loading ? 'loading' : ''}>
          <UniversalTab
            onAfter={this.loadEnd}
            onBefore={this.loadStart}
            tab={this.state.selected}
          />
        </div>

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