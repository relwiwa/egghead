import { connect } from 'react-redux';

import Link from '../components/link';
import { setVisibilityFilter } from '../todo-app';

// ownProps are container components' own props
const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter,
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
  };
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Link);

export default FilterLink;
