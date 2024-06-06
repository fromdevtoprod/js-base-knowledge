function Graph() {
  this.vertices = [];
  this.edges = [];
}

Graph.prototype.addVertex = function (v) {
  this.vertices.push(v);
};

const g = new Graph();
// g is an object with own properties 'vertices' and 'edges'.
// g.[[Prototype]] is the value of Graph.prototype when new Graph() is executed.
console.log(g.hasOwnProperty("vertices")); // true
console.log(g.hasOwnProperty("edges")); // true
console.log(g.hasOwnProperty("addVertex")); // false
// The property 'addVertex' is not an own property of g.
// However, it is available via the prototype chain.
console.log(Object.getPrototypeOf(g).hasOwnProperty("addVertex")); // true
// The following demonstrates the prototype chain.
// g ---> Graph.prototype ---> Object.prototype ---> null
console.log(g.__proto__ === Graph.prototype); // true
console.log(Graph.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__); // null
// The constructor of an object is available through its 'constructor' property.
console.log(Graph === g.constructor); // true
// This is the same as g.constructor.prototype
console.log(Graph.prototype === g.constructor.prototype); // true
