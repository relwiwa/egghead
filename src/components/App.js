import React from 'react';
import { connect } from 'react-redux';
import universal from 'react-universal-component';

import { selectTab } from '../actions/tabs';
import { getSelectedTab } from '../reducers/tabs';

import Loading from './Loading';
import NotFound from './NotFound';

import './App.css';

const UniversalTab = universal(({ tab }) => import(`./${tab}`), {
  alwaysDelay: true,
  error: NotFound,
  loadingTransition: false,
  minDelay: 500,
  onLoad(module, info, props, context) {
    if (module.reducers) {
      context.store.injectReducers(module.reducers);
    }
  },
});

const Named = universal(import('./Named'), {
  key: 'Named',
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  loadEnd = () => {
    this.setState({ loading: false });
  }


  loadStart = () => {
    this.setState({ loading: true });
  }

  render() {
    const { selected, selectTab } = this.props;

    return (
      <div>
        {this.state.loading && <Loading />}
        <div className={this.state.loading ? 'loading' : ''}>
          <UniversalTab
            onAfter={this.loadEnd}
            onBefore={this.loadStart}
            tab={selected}
          />
        </div>

        <button onClick={() => selectTab('Home')}>
          Home
        </button>
        <button
          onClick={() => selectTab('Foo')}
//          onMouseEnter={() => UniversalTab.preload({ tab: 'Foo' })}
        >
          Foo
        </button>
        <button onClick={() => selectTab('Bar')}>
          Bar
        </button>
        <button onClick={() => selectTab('Broken')}>
          Broken
        </button>
        <div>
          <Named />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selected: getSelectedTab(state),
});

const mapDispatchToProps = { selectTab };

export default connect(mapStateToProps, mapDispatchToProps)(App);
