'use strict'

const Node = require('./node')

module.exports = class {
  constructor(maxSize=1048) {
    this.head = null
    this.maxSize = maxSize // used to overflow the stack; either error or create a new stack
    this.size = 0
  }

  push(val) {
    let node = new Node(val)

    if(!this.head) return this.head = node
    node.next = this.head
    this.size++
    return this.head = node
  }

  pop() {
    if(!this.head) return null
    let temp = this.head
    this.head = this.head.next
    temp.next = null
    return temp
  }

  peek() {
    return this.head
  }
}