// Trees & Graphs

// Paths with Sum

/*
    You are given a binary tree in which each node contains an integer value (which might be positive or negative). 

    Design an algorithm to count the number of paths that sum to a given value. 
    
    The path does not need to start or end at the root or a leaf, 
    but it must go downwards (traveling only from parent nodes to child nodes). 
    
    Hints: #6, #14, #52, #68, #77, #87, #94, #103, #108, #115 
*/

/*
    I - a given value and a binary tree with each node containing an integer value (positive or negative values)
    O - number of paths that total to the given value
    C - time complexity (having to touch multiple nodes more than once O x n)
    E - nodes missing integer values (empty nodes), repeating branches
*/

/*
    Traverse the tree and consider all paths

    Create two inner recursive functions (BFS & DFS)
    
    Create a temporary sum variable equal to zero
    Create a total branches variable equal to zero 
    
    Create a new queue for breadth-first recursion

    USES BOTH DEPTH FIRST & BREADTH-FIRST RECURSION TO BACK-TRACK

    create BFS algorithm to check all possible horizontal branches (have to initiate a Queue data structure)





    create DFS algorithm to check all possible linear branches (DFS uses the browser's Stack already)

        base case to come back to previous node: !this.left & !this.right 
            - in this case you've hit a left node, and you must back track
            
            if (tempSum === total) {
                totalBranch += 1;
                subtract rootNode's value from tempSum
                return
            } else {
                subtract rootNode's value from tempSum
                return
            }

        recursive case:

            // Post-Order Traversal (LEFT, RIGHT, ROOT)

            if (this.left) {
                recurse (this.left, pass in tempSum)
            }
            
            if (this.right) {
                recurse (this.right, pass in tempSum)
            }

            if (this.root.value) {
                tempSum += this.root.value
            }

*/

class Queue {
    constructor() {
      this.storage = {};
      this.count = 0;
      this.last = 1;
      this.first = 1;
    }
  
    enqueue(value) {
      this.storage[this.last] = value;
      this.count++;
      this.last++;
    }
  
    dequeue() {
      if (this.count > 0) {
        let dequeued = this.storage[this.first];
        delete this.storage[this.first];
        this.count--;
        this.first++;
        return dequeued
      }
    }
  
    size() {
      return this.count;
    }
}


const findPathsWithSum = (tree) => {
    let totalBranches = 0;
    let tempSum = 0;
    let bfsQueue = new Queue;

    const findHorizontalPaths = tree => {
        // utilizes breadth-first search
        if (tree.root) {
            bfsQueue.enqueue(tree.root.value);
        };

        while (bfsQueue.size) {
            let currentNode = bfsQueue.storage[1];

            if (currentNode.left) {
                bfsQueue.enqueue(currentNode.left);
            };

            if (currentNode.right) {
                bfsQueue.enqueue(currentNode.right);
            };

            bfsQueue.dequeue();
        };
    };

    const findVerticalPaths = tree => {
        // utilizes depth-first search



    }

    return totalBranches
};

console.log(findPathsWithSum(tree));
