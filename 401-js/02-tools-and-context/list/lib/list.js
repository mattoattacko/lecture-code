'use strict';

class List {
  constructor() {
    this.length = 0;
  }

  push(item) {
    this[this.length++] = item;
  }

  pop() {
    this.length--;
    return this[this.length];
  }

  map(callback) {
    let newList = new List();
    for( let i = 0; i <= this.length-1; i++ ) {
      newList.push( callback(this[i], i) );
    }
    return newList;
  }
}

module.exports = List;