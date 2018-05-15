function sayHello(city, state) {
  return `Welcome, ${person.name} from ${city}, ${state}`;
}

let person = { name: "John" };

console.log( sayHello.call(person, "seattle", "wa") );

let params = ['seattle', 'wa'];

console.log( sayHello.apply(person, params) );
