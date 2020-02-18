// Trees & Graphs

// Common Ancestor

/*
    Design an algorithm and write code to find the first common ancestor of two nodes in a binary tree. 
    Avoid storing additional nodes in a data structure. NOTE: This is not necessarily a binary search tree. 
*/

/*
    Binary tree - if root value is greater than nodes, or less than given node values,
        slice binary tree and only look at one or the other side of the tree (this would
        be the ideal approach if we were dealing with a binary search tree)

    create common ancestor variable

    Recursive Approach

    if !this.left && !this.right
            if this.value === node1 || this.value === node2
                return true
            else
                return

    if this.value === node1 || this.value === node2
        return true                

    if this.left.value === node1 && this.right.value === node2
            common ancestor = this.node

    if this.left.value === node1 || this.left.value === node2
        set variable equal to this.value as common ancestor
        if (this.left.call(recursive search function)) // if this is true
            return common ancester

    if this.right.value === node1 || this.right.value === node2  
        set variable equal to this.value as common ancestor
        if (this.right.call(recursive search function)) // if this is true
            return common ancester

*/

const commonAncestor = (tree, node1, node2) => {
    let theCommonAncestor = null;

    const findAncestor = (tree, node1, node2) => {
        // base case
        if (!tree.left && !tree.right) {
            return;
        };
        
        if (tree.left) {
            if (tree.left.root.value === node1 || tree.left.root.value === node2) {
                theCommonAncestor = tree.root;
                findAncestor(tree.left, node1, node2);
            } else {
                findAncestor(tree.left, node1, node2);
            }
        };

        if (tree.right) {
            if (tree.right.root.value === node1 || tree.right.root.value === node2) {
                theCommonAncestor = tree.root;
                findAncestor(tree.right, node1, node2);
            } else {
                findAncestor(tree.right, node1, node2);
            }
        };
    };

    findAncestor(tree, node1, node2);

    return theCommonAncestor;
};