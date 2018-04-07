// To do so, we use this function.
function deepFreeze(obj) {

  // Retrieve the property names defined on obj
  var propNames = Object.getOwnPropertyNames(obj);

  // Freeze properties before freezing self
  propNames.forEach(function(name) {
    var prop = obj[name];

    // Freeze prop if it is an object
    if (typeof prop === 'object' && prop !== null)
      deepFreeze(prop);
  });

  // Freeze self (no-op if already frozen)
  return Object.freeze(obj);
}

let person = {
  name:'john',
  kids: ['Zach', 'Allie'],
  cars: [
    {type:'mazda'},
    {type:'terrain'}
  ]
};

deepFreeze(person);

try {
  person.kids.push('Rosie');
  person.name = 'Cathy';
  person.address = 'Lynnwood';
} catch(e) { console.log('Nope'); }

console.log(person);
