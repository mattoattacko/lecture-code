let numbers = [1,3,4,6,7,2,3];

// numbers.sort();
// numbers.reverse();

// numbers.sort( (a,b) => {
//     return b-a;
// });


let people = ["John", "Josie", "Jeff", "Allie"];

console.log(people);

// people.sort();

people.sort( (a,b) => {

  let A = a.toUpperCase();
  let B = b.toUpperCase();

  if ( A > B ) { return -1; }
  if ( A < B ) { return 1; }
  return 0;

});










