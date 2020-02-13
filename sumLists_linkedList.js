/*

Sum Lists

You have two numbers represented by a linked list, where each node contains a single
digit. The digits are stored in reverse order, such that the 1 's digit is at the head of the list. 

Write a function that adds the two numbers and returns the sum as a linked list

*/

// I - two numbers represented by a linked list, with node's value
//      representing digit of number in reverse order
// O - sum of two linked-listed numbers as its own linkedList
// C - time/space
// E - uneven linked list lengths (adding zero to front of number if necessary)

const LinkedList = () => {
    var list = {};
    list.head = null;
    list.tail = null;

    list.addToTail = (value) => {
        let newTail = Node(value);
        
        if (!list.head) {
            list.head = newTail;
        };

        if (list.tail) {
            list.tail.next = newTail;
        };

        list.tail = newTail;
    };

    list.removeHead = () => {
        if (list.head === null) {
            return null
        }

        let currentHead = list.head;
        list.head = list.head.next;

        return currentHead.value;
    };

    list.contains = (target) => {
        let node = list.head;

        while (node) {
            if (node.value === target) {
            return true
            }

            node = node.next
        }

        return false
    };

    return list;
};

var Node = function(value) {
    var node = {};

    node.value = value;
    node.next = null;

    return node;
};

linkedListOne = LinkedList();
linkedListTwo = LinkedList();

linkedListOne.addToTail(7);
linkedListOne.addToTail(1);
linkedListOne.addToTail(6);

linkedListTwo.addToTail(5);
linkedListTwo.addToTail(9);
linkedListTwo.addToTail(2);

console.log("This is the first linkedList: ", linkedListOne);
console.log("This is the second linkedList: ", linkedListTwo);

const sumLists = (list1, list2) => {
    let reversedStringOne = createString(list1);
    let reversedStringTwo = createString(list2);

    if (reversedStringOne.length < reversedStringTwo.length) {
        reversedStringOne.unshift('0');
    } else if (reversedStringTwo.length < reversedStringOne.length) {
        reversedStringTwo.unshift('0');
    }

    let parsedStringOne = parseInt(reversedStringOne);
    let parsedStringTwo = parseInt(reversedStringTwo);

    let sum = parsedStringOne + parsedStringTwo;
    let sumList = reversedLinkedList(sum);
    
    return sumList;
}

const reversedLinkedList = (str) => {
    let stringArray = str.toString().split('');
    let newLinkedList = LinkedList();

    while (stringArray.length) {
        let char = stringArray.pop();
        newLinkedList.addToTail(char);
    }

    return newLinkedList
}

const createString = (list) => {
    let digitString = [];
    let node = list.head;

    while (node) {
        let nodeStr = node.value.toString();
        digitString.unshift(nodeStr);
        node = node.next;
    }

    return digitString.join('')
};

sumLists(linkedListOne, linkedListTwo);