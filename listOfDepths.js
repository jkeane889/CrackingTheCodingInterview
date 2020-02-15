// Trees & Graphs

// List of Depths

/*
    Given a binary tree, design an algorithm which creates a linked list of all
    the nodes at each depth.
*/

/*

    I - given a binary tree
    O - linkedLists based on depth of tree
    C - time complexity? Iterating over children in node (linear), having to touch each node in tree (log n)
    E - nodes without children (don't create a new linkedList??)

    Post-Order Traversal (Left, Right, Root) - this will capture to leaf nodes and then trace back to the root
        (preceding level)
    
        
    Base Case: When you reach a leaf node (this.right === null && this.left === null)
        addTail to LinkedList and then return
        
    Recursive Case:
        Traverse the left subtree, call recurse on left-subtree and add element to LinkedList
        Traverse the right subtree, call recurse on right-subtree and add element to LinkedList
        Visit the root node and add element to LinkedList
        
*/

const LinkedList = () => {
    let list = {};
    list.head = null;
    list.tail = null;

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

    return list;
}


class BinaryTree {
    constructor(val) {
        this.root = Node(val);
        this.right = null;
        this.left = null 
    }
    
    insert(val) {
        var newNode = new BinaryTree(val);
        // if less-than
        if (this.root.value < val) {
            if (this.right === null) {
                this.right = newNode;
            } else {
                this.right.insert(val);
            }
        } else {
            if (this.left === null) {
                this.left = newNode;
            } else {
                this.left.insert(val);
            }
        }
    }
}

const Node = (val) => {
    let node = {};
    node.value = val;
    node.next = null;
    return node;
}

let newBT = new BinaryTree(9);
newBT.insert(3);
newBT.insert(11);
newBT.insert(5);
newBT.insert(13);
newBT.insert(20);
newBT.insert(7);
newBT.insert(1);
console.log(newBT)

const levelOrderSearch = (rootNode) => {
    // create global store for all created linkedLists
    let listStorage = [];
    let newList = LinkedList();
    newList.addToTail(rootNode);
    let current = newList.head;

    while (current) {
        listStorage.push(current);
        if (current.value.right) {
            newList.addToTail(current.value.right);
        }

        if (current.value.left) {
            newList.addToTail(current.value.left);
        }

        current = current.next;
        newList.removeHead();
    }

    return listStorage;
};

console.log(levelOrderSearch(newBT));


