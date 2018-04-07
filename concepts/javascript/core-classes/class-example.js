let personLiteral = {
  name: "",
  from: ""
};

let PersonFunction = function(name,from) {
  this.name = name;
  this.from = from;
};
PersonFunction.prototype.shout = function() { console.log("AAAA!"); };


let JohnLiteral = Object.create(personLiteral);
JohnLiteral.name = "John";
JohnLiteral.from = "WA";

console.log("Literal", JohnLiteral);

let JohnFunction = new PersonFunction("John", "WA");
console.log("Function", JohnFunction);
JohnFunction.shout();


class Person {

  constructor(name, from) {
    this.name = name;
    this.from = from;
  }

  shout() {
    console.log("ASDFASDFADSFSD");
  }

}

let JohnClass = new Person("John", "NJ");
console.log("Class", JohnClass.name);
JohnClass.shout();