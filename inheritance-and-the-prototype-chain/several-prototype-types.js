// Object literals (without the `__proto__` key) automatically
// have `Object.prototype` as their `[[Prototype]]`
const object = { a: 1 };
console.log(Object.getPrototypeOf(object) === Object.prototype); // true

// Array literals automatically have `Array.prototype` as their `[[Prototype]]`
const array = [1, 2, 3];
console.log(Object.getPrototypeOf(array) === Array.prototype); // true

// RegExp literals automatically have `RegExp.prototype` as their `[[Prototype]]`
const regexp = /abc/;
console.log(Object.getPrototypeOf(regexp) === RegExp.prototype); // true

const func = function () {};
console.log(Object.getPrototypeOf(func) === Function.prototype); // true
