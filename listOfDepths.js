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
            list.tail.next = node
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

const Node = (val) => {
    let node = {};
    node.value = val;
    node.next = null;
    return node;
}

class BinaryTree {
    constructor(val) {
        this.value = val;
        this.right = null;
        this.left = null 
    }

    insert(value) {
        let newTree = new BinaryTree(value);
        if (!this.value) {
            this.value = newTree;
        }

        if (!this.left) {
            this.left = newTree;
        }

        if (!this.right) {
            this.right = newTree;
        }
    }
}




