import expect from 'expect';
import deepFreeze from 'deep-freeze';

const addCounter = (list) => {
  
  //  avoid state mutations by:
  //  - not using push() as it alters original state
  //  - using methods and operators that do not alter original state:
  //  -- concat method: list.concact([0])
  //  -- es6 array spread operator: [...list, 0]
  return [...list, 0];
};

const removeCounter = (list, index) => {
  // avoid state mutations when removing elements by:
  // - not using splice(index, 1)
  // - using slice along with concat and a nested slice:
  //   list.slice(0, index).concat(list.slice(index +1))
  // - using es6 array spread operator
  return [
    ...list.slice(0, index),
    ...list.slice(index + 1)
  ];
};

const incrementCounter = (list, index) => {
  // avoid state mutations when changing elements by the same way
  // as removing them, but concatenating the changed item
  return [
    ...list.slice(0, index),
    list[index] + 1,
    ...list.slice(index + 1)
  ];
};

// TEST DECLARATIONS

const testAddCounter = () => {
  const listBefore = [];
  const listAfter = [0];

  deepFreeze(listBefore);

  expect(
    addCounter(listBefore)
  ).toEqual(listAfter);
};

const testRemoveCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 20];

  deepFreeze(listBefore);

  expect(
    removeCounter(listBefore, 1)
  ).toEqual(listAfter);
};

const testIncrementCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 11, 20];

  deepFreeze(listBefore);

  expect(
    incrementCounter(listBefore, 1)
  ).toEqual(listAfter);
};


// TESTS

testAddCounter();
testRemoveCounter();
testIncrementCounter();
console.log('All tests passed');