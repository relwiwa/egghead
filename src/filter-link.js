import React from 'react';

const FilterLink = ({
  children,
  currentFilter,
  filter,
  onClick,
}) => {
  if (filter === currentFilter) {
    return <span>{children}</span>
  }
  return (
    <a
      href="#"
      onClick={e => {
        e.preventDefault();
        onClick(filter);
      }}
    >
      {children}
    </a>
  );
};

export default FilterLink;
