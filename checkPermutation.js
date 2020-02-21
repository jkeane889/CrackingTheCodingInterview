// Arrays & Strings

// Check Permutation

/*
    Check Permutation: Given two strings, write a method to decide if one is a permutation of the other. 
    Hints: #7, #84, #722, #737 
*/

/*
    I - two strings (that may be permutations of each other)
    O - boolean indicating whether two stings are permutations of each other
    C - logarithmic run time (log n)
    E - whitespace? lowercase/uppercase?

*/

/*
    Create a binary tree using the string values of one input value

    Create empty object for hashMap
    Create a hash table for string1

    Add up all ASCII values of string1
    create linkedList for string1
    get array's length (0 in this first string's case)
    set hashMap's 0 to ASCII total of string one
    set hashTable's position 0 to LinkedList of string1

    Add up all ASCII values of string2
    if total equals hashMap's value, and is returning LinkedList from hashTable
    return true
    else 
    return false

*/

const LinkedList = () => {
    let list = {};
    list.head = null;
    list.tail = null;
    list.size = null;

    list.addToTail = (value) => {
        let newTail = Node(value);

        if (!list.head) {
            list.head = newTail
        };

        if (list.tail) {
            list.tail.next = newTail
        };

        list.tail = newTail
    };

    list.removeHead = () => {
        if (!list.head) {
            return null
        };

        let currentHead = list.head;
        list.head = list.head.next
        return currentHead.value
    };

    list.contains = (target) => {
        let node = list.head;

        while (node) {
            if (node.value === target) {
                return true
            };

            node = node.next
        };

        return false
    };

    list.getSize = () => {
        let node = list.head;

        while (node) {
            list.size += 1;
            node = node.next;
        };

        return list.size;
    };

    return list;
};

const Node = (val) => {
    let node = {};
    node.value = val;
    node.next = null;
    return node;
};

const getASCIVal = (str) => {
    let strASCVal = 0;

    for (let i = 0; i < str.length; i++) {
        let charVal = str.charCodeAt(i);
        strASCVal += charVal;
    };

    return strASCVal;
};

const checkPermutations = (str1, str2) => {
    let hashMap = {};
    let str1ASC = getASCIVal(str1);
    let str2ASC = getASCIVal(str2);
    let hashTable = [];
    let str1Value = { str1, str1ASC };

    // We could have also just gotten the ASCII values of each character of each string
    //  and kept subtracting each character value of one from the other string's total
    //  of ASCII, and then if there was either a positive or negative value remaining
    //  or 0, that would determine if the strings were permutations
    // For this problem, this was more for practice with creating hashTables
    
    let hashVal = hashTable.length;
    hashMap[hashVal] = str1ASC; 

    let str1LinkedList = LinkedList();
    str1LinkedList.addToTail(str1Value);

    hashTable[hashVal] = str1LinkedList;

};




