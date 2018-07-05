'use strict';

const selectionSort = module.exports = function(array, compare) {

  // this algorithm is considerd to be "O(n^2)" because
  // it run "n" times "n" times in the worst case
  // so if 8 items are in the object the algorithm will run 8^2 (64) times
  // so if "n" items are in the object the algorithm will run n^2 times

  // by default sort is smallest to largest
  compare = compare ? compare : (a, b) => a < b;

  for(let i = 0; i < array.length; ++i){ // runs n times

    var swapIndex = i;

    for(let j = i + 1; j < array.length; ++j){ // runs n times in the worst case
      // set the swapIndex to the last value that needs to be swapped
      if(compare(array[j],  array[swapIndex]))
        swapIndex = j;
    }

    if (swapIndex != i){
      // swap the swapIndex value with the current value at i
      let tmp = array[i];
      array[i] = array[swapIndex];
      array[swapIndex] = tmp;
    }
  }
  return array;
};
