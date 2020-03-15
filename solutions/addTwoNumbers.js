// Add Two Numbers

/*
    You are given two non-empty linked lists representing two non-negative integers. 
    
    The digits are stored in reverse order and each of their nodes contain a single digit. 
    Add the two numbers and return it as a linked list.

    You may assume the two numbers do not contain any leading zero, except the number 0 itself.

    Example:

    Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
    Output: 7 -> 0 -> 8
    Explanation: 342 + 465 = 807.

*/

var LinkedList = function() {
    var list = {};
    list.head = null;
    list.tail = null;

    list.addToTail = function(value) {
        let newTail = Node(value);
        
        if (!list.head) {
            list.head = newTail;
        };

        if (list.tail) {
            list.tail.next = newTail;
        };

        list.tail = newTail;
    };

    list.removeHead = function() {
        if (list.head === null) {
            return null
        }

        let currentHead = list.head;
        list.head = list.head.next;

        return currentHead.value;
    };
    
    list.contains = function(target) {
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

let number1 = LinkedList();
number1.addToTail(2);
number1.addToTail(4);
number1.addToTail(3);
let number2 = LinkedList();
number2.addToTail(5);
number2.addToTail(6);
number2.addToTail(4);

/*
    create number function
        - sets variables equal to []
        - takes in a linkedList
        - traverses through list and unshift each node's value into an array
        - join array elements and parseInt it, return it

    for each LinkedList, call number helper function
        add numbers together

    take result of sum, turn into string, split it, and the create new List and add each element

    return new LinkedList
*/

const getNumber = linkedList => {
    let numArr = [];
    let node = linkedList.head;

    while (node) {
        if (node.value) {
            numArr.unshift(node.value.toString());
        }

        node = node.next
    }

    return numArr.join('')
};

const addNumbers = (linkedOne, linkedTwo) => {
    let numberOne = parseInt(getNumber(linkedOne));
    let numberTwo = parseInt(getNumber(linkedTwo));
    let result = numberOne + numberTwo;

    let newLinkedList = LinkedList();
    result = result.toString().split('').reverse().join('');

    let n = result.length - 1;
    
    while (n >= 0) {
        newLinkedList.addToTail(result[n]);
        n--;
    };

    return newLinkedList
}

console.log(addNumbers(number1, number2));