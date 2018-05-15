'use strict';

const pp = require('./lib/person.js');
const ff = require('./lib/factory.js');
const cc = require('./lib/constructor.js');

const john = new cc("John Cokos");
const cathy = new cc("Cathy Cokos");

console.log(john);
console.log(cathy);
