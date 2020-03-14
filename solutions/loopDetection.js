// Loop Detection

/* 
    Given a circular linked list, implement an algorithm that returns the node at the
    beginning of the loop. 
*/

/*

    I - a linkedList that's potentially circular
    O - a node that is a circular reference
    C - time complexity? Might have quadrate time
    E - no circularly linked list, return null?

    "Runner Technique"

    function to take in List
        make node equal to list.head
        make circularNode equal to null

        while there is a node
            while node.next
                if node.value node.next.next
                    circularNode = node.next.next
                    return circularNode 
                    break
            node = node.next
        
        return null

*/

const runAndCheck = (list) => {
    let node = list.head;
    let circular = null;

    while (node) {
        let nextNode = list.head; 
        while (nextNode) {
            if (node.value === nextNode.next) {
                circular = node;
                return circular;
                break;
            }
            nextNode = nextNode.next;
        };

        node = node.next
    };

    return circular;
};