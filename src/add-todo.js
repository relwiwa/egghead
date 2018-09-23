import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from './todo-app';

let AddTodo = ({
  dispatch,
}) => {
  let input;

  return <div>
    {/* input value is not linked to application state */}
    <input ref={node => {
      input = node;
    }} />
    <button
      onClick={() => {
        dispatch(addTodo(input.value));
        // happens in ui, not via store state
        input.value = '';
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
