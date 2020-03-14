// Trees & Graphs

// Successor

/*
    Write an algorithm to find the "next" node (i.e., in-order successor) of a given node in a binary search tree. 
    You may assume that each node has a link to its parent. 
*/

/*
    InOrder => Traverse left subtree, visit current root value, traverse right subtree
    (Reversed) => Traverse right subtree (for greater value), visit current root value, traverse left subtree 
        (which could contain another right subtree that could be great than current root value)

    I - given node in a binary search tree (random node)
    O - "next" value (closest to given node's value)
    C - linear (having to touch every potential node to the RIGHT of the given node)
    E - missing right subtree (then have to explore left subtree in case that branch has a RIGHT subtree)

    Use a stack to track current value 

    Create inner recursive function as it will require to adjust stack and return final value

    base case ->
        if !tree.right && !tree.left
            return

    recursive case ->
    
        if tree has a left branch
            recurse through leftbranch and pass in giveNode value


        if tree has a right branch
            if stack is empty
                push right branch's value onto stack
            else
                get difference between given node's value and right branch's value
                get difference between given node's value and stack[0]
                if difference between given node's value and right branch's value < difference between given node's value and stack[0] 
                    pop off element from stack and replace it with right branch's value
                    call function on current node to recurse
                else 
                    call function on current node to recurse

    return stack.pop()

*/

const successor = (value) => {
    let successStack = [];

    const findSuccessor = (value, tree) => {
        if (!tree.right && !tree.left) {
            return
        }

        if (tree.right) {
            if (!successStack.length) {
                successStack.push(tree.right.root.value)
            }

            if (tree.right.root.value > value) {
                let diffOne = tree.right.root.value - value;
                let diffTwo = successStack[0] - value;
                if (diffOne < diffTwo) {
                    successStack.pop();
                    successStack.unshift(tree.right.root.value);    
                }
            }

            if (tree.right.left) {
                findSuccessor(value, tree.right)
            }
        }
    }

    findSuccessor(value, newBT);
    return successStack.pop();
};