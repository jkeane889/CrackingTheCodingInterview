// Mock Interview 1

/*
    Q1: String Compression: Implement a method to perform basic string compression using the counts of repeated characters. 
    
    For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not become smaller than 
    the original string, your method should return the original string. You can assume the string has only uppercase
    and lowercase letters (a - z). 
    
    Hints: #92, #110 

*/

/*

    String Compression
    
    I - string with various uppercase and lowercase letters
    O - either the compressed string with each letter and a count representing letters repetition in string OR
        if original string is shorter than the compressed string, the original string
    C - n/a
    E - original string's length is less than compressed string's length OR given an empty string OR given a 
            a string with not repeating characters

    Example Output: "aabcccccaaa" => "a2b1c5a3"

    - Compressed string is in order (doesn't accumulate repeating characters in different string locations, such as "a" above)
    
    Recursive Strategy

    Input is string and count variable

    create storage variable for original code
    create compressed string variable
    create string = ''

    before passing in string value, turn all characters to lower case

    base case: if current element is not the same as starting value of string
                    append starting value and count to compressed string variable
                    return index of current element in input string

    recursive case:
                
                create i variable first equal to zero (start of string)
                    on return of i from base case, this will update to start at new character

                while i < original string.length    
                    push into empty string current character
                    call recursive function and pass in blank string, original string, and 

*/

    const compressString = (str) => {
        let original = str.toLowerCase();
        let compressedStr = '';
        let current = '';
        let count = 0;
    
        const createStrCnt = (current, string) => {            
            if (current !== string) {
                let charCount = current.toString() + count.toString();
                count = 0;
                current = '';
                return charCount;
            }

            for (let i = 0; i < str.length; i++) {
                if (!current.length) {
                    current += str[i]
                }

            }
        }

        createStrCnt(str);

        if (original.length < compressedStr.length) {
            return original
        } else {
            return compressedStr
        };
    };

/*
    Q2: Ants on a Triangle: There are three ants on different vertices of a triangle. 
    
    What is the probability of collision (between any two or all of them) if they start walking
    on the sides of the triangle? Assume that each ant randomly picks a direction, with either 
    direction being equally likely to be chosen, and that they walk at the same speed. 
    
    Similarly, find the probability of collision with n ants on an n-vertex polygon. 
    
    Hints: #157, #195, #296
*/

/*
    Probability is going to vary based on direction that ants choose and the amount of sides of polygon

    In what cases will they not collide? 
    
    They will not collide if they are all walking in the same direction

    Ant count === n sides of polygon ?

    Total Direction Choices = ant count * 2 (left or right)
    Choosing one direction = 1 * number of n sides

*/

const findDirection = (ants, sides) => {
    let totalDirectionChoices = ants * 2; // total ants choosing either left or right (2 choices)
    let oneDirection = sides;
    let probability = oneDirection / totalDirectionChoices;
    return probability
};

/*
    Q3:
    
    Random Node: You are implementing a binary tree class from scratch which, in addition to insert, 
    find, and delete, has a method getRandomNode() which returns a random node from the tree. 
    
    All nodes should be equally likely to be chosen. Design and implement an algorithm for getRandomNode, 
    and explain how you would implement the rest of the methods. 
    
    Hints: #42, #54, #62, #75, #89, #99, #112, #119 

*/

    class BinaryTree {
        constructor(val) {
            this.root = Node(val);
            this.right = null;
            this.left = null 
        }
        
        insert(val) {
            var newNode = new BinaryTree(val);
            // if less-than
            if (this.root.value < val) {
                if (this.right === null) {
                    this.right = newNode;
                } else {
                    this.right.insert(val);
                }
            } else {
                if (this.left === null) {
                    this.left = newNode;
                } else {
                    this.left.insert(val);
                }
            }
        }
    }

    const Node = (val) => {
        let node = {};
        node.value = val;
        node.next = null;
        return node;
    }

    let newBT = new BinaryTree(9);
    newBT.insert(3);
    newBT.insert(11);
    newBT.insert(5);
    newBT.insert(13);
    newBT.insert(20);
    newBT.insert(7);
    newBT.insert(1);
    console.log(newBT)

    const traverseTree = (tree) => {
        /*
            Binary Search Tree - each node has two potential options (left or right)

            Get the total nodes in the tree
            Store the total outside of the inner recursive function
            Keep a left tracker to track number of nodes on the left part of the tree from the root node
            Keep a right tracker to track number of nodes on the right part of the tree from the root node

            For even direction either left or right, divide total left and total right nodes by total nodes
        */

        let total = 0;
        let rightTotal = 0;
        let leftTotal = 0;

        let recurseTree = (tree) => {
            /* 
                when you visit a particular node, add a visited flag to it
                to desginate that it has been counted in the total

            */

            if (!tree.left && !tree.right) {
                if (!tree.visited) {
                    tree.visited = true;
                }
                total += 1;
                return
            }

            if (tree.left) {
                if (!tree.left.visited) {
                    tree.left.visited = true;
                    leftTotal += 1;
                    total += 1;
                    recurseTree(tree.left);
                } else {
                    recurseTree(tree.left);
                };
            };

            if (tree.right) {
                if (!tree.right.visited) {
                    tree.right.visited = true;
                    rightTotal += 1;
                    total += 1;    
                    recurseTree(tree.right);
                } else {
                    recurseTree(tree.right);
                };
            };
        };

        return { total, rightTotal, leftTotal };
    };

    const getProbability = (totals) => {
        if (totals.total) {
            let totalNodes = totals.total;
            let rightNodes = totals.rightTotal;
            let leftNodes = totals.leftTotal;

            let randomProbs = ((rightNodes + leftNodes) / totalNodes);
            return randomProbs;
        }
    };