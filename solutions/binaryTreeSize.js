// Binary Tree Size

/*

    Suppose you are given a binary tree represented as an array. For example, 
    [3, 6, 2, 9, -1, 10] represents the following tree (where -1 is a non-existent node)

                3
            6       2
        9       10

    Write a function that determines whether the left or the right branch of the tree is
    larger.  The size of each branch is the sum of the node values.  The function
    should return the string 'Right' if the right side is larger, and 'Left' if the 
    left side is larger

    If the tree has 0 nodes or if the size of the branches are equal, return an 
    empty string

    Ex.
        Input -> [3, 6, 2, 9, -1, 10]
        Output -> Left

*/

    /*
        I - array representing nodes in a binary tree
        O - string determining 'left' or 'right' or '', depending on the inputted array
        C - time complexity with iterating through array (linear time), but also with 
            viewing each node in the tree (logarithmic time)
        E - tree whose branches are equivalent in value; empty array (zero nodes)

    */
    
    /*
        Create a tree class to repsent creation of tree from given input array
        tree.left
        tree.right
        tree.value

        Create helper method 'insert' for tree class
            if !this.left === element

            if !this.right === element

            if this.left , recurse through tree

            if this.right , recurse through tree

        For first element in array[0] -> make this equal to new binary tree, and have value equal array value at index

        Then, iterate over remainder of input array, and add to this new binary tree (above)
            if value > 0, create a newNode and call insert helper method on tree

        Create traversal method to look at each node in the tree to determine the value of each branch

        creat global MaxHeight variable, intialized to zero
        creat global branch string variable, initialize it to ''

        Traversal method
            base case: !this.left && !this.right
                if height > maxHeight
                    maxHeight = height
                    branch = branch string value
                    return
            
            recursive case: 

                if this.left
                    take node's value and add to height value, pass in branch string value 'Left'

                if this.right
                    take node's value and add to height value, pass in branch string value 'Right'

        return global branch string value
        
    */

    // ES5 functional class to create a Tree and then determine which side is larger with inner recursive
    //  function

    let BinaryTree = function(val) {

        let tree = {};
        tree['value'] = val;
        tree['left'] = null;
        tree['right'] = null;

        tree.insert = function(value) { 
            if (!tree.left) {
                tree.left = value
                return
            }

            if (!tree.right) {
                tree.right = value    
                return
            }

            if (tree.left) {
                let nodeCount = tree.left.count()
                if (nodeCount < 3) {
                    return tree.left.insert(value)
                } else {
                    return tree.right.insert(value)
                }
            }

            if (tree.right) {
                let nodeCount = tree.right.count()
                if (nodeCount < 3) {
                    return tree.right.insert(value)
                } else {
                    return tree.left.insert(value)
                }
            }
        }

        tree.count = function() {
            if (tree.value && tree.right && tree.left) {
                return 3
            } else if (tree.value && tree.right || tree.left) {
                return 2
            } else if (tree.value) {
                return 1
            }
        }

        return tree
    };

    const getMaxTreeHeight = arr => {
        let rootNode = arr[0];
        let newTree = BinaryTree(rootNode);
        let leftHeight = 0;
        let rightHeight = 0;

        for (let i = 1; i < arr.length; i++) {
            let node = BinaryTree(arr[i]);
            newTree.insert(node)
        };

        const getLeftBranch = tree => {
            if (!tree.left && !tree.right) {
                if (tree.value > 0) {
                    leftHeight += tree.value;
                }
                return
            }

            if (tree.left) {
                leftHeight += tree.value;
                getLeftBranch(tree.left)
            }

            if (tree.right) {
                leftHeight += tree.value;
                getLeftBranch(tree.right)
            }
        }

        const getRightBranch = tree => {
            if (!tree.left && !tree.right) {
                if (tree.value > 0) {
                    rightHeight += tree.value;
                }
                return
            }

            if (tree.left) {
                rightHeight += tree.value;
                getRightBranch(tree.left)
            }

            if (tree.right) {
                rightHeight += tree.value;
                getRightBranch(tree.right)
            }
        }

        getLeftBranch(newTree.left)
        getRightBranch(newTree.right)

        if (rightHeight > leftHeight) {
            return 'Right'
        } else {
            return 'Left'
        }
    };

    // Inline, more efficient recursive method using different mathematical rules

    const getTreesolution = (arr) => {
        if (!arr) return "";
        if (arr.length === 0) return "";    
        
        const sum = (arr, idx) => {
            if (idx - 1 < arr.length) {
                if (arr[idx - 1] === -1) return 0;
                return arr[idx - 1] + sum(arr, idx * 2) + sum(arr, idx * 2 + 1);
            }
            return 0;
        };

        const left = sum(arr, 2);
        const right = sum(arr, 3);
        return (left == right) ? "" : (left > right ? "Left" : "Right");
    };

    console.log(getMaxTreeHeight([3,6,2,9,-1,10]))
    console.log(getTreesolution([3,6,2,9,-1,10]))