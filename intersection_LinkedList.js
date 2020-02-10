/*

LinkedList Intersection

Given two (singly) linked lists, determine if the two lists intersect. Return the intersecting node. Note that the intersection is defined based on reference, not value. That is, if the kth
node of the first linked list is the exact same node (by reference) as the jth node of the second
linked list, then they are intersecting. 

*/

/*

    I - two linkedLists with varied nodes in lists
    O - boolean indicating whether the lists are linked
    C - n/a
    E - n/a

    Helper function to get the lengths of linkedList as parameter
        set node equal to linkedList.head
        create variable for length

        while node
            add one to the length
        
        return length
        
    Helper function to get the node to start comparison at
        let node = linkedList.head
        
        while node && difference > 0
            node = node.next
            difference -= 1
        
        return node
            
    Function to compare linkedList & nodes
        take in both linkedLists to compare in parameters
        let lengthOne = helperFunction(list1)
        let lengthTwo = helperFunction(list2)
        let intersection = null

        if (lengthOne > lengthTwo) 
            difference = lengthOne - lengthTwo
            startingNode = helper function to get startingNode (list1)
            let firstnode = startingNode
            let secondnode = list2.head

            while (firstnode && secondnode)
                if firstnode.data === secondnode.data
                    intersection = firstnode.data
                    return intersection
                    break
                else 
                    firstnode = firstnode.next
                    secondnode = secondnode.next


        else if (lengthTwo > lengthOne)
            difference = lengthTwo - lengthOne
            startingNode = helper function to get startingNode (list2)
            let node = startingNode
            
            whlie (node)

        return null

*/

const getListLength = (list) => {
    let node = list.head;
    let length = 0;

    while (node) {
        length += 1;
        node = node.next;
    };

    return length
};

const startComparison = (lnglist, difference) => {
    let node = lnglist.head;

    while (node && difference) {
        difference -= 1;
        node = node.next;
    };

    return node
};

const findIntersection = (listOne, listTwo) => {
    let lengthOne = getListLength(listOne);
    let lengthTwo = getListLength(listTwo);
    let intersection = null;

    if (lengthOne > lengthTwo) {
        let diff = lengthOne - lengthTwo;
        let startNode = startComparison(listOne, diff);
        let secondNode = listTwo.head;

        while (startNode && secondNode) {
            if (startNode.value === secondNode.value) {
                intersection = secondNode
                return intersection;
                break;
            } else {
                secondNode = secondNode.next;
                startNode = startNode.next;
            }
        }
    } else if (lengthTwo > lengthOne) {
        let diff = lengthTwo - lengthOne;
        let startNode = startComparison(listTwo, diff);
        let firstNode = listOne.head;

        while (startNode && firstNode) {
            if (startNode.value === firstNode.value) {
                intersection = firstNode
                return intersection;
                break;
            } else {
                firstNode = firstNode.next; 
                startNode = startNode.next;
            }
        }
    }

    return intersection
};