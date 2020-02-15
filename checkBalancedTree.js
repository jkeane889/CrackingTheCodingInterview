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

let rightHeightMax = 0;
let rightHeight = 0;
let leftHeightMax = 0;
let leftHeight = 0;

const checkRightBalance = (tree, height) => {

    if (!tree.right && !tree.left) {
        if (rightHeight > rightHeightMax) {
            rightHeightMax = rightHeight;
            rightHeight = 0;    
            return
        }
    }

    if (tree.right) {
        rightHeight += 1;
        checkRightBalance(tree.right, rightHeight)
    }

    if (tree.left && height === 0) {
        rightHeight += 1;
        checkRightBalance(tree.left, rightHeight)
    }
}

const checkLeftBalance = (tree, height) => {

    if (!tree.right && !tree.left) {
        if (leftHeight > leftHeightMax) {
            leftHeightMax = leftHeight;
            leftHeight = 0;
            return
        }
    }

    if (tree.right) {
        leftHeight += 1;
        checkLeftBalance(tree.right, leftHeight)
    }

    if (tree.left && height === 0) {
        leftHeight += 1;
        checkLeftBalance(tree.right, leftHeight)
    }
}

const checkHeights = () => {
    checkRightBalance(newBT, rightHeight);
    checkLeftBalance(newBT, leftHeight);
    
    if (rightHeightMax > leftHeightMax) {
        let diff = rightHeightMax - leftHeightMax;
        if (diff > 1) {
            return false
        }
    } else if (leftHeightMax > rightHeightMax) {
        let diff = leftHeightMax - rightHeightMax;
        if (diff > 1) {
            return false
        }
    }

    return true
};

console.log(checkHeights());