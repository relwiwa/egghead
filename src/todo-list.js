import expect from 'expect';
import deepFreeze from 'deep-freeze';
import { createStore } from 'redux';

// state contains individual todo
// state is undefined for ADD_TODO action
const todo = (state, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };

    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign({}, state, {
        completed: !state.completed
      });
    default:
      return state;
  }

}

const todos = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));

    default:
      return state;
  }
};

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch(action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

// recreation of combineReducers function
// it gets passed an object, and each key holds a reducer
const combineReducers = (reducers) => {
  return (state = {}, action) => {
    // retrieve all keys of reducers object and apply reduce operation
    return Object.keys(reducers).reduce(
      // initial value for nextState is empty object
      (nextState, key) => {
        // for each key (that corresponds to one reducer), respective
        // reducer gets called and result gets saved as nextState
        nextState[key] = reducers[key](
          state[key],
          action
        );
        return nextState;
      },
      // initial value for nextState is empty object
      {}
    )
  }
}

// - combineReducers returns reducer function that is similiar
//   to the reducer function that was setup manually in an earlier lesson
// - ES6 shorthand is used following convention to give reducers the name
//   of the state key they manage
const todoApp = combineReducers({
  todos,
  visibilityFilter
});

const store = createStore(todoApp);

// TESTING

const testAddTodo = () => {
  const stateBefore = [];
  const action = {
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux'
  };
  const stateAfter = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    }    
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    todos(stateBefore, action)
  ).toEqual(stateAfter);
};

const testToggleTodo = () => {
  const stateBefore = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    }, {
      id: 1,
      text: 'Learn Observables',
      completed: false
    }
  ];
  const action = {
    type: 'TOGGLE_TODO',
    id: 1
  };
  const stateAfter = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    }, {
      id: 1,
      text: 'Learn Observables',
      completed: true
    }
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    todos(stateBefore, action)
  ).toEqual(stateAfter);
}

testAddTodo();
testToggleTodo();
console.log('All tests have passed');