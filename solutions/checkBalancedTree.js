// Trees & Graphs

// Check Balanced

/*

Implement a function to check if a binary tree is balanced. 

For the purposes of this question, a balanced tree is defined to be a tree such 
that the heights of the two subtrees of any node never differ by more than one. 

*/

/*
    Create BST Data Structure

    - create new BST
    
    Create function to test new BST

        Set variable equal to the left height = 0
        Set variable equal to the right height = 0

        Create conditional to check if current tree has a left value
            if it does
                recurse through BST and increment left value by one
        
        Create conditional to check if current tree has a right value
            if it does
                recurse through BST and increment right value by one
        
        Base case: If current tree has neither a left or a right value
            return 1 - to be added to either right or left depth count
*/

class BinarySearchTree {
    constructor(val) {
        this.root = Node(val);
        this.left = null;
        this.right = null
    }

    insert(val) {
        let newTree = new BinarySearchTree(val);

        if (this.root.value < val) {
            if (!this.right) {
                this.right = newTree
            } else {
                this.right.insert(val)
            }
        } else {
            if (!this.left) {
                this.left = newTree
            } else {
                this.left.insert(val)
            }
        }
    }
}

const Node = (value) => {
    let node = {};
    node.value = value;
    return node;
}

let newBT = new BinarySearchTree(9);
newBT.insert(3);
newBT.insert(11);
newBT.insert(5);
newBT.insert(13);
newBT.insert(20);
newBT.insert(7);
newBT.insert(1);
newBT.insert(61);
newBT.insert(100);
newBT.insert(80);
console.log(newBT)

const getHeight = node => {
    if (node === null) {
        return 1
    } else {
        return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
    }
}

const checkHeights = (node) => {
    if (node.root.value === null) {
        return true
    }

    let heightDiff = getHeight(node.left) - getHeight(node.right);
    if (Math.abs(heightDiff) > 1) {
        return false
    } else {
        return checkHeights(node.left) && checkHeights(node.right)
    }
};

console.log(checkHeights(newBT));