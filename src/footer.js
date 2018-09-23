import React from 'react';

import FilterLink from './filter-link';

const Footer = ({
  onFilterClick,
  visibilityFilter,
}) => (
  <p>
    Show:
    {' '}
    <FilterLink
      currentFilter={visibilityFilter}
      filter="SHOW_ALL"
      onClick={onFilterClick}
    >
      All
    </FilterLink>
    {' '}
    <FilterLink
      currentFilter={visibilityFilter}
      filter="SHOW_ACTIVE"
      onClick={onFilterClick}
    >
      Active
    </FilterLink>
    {' '}
    <FilterLink
      currentFilter={visibilityFilter}
      filter="SHOW_COMPLETED"
      onClick={onFilterClick}
    >
      Completed
    </FilterLink>
  </p>
);

export default Footer;
