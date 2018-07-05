'use strict'

const selectionSort = require('./index.js');

let greater = (a, b) => a > b;
let less = (a, b) => a < b;

let nums = [9,5,8,2,7,2,1]
console.log(selectionSort(nums));
console.log(selectionSort(nums, less));
console.log(selectionSort(nums, greater));

let users = [
  {
    name: 'tterrag',
    followers: 91232,
  },
  {
    name: 'nacnud',
    followers: 8000,
  },
  {
    name: 'maharg',
    followers: 3332,
  },
  {
    name: 'anen',
    followers: 1444,
  },
  {
    name: 'divad',
    followers: 1001,
  },
];

let mostFollowers = (a, b) => a.followers > b.followers;
console.log(selectionSort(users, mostFollowers));
