// 102. Binary Tree Level Order Traversal

/*
    Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

    For example:
    Given binary tree [3,9,20,null,null,15,7],
         3
        / \
       9  20
         /  \
        15   7
    
        return its level order traversal as:
    
    [
        [3],
        [9,20],
        [15,7]
    ]

*/

const levelOrder = root => {
    if (!root) {
        return []
    }

    // breadth-first search
    // Initialize q wih the root element
    let queue = [root], res=[];

    // push root node into the queue
    while (queue.length) {
        // set a variable equal to amount of elements in queue
        let currentLayerAmount = queue.length
        // for current level in queue, create an array
        let currentLayer = [];
        for (let i = 0; i < currentLayerAmount; i++) {
            // for each element remove from front of queue, and set it equal to 'n'
            let n = queue.shift()
            // push element's value into current Layer
            currentLayer.push(n.val)
            // if node has a left value, push this onto the queue
            if (n.left) {
                queue.push(n.left)
            }

            // if node has a right value, push this onto the queue
            if (n.right) {
                queue.push(n.right)
            }
        }
        
        // push the final resulting layer into the larger results array
        res.push(currentLayer)
    }

    return res
}