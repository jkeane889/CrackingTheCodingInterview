/*

    Palindrome

    Implement a function to check if a linked list is a palindrome. 

*/

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

/*
    Palindrome LinkedList Checker
    Implement a function to check if a linked list is a palindrome. 

*/

// I - LinkedList with string values
// O - Boolean indicating whether a linkedList is a palindrome
// C - time/space
// E - n/a

/*

    create helper function to check if a string is a palindrome
        takes string as a parameter and calls toLower() on it

        if string === string.reverse
            return true
        else 
            return false

    create function to iterate over values in LinkedList
        takes linkedList as a parameter
        create an empty string
        look at head and set equal to node

        while (node.next)
            add node.value to empty string
            reset node to node.next

        return palindromeChecker of empty string

*/

const palindromeChecker = (str) => {
    let lowerStr = str.toLowerCase();
    let revStrArr = str.toLowerCase().split('').reverse().join('');

    if (lowerStr === revStrArr) {
        return true
    } else {
        return false
    }
}

const palindromeList = (list) => {
    let newString = '';
    let node = list.head;

    while (node) {
        newString += node.value;
        node = node.next;
    }

    return palindromeChecker(newString);
};

let stringPal = "racecar"
linkedListPal = LinkedList();
linkedListPal.addToTail("r");
linkedListPal.addToTail("a");
linkedListPal.addToTail("c");
linkedListPal.addToTail("e");
linkedListPal.addToTail("c");
linkedListPal.addToTail("a");
linkedListPal.addToTail("r");

console.log(`Is ${stringPal} a palindrome: `, palindromeList(linkedListPal));