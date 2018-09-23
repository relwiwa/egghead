import React from 'react';
import { connect } from 'react-redux';

let AddTodo = ({
  dispatch,
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
        dispatch({
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

/*  default behaviour of connect function without arguments:
    - do not subscribe to store
    - inject dispatch function via props */
AddTodo = connect()(AddTodo);

export default AddTodo;
