// Partition

// I - linked list with a partition variable given
// O - linked list with values less than x to the left of 
//      x, and any duplicates of x to be after the elements less than x (position arbitrary)
//      All elements greater than x, placed arbitrarily around x, so long as all less than 
//      values are on the left of x
// C - storage of linkedlist items; possible? Is it possible to do it with storage, maybe using
//      a stack?
// E - linkedlist without variables less than x

/*


Create a stack to hold items greater than or equal to x
Create a stack to hold items less than x

Start with head variable
     while node.next
         if node.data < x
             lessThanstack.push(node)
             delete node
         if node.data >= x
             greaterThanstack.push(node)
             delete node

     while greaterThanstack.length
         let greaterNode = stack.pop;
         if (!linkedList.head) {
             linkedList.head = greaterNode;
         } else {
             greaterNode.next = linkedList.head; 
             linkedList.head = greaterNode;
         }

       while lessThanstack.length
         let lessThanNode = stack.pop;
         if (!linkedList.head) {
             linkedList.head = lessThanNode;
         } else {
             lessThanNode.next = linkedList.head; 
             linkedList.head = lessThanNode;
         }
     
     return linkedList 

*/