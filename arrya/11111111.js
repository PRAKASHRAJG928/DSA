// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let n = init;
  let Increment = function () {
    return (init = init + 1);
  };
  let Decrement = function () {
    return (init = init - 1);
  };
  let Reset = function () {
    return n;
  };
  return { Increment: Increment, Decrement: Decrement, Reset: Reset };
};

const counter = createCounter(5);
console.log(counter.Increment());
console.log(counter.Increment());
console.log(counter.Decrement());
console.log(counter.Reset());
// 6
// 7
// 6
// 5