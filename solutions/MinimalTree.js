// Trees & Graphs

// Minimal Trees

/*

Given a sorted (increasing order) array with unique integer elements, 
write an algorithm to create a binary search tree with minimal height. 

*/

/*

    Given Array = [2, 4, 6, 8, 9, 11, 13]

    I - sorted array with increasing values
    O - BST with minimal height
            - constraints with BST, each element has two node leaves
            - tree is in balance with elements from left to right going
            from least to greatest
    C - time complexity? Linear with only touching each element in the
            sorted array once; it it necessary to rearrange BST with 
            the introduction of new elements
    E - odd elements in given sorted array

        Recursive Helper Function to create root and node values of tree

        Recursive Case:
            // create new Node with a value, left and right property

            // if node.left !== 0 and node.right !== 0
                return
            // else
                if !node.value
                    node.value = value

                if !node.left && value < right
                    node.left = value
                
                if !node.right && value > right
                    node.right = value

*/

const createMinimalBST = (arr, start, end) => {
    if (end < start) {
        return null
    }

    let mid = Math.floor((start + end) / 2);
    let midNode = Node(arr[mid]);
    midNode.left = createMinimalBST(arr, start, mid - 1);
    midNode.right = createMinimalBST(arr, mid + 1, end);
    return midNode;
};

const Node = (val) => {
    let node = {};
    node.value = val;
    node.left = null;
    node.right = null;
    return node;
};

let newArr = [2, 4, 6, 8, 9, 11, 13];
let beg = 0
let fin = newArr.length;
