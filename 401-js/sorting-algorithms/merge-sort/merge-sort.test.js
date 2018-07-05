'use strict';

const mergeSort = require('./index.js');

let isSmaller = (a, b) => a < b;
let isGreater = (a, b) => a > b;

let nums = [3,1440,15,12,230];
let greaterNums = mergeSort(nums, isGreater);
// let smallerNums = mergeSort(nums, isGreater);

let products = [
  {
    name: 'gummy Butter',
    price: 11.01,
  },
  {
    name: 'CORN hatS',
    price: 71.01,
  },
  {
    name: 'Yellow hotdogs',
    price: 2.01,
  },
  {
    name: 'dark miLK',
    price: 89.01,
  },
];

let alphabetical = (a, b) => a.name.toLowerCase() < b.name.toLowerCase();
// let result = mergeSort(products, alphabetical);


