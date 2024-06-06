/** Example 1 */
function doSomething() {}
console.log(doSomething.prototype); // doSomething {}

/** Example 2 */
var doSomethingElse = function () {};
console.log(doSomethingElse.prototype); // doSomethingElse {}

/** Example 3 */
function sayHi() {}
sayHi.prototype.hi = "Hello";
console.log(sayHi.prototype);

/** Example 4 */
function sayHello() {}
sayHello.prototype.hello = "Hi";
var sayHelloInstance = new sayHello();
sayHelloInstance.prop = "everybody";
console.log(sayHelloInstance);

/** Example 5 */
function goodMorning() {}
goodMorning.prototype.john = "Doe";
var goodMorningInstance = new goodMorning();
goodMorningInstance.jane = "Doe";
console.log("goodMorningInstance.jane: " + goodMorningInstance.jane);
console.log("goodMorningInstance.john: " + goodMorningInstance.john);
console.log("goodMorning.jane: " + goodMorning.jane);
console.log("goodMorning.john: " + goodMorning.john);
console.log("goodMorning.prototype.jane: " + goodMorning.prototype.jane);
console.log("goodMorning.prototype.john:  " + goodMorning.prototype.john);
