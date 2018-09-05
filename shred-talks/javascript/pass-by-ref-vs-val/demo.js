'use strict';

// Scalar Values (strings and numbers) are always passed around or assigned by their value
// As you can see here, we set y = x and you can change it independently.
let x = 1;
let y = x;
y = 5;
console.log(x);


// Here, we create a simple object with a value property and then assign another variable to it.
// As you will soon see, that variable is not unique or a copy, but rather a reference to the
// initial one.
let a = {
  value: 1,
};
let b = a;

// 'b' appears to be the same as 'a'
console.log(b);
b.value = 7;

// After we change b's value to 7, b is now changed ...
console.log(b);

// But, so is 'a'
console.log(a);

// The same thing happens in a function.  Here, we have a function that takes in an object and changes the value property.
function foo(obj) {
  obj.value = 90;
}

// After calling that function with our object, you'll see that the object itself is now changed because that function argument is just a pointer to the object in memory, not a copy of it.
foo(a);

console.log(a);


// The code below is an infinte loop which will never finish. Why?
// We set newArr to point to arr1, which is a reference to it.
// So, when we push onto newArr, we're actually pushing onto arr1
// ... which means arr1.length keeps getting larger and larger, giving us no way out of this loop!

// let arr1 = [1,2,3];
// let newArr = arr1;
// for(let i = 0; i <= arr1.length - 1; i++) {
//   newArr.push(arr1[i]);
// }
