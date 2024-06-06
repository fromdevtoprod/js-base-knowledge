const counter = (function () {
  let count = 0;
  function changeBy(val) {
    count += val;
  }
  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    get: function () {
      return count;
    },
  };
})();

console.log(counter.get()); // 0
counter.increment();
counter.increment();
console.log(counter.get()); // 2
counter.decrement();
console.log(counter.get()); // 1
