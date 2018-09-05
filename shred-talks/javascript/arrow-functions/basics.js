// A typical JS Function declaration.
function sayItTheOldFashionedWay(word) {
  console.log(word);
}

// Declaring a function using a variable. Given this, you can easily pass this as a parameter to another function.
let sayIt = function (word) {
  console.log(word);
};

// That same "sayIt" function written out as arrow functions ...
// Given a single parameter, enclosing it in () is optional.
//    sayItArrow1 and sayItArrow2 are the same thing.
let sayItArrow1 = (word) => { console.log(word); };
let sayItArrow2 = word => { console.log(word); };
sayItArrow1('Code 301');
sayItArrow2('Code 301');

// When returning a value, if you have multiple lines of logic, you'll want to use {} to encapsulate that logic.
let sayItArrow3 = (word) => {
  let uc = word.toUpperCase();
  return uc;
};

console.log(sayItArrow3('code 301'));

// ... or, if you only need one line, you can skip the {} and the return. In arrow functions, without the {}, whatever is after the arrow is automatically (implicitly) returned
// sayItArrow3 and sayItArrow4 are the same
let sayItArrow4 = word => word.toUpperCase();

console.log(sayItArrow4('code 301'));
