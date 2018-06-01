'use strict';

import BinaryTree from './binary-tree';
import BinarySearchTree from './bst';
import Node from './node';

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);
const seven = new Node(7);
const eight = new Node(8);
const nine = new Node(9);

const tree = new BinaryTree(one);

one.left = two;
one.right = three;
three.left = four;
three.right = five;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;

// console.dir(tree);
// console.log(tree.preOrder());
// console.log(tree.postOrder());
// console.log(tree.inOrder());


// ------------------------------------------- //
let bst = new BinarySearchTree();
let values = [9,4,17,3,6,22,5,7,20];
console.log(values);

values.map( (val) => {
  return bst.insert(val);
});

console.log(values);

console.log(bst.preOrder());
console.log(bst.postOrder());
console.log(bst.inOrder());


// console.log("Fetch 17", bst.fetch(17));
// console.log("Fetch 10", bst.fetch(10));
// bst.insert(10);
// console.log("Fetch 10", bst.fetch(10));
// console.log("Closest to 6", bst.closest(6))
// console.log("Closest to 21", bst.closest(21))
// console.log("Closest to 15", bst.closest(15))
// console.log("Min Height", bst.minHeight());
// console.log("Max Height", bst.maxHeight());
// console.log("Balanced", bst.isBalanced());
// console.log("Min", bst.min());
// console.log("Max", bst.max());
// console.log("Level Order", bst.levelOrder());
// console.log("Pre Order", bst.preOrder());
// console.log("In Order", bst.inOrder());
// console.log("Post Order", bst.postOrder());
// console.log("Exists", bst.exists(10));
