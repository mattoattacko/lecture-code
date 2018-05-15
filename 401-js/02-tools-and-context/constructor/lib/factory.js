'use strict';

const Person = {

  setName(name) {
    this.name = name;
  }

}

const PersonFactory = (name) => {
  let person = Object.create(Person);
  person.setName(name);
  return person;
}

module.exports = PersonFactory;
