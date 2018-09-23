import React from 'react';

const AddTodo = ({
  onAddClick,
}) => {
  let input;

  return <div>
    {/* input value is not linked to application state */}
    <input ref={node => {
      input = node;
    }} />
    <button
      onClick={() => {
        onAddClick(input.value);
        // happens in ui, not via store state
        input.value = '';
      }}
    >
      Add Todo
    </button>
  </div>;
};

export default AddTodo;
