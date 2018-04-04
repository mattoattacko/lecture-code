
let unique = (arr) => {
  
  // Filter it, if it is an array
  return Array.isArray(arr) && arr.filter(function(elem, index, self) {
    // The filter will return the element only if it's not already there 
    // How? It returns true if THIS occurrance of the element
    // is the FIRST occurrance of the element. If not (subsequent occurrances),
    // it will be a different indexOf, false, and not added to the filtered array.
    return index === self.indexOf(elem);
  }) || arr;
  
  // the || arr at the end returns whatever you sent to the function in the 
  // event that it was not an array (this is the "or")
  
}

console.log(unique({'firstKey':1, 'secondKey':2}));
console.log(unique('string'));
console.log(unique(['a','b','c','a','d','c','e','f']));
console.log(unique(['a','b','d','a','d','c','g','f']));