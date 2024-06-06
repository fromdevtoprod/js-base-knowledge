const makeCounter = function () {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment() {
      console.log("incrementing...");
      changeBy(1);
    },

    decrement() {
      console.log("decrementing...");
      changeBy(-1);
    },

    value() {
      return privateCounter;
    },
  };
};

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log("counter1 value", counter1.value()); // 0.

counter1.increment();
counter1.increment();
console.log("counter1 value", counter1.value()); // 2.

counter1.decrement();
console.log("counter1 value", counter1.value()); // 1.
console.log("counter2 value", counter2.value()); // 0.
