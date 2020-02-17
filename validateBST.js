// Trees & Graphs

// Validate BST

/*

Implement a function to check if a binary tree is a binary search tree. 

*/

/*

    To check if a binary tree is a BST

    create a left stack, track values that are less than current value
    create a right stack, track values that are greater than current value

    iterate through tree with recursion

    if !root.value
        return null

    if there is no left or right value
        if node value > leftStack[0]
            return false
        if node value < rightStack[0]
            return false
        return

    if root.value
        push root.value onto both left and right stacks

        if this.left
            if this.left < leftStack[0]
                pop off element from leftStack
                push onto left stack this.left.value
                recurse through this.left
            else
                return false
        if this.right
            if this.right > rightStack[0]
                pop off element from rightStack
                push onto right stack this.right.value
                recurse through this.right
            else 
                return false
    
*/