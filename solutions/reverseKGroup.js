// Reverse K Group

// Leet Code : Hard

/*
    Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

    k is a positive integer and is less than or equal to the length of the linked list. 

    If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.

    Example:

    Given this linked list: 1->2->3->4->5

    For k = 2, you should return: 2->1->4->3->5

    For k = 3, you should return: 3->2->1->4->5

    Note:

    Only constant extra memory is allowed.
    You may not alter the values in the list's nodes, only nodes itself may be changed.

*/

var reverseKGroup = function(head, k) {
    if (!head || k < 2) return head;
    
    var count = 0;
    var now = head;
    var last = head;
    var tmp = null;
    
    while (now && count < k) {
        now = now.next;
        count++;
    }
    
    if (count === k) {
        now = reverseKGroup(now, k);
        while (count-- > 0) {
            tmp = last.next;
            last.next = now;
            now = last;
            last = tmp;
        }

        last = now;
    }
    
    return last;
};