import React from 'react';

const AddTodo = ({
  nextTodoId,
  onIncrementNextTodoId,
}, {
  store,
}) => {
  let input;

  return <div>
    {/* input value is not linked to application state */}
    <input ref={node => {
      input = node;
    }} />
    <button
      onClick={() => {
        store.dispatch({
          type: 'ADD_TODO',
          text: input.value,
          id: nextTodoId,
        });
        // happens in ui, not via store state
        input.value = '';
        onIncrementNextTodoId();
      }}
    >
      Add Todo
    </button>
  </div>;
};

AddTodo.contextTypes = {
  store: React.PropTypes.object,
};

export default AddTodo;
