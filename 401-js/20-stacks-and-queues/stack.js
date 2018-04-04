'use strict';

// Our first facade ... the user doesn't care how this stack works, only that it does.
// We can swap out the "backend" for it all we want, so long as the interface & contract is unchnaged.

const stackConstructor = require("./stack-constructor");
// const stackFactory = require("./stack-factory");
// const stackSLL = require("./stack-sll");
// const stackArray = require("./stack-constructor-array");

module.exports = class stack {
    
    constructor() {
        this.stack = new stackConstructor();
    }
    
    push(value) {
        this.stack.push(value);
    }
    
    pop() {
        return this.stack.pop();
    }
    
};