'use strict';

let pushpop = require('./stack-push-pop.js');
let shiftunshift = require('./stack-shift-unshift.js');

class Stack {
  constructor(type) {
    switch(type) {
      case 'pushpop':
        this.stack = new pushpop();
        break;
      case 'shiftunshift':
        this.stack = new shiftunshift();
        break;
      default:
        this.stack = new pushpop();
        break;
    }
  }

  push(value) {
    this.stack.push(value);
  }

  pop() {
    return this.stack.pop();
  }
}

module.exports = Stack;
