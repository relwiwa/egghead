import React from 'react';

import { store } from './todo-app';

const AddTodo = ({
  nextTodoId,
  onIncrementNextTodoId,
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

export default AddTodo;
