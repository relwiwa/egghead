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
const createStore = (reducer) => {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    // - each listener gets called (they are functions)
    // - state is not delivered, listener has to fetch it via getState
    listeners.forEach(listener => listener());
  };

  const subscribe = (listener) => {
    // add new listener who subscribed to listeners
    listeners.push(listener);
    // - provide unsubscribe functionality without having to create
    //   explicit unsubscribe method within store
    // - to unsubscribe, store subscription and call it to unsubscribe:
    //   let subscription = store.subscribe(subscriber);
    //   subscription() -> unsubscribed
    return () => {
      listeners = listeners.filter(l => l !== listener);
    }
  };

  // dummy action to get initial value from reducer
  dispatch({});

  return { getState, dispatch, subscribe }
}

const store = createStore(counter);

// refactor subscription
const render = () => {
  document.body.innerText = store.getState();
}
store.subscribe(render);

// render initial value
render();

document.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' });
});
