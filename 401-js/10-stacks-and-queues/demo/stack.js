'use strict';

class Stack {

  constructor() {
    this.storage = new Array();
  }

  push(item) {
    this.storage.unshift(item);
  }

  pop() {
    return this.storage.shift();
  }

}

let s = new Stack();
s.push(1);
s.push(2);
s.push(3);
s.push(4);

console.log(s);
console.log(s.pop(), s);
console.log(s.pop(), s);
console.log(s.pop(), s);
console.log(s.pop(), s);

module.exports = Stack;