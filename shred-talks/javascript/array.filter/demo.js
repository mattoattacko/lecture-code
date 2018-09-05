// array.map demo

let people = [
  { name: 'John', role: 'Dad' },
  { name: 'Cathy', role: 'Mom' },
  { name: 'Zach', role: 'Kid' },
  { name: 'Allie', role: 'Kid' },
];

let parents = people.filter(person => person.role !== "Kid");
console.log(parents);

let nums = [1,2,3,4,5,6,7];
let evens = nums.filter( (num) => {
  return !(num % 2);
});
console.log(evens);

