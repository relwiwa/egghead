import { createStore } from 'redux';

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

/*  createStore creates store and provides three methods:
    - store.getState(): get current state
    - store.dispatch(): change state by providing a action
    - store.subscribe(): act upon state changes by subscribing */
const store = createStore(counter);

console.log(store.getState());

store.dispatch({ type: 'INCREMENT' });

console.log(store.getState());

store.subscribe(() => {
  document.body.innerText = store.getState();
});

document.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' });
});
