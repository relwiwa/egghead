import expect from 'expect';
import deepFreeze from 'deep-freeze';

const toggleTodo = (todo) => {
  // avoid state mutations when changing object properties by:
  // - ES6 Object.assign method
  // - ES7 object spread operator (requires babel-stage-2)
  /* Dan Abramov:
     "However if you want to perform a deep change it will be
     more complicated: you will need to shallowly copy all objects
     'on the way to' that change. This is exactly where you'd use
     the reducer composition pattern again, to delegate updating
     some field to a subreducer." */
  return Object.assign({}, todo, {
    completed: !todo.completed
  });
};

const testToggleTodo = () => {
  const todoBefore = {
    id: 0,
    text: 'Learn Redux',
    completed: false
  };
  const todoAfter = {
    id: 0,
    text: 'Learn Redux',
    completed: true
  };

  deepFreeze(todoBefore);

  expect(
    toggleTodo(todoBefore)
  ).toEqual(todoAfter);
};

testToggleTodo();
console.log('All tests have passed');