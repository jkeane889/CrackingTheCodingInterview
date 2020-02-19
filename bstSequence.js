// Trees & Graphs

// BST Sequence

/*

    A binary search tree was created by traversing through an array from left to right and inserting each element. 
    Given a binary search tree with distinct elements, print all possible arrays that could have led to this tree.

    I - Binary Tree with 2 as root, 1 & 3 as children
    O - All array combinations with root(s) as first element
    C - touching each element in the array more than once O(2(N))
    E - duplicates (if ordering of array doesn't matter)

*/

/*

    Create a set to hold potential array combinations
    
    // use backtracking to create all potential array combinations

    // base case: if !bsTree.right || !bs.Tree.left
    //  combination.push(bsTree.root.value);
    //  combinations.push(combination);
    //  combination.pop();
    //  return 

    // let initialValue = bsTree.root.value;
    // combination.push(initialvalue)
    // if bsTree.left
    //  (combination.push(recurse(bsTree.left.value)))
    // if bsTree.right
    //  (combination.push(recurse(bsTree.right.value)))

*/

const findBstSequences = (tree) => {
    let combinations = {};
    let combination = [];
    let treeValues = [];

    const getTreeValues = (bsTree) => {
        // use backtracking to create all potential array combinations

        // base case: if !bsTree.right || !bs.Tree.left
        //  combination.push(bsTree.root.value);
        //  combinations.push(combination);
        //  combination.pop();
        //  return 

        // let initialValue = bsTree.root.value;
        // combination.push(initialvalue)
        // if bsTree.left
        //  (combination.push(recurse(bsTree.left.value)))
        // if bsTree.right
        //  (combination.push(recurse(bsTree.right.value)))

        if (!bsTree.left && !bsTree.right) {
            return
        }

        let initialValue = bsTree.root.value;
        treeValues.push(initialValue);

        if (bsTree.left) {
            treeValues.push(bsTree.left.root.value);
            getTreeValues(bsTree.left);
        };

        if (bsTree.right) {
            treeValues.push(bsTree.right.root.value);
            getTreeValues(bsTree.right);
        };
    };

    getTreeValues(tree);

    const getCombinations = (arr) => {
        // base case, if arr.length === 0
        //  push arr into combinations

        // recursive case

    };

    return combinations;
};

console.log(findBstSequences(newBST));
