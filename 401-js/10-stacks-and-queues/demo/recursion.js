'use strict';

let add = function(a,b) {
  if ( b === 1 ) {
    return a+b;
  }
  return add(a+1, b-1);
};

console.log(add(10,5));