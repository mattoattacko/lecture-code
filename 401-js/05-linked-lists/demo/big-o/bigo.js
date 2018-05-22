for( let i=0; i<=n.length; i++ ) {...}  // O(n)

for( let i=0; i< 9; i++) {...}  // O(1)



reverseIterative(Node head){

  Node currNode = head;
  Node nextNode = null;
  Node prevNode = null;

  while(currNode!=null){
    nextNode = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = nextNode;
  }

  head = prevNode;
}

reverseRecursion(Node ptrOne,Node ptrTwo, Node prevNode){
  if(ptrTwo!=null){
    if(ptrTwo.next!=null){
      Node t1 = ptrTwo;
      Node t2 = ptrTwo.next;
      ptrOne.next = prevNode;
      prevNode = ptrOne;
      reverseRecursion(t1,t2, prevNode);
    }
    else{
      ptrTwo.next = ptrOne;
      ptrOne.next = prevNode;
      System.out.println("\n Reverse Through Recursion");
      display(ptrTwo);
    }
  }
  else if(ptrOne!=null){
    System.out.println("\n Reverse Through Recursion");
    display(ptrOne);
  }
}