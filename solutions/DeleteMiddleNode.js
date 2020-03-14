// Delete Middle Node

/*

Implement an algorithm to delete a node in the middle (i.e., any node but
the first and last node, not necessarily the exact middle) of a singly linked list, given only access to
that node.

EXAMPLE

lnput:the node c from the linked lista->b->c->d->e->f
Result: nothing is returned, but the new linked list looks like a->b->d->e->f 

*/

// Input: Node from a linked list
// Ouput: Nothing; but linked list items have changed 
// Constraints: Time/Space complexlity; constant??
// Edge Cases: n/a

// create function to take in node 
//  if node has a previous node
//      take previous node, and set its next value to current node's next value
//  if node has a next node
//      take next node, and set it's previous value to current node's previous value
//  then delete current node

const deleteNode = (node) => {
    if (node === null || node.next === null) {
        return false;
    }

    if (node.next) {
        node.next = node.next.next;
        node.data = node.next.data;
        return true;
    }
}