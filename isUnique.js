// Arrays & Strings

// Is Unique

/*

    Is Unique: Implement an algorithm to determine if a string has all unique characters. 
    What if you cannot use additional data structures? 

    Hints: #44, #7 7 7, #732 

*/

/*

    I - string
    O - boolean indicating if string has all unique characters
    C - time complexity (linear)
    E - string has duplicate characters

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
        }

        if (list.tail) {
            list.tail.next = newTail
        }

        list.tail = newTail
    }

    list.removeHead = () => {
        if (!list.head) {
            return null
        }

        let currentHead = list.head;
        list.head = list.head.next
        return currentHead.value
    }

    list.contains = (target) => {
        let node = list.head;

        while (node) {
            if (node.value === target) {
                return true
            }

            node = node.next
        }

        return false
    }

    list.getSize = () => {
        let node = list.head;

        while (node) {
            list.size += 1;
            node = node.next;
        };

        return list.size;
    }

    return list;
}

const Node = (val) => {
    let node = {};
    node.value = val;
    node.next = null;
    return node;
}

const isUnique = (str) => {
    /*
        iterate over each str value
                get the character's ascii code (charCodeAt)
                push into array[i]'s LinkedList
            
            then iterate back through each array's LinkedList
                check size of each LinkedList
                if LinkedList.size > 1
                    return false

        return true
    */

    let hashMap = {
        'a': 0,
        'b': 1,
        'c': 2,
        'd': 3,
        'e': 4,
        'f': 5,
        'g': 6,
        'h': 7,
        'i': 8,
        'j': 9,
        'k': 10,
        'l': 11,
        'm': 12,
        'n': 13,
        'o': 14,
        'p': 15,
        'q': 16,
        'r': 17,
        's': 18,
        't': 19,
        'u': 20,
        'v': 21,
        'w': 22,
        'x': 23,
        'y': 24,
        'z': 25
    };

    let hashTable = createHashTable("abcdefghijklmnopqrstuvwxyz");

    for (let i = 0; i < str.length; i++) {
        let key = hashMap[str[i]];
        hashTable[key].addToTail(str[i]);
    };

    for (let j = 0; j < hashTable.length; j++) {
        let hashValue = hashTable[j];
        let listLength = hashValue.getSize();
        if (listLength > 1) {
            return false
        }
    }

    return true
};

const createHashTable = (str) => {
    /*
        create an empty array
        
        for each character in string
            create a LinkedList for each character
            push into empty array

    */

    let newHashtable = [];

    for (let i = 0; i < str.length; i++) {
        let newLinkedList = LinkedList();
        newHashtable.push(newLinkedList);
    };

    return newHashtable;
};







