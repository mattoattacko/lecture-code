'use strict';

// Path needs to be a sring
function has(obj, path) {

  // Array-ify it
  let paths = path.split('.');

  // Every will return a boolean true iif every iteration returns true
  return paths.every(function(thisPath){

    // Kill it if we don't find the property.
    // e.g.  if the path is foo.bar.baz ... the first time, we check for "foo"
    if (!obj.hasOwnProperty(thisPath)) {
      return false;
    }

    // If we're here, we are still good.
    // Now, we morph the object down to just the path that we found
    // e.g. now instead of the whole object, obj is probably just obj.foo
    // So on the next iteration of the loop, we check THAT object for the next potential propery
    obj = obj[thisPath];

    // And ... Bob's yer uncle for this iteration.
    // If we end up here for every segment in the path, we win.
    return true;

  });

}


let obj = {
  name: 'John',
  phoneNumbers: {
    home: '555-1212',
    work: '555-2323'
  }
};

console.log( has(obj,'last') );
console.log( has(obj,'phoneNumbers.home') );
console.log( has(obj, 'addresses.home') );