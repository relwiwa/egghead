import React, { Component } from 'react';

import Link from '../components/link';

class FilterLink extends Component {
  componentDidMount() {
    const { store } = this.context;
    // subscribe returns way to unsubscribe
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { store } = this.context;
    const state = store.getState();
    return (
      <Link
        active={this.props.filter === state.visibilityFilter}
        onClick={() => store.dispatch({
          type: 'SET_VISIBILITY_FILTER',
          filter: this.props.filter,
        })}
      >
        {this.props.children}
      </Link>
    );
  };
}

FilterLink.contextTypes = {
  store: React.PropTypes.object,
};


export default FilterLink;
