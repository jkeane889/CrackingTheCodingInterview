// Mock Interview 3

/*

    Jigsaw: Implement an NxN jigsaw puzzle.

            Design the data structures and explain an algorithm to solve the puzzle. 
    
            You can assume that you have a fitsWith method which, when passed two puzzle edges, 
            returns true if the two edges belong together.

    Hints:# 192, #238, #283 

*/

/*
    The N x N jigsaw puzzle can be represented with an array of arrays (adjacency matrix), with n rows and n columns

            4
         .  .  .
        .   .   .
       1    2    3

    (1) [[0, 0, 0, 1],
    (2)  [0, 0, 0, 1],
    (3)  [0, 0, 0, 1],
    (4)  [1, 1, 1, 0]]

    For given NxN jigsaw puzzle, create adjacency list to represent the graph.  Every vertex (or node) stores a list of adjacency
    vertices.

    class Graph() {
        constructor() {
            this.nodes = {}
        }
    }

    class Node () {
        constructor() {
            this.value = null;
            this.adjacentNodes = [];
        }
    }

    Adjacency List of above graph (which is also represented by adjacency matrix above):
        1: 4,
        2: 4,
        3: 4,
        4: 1, 2, 3;

    - Create a new Graph to represent NxN jigsaw board
    - Iterate over jigsaw board
    - Push into graph's "nodes" the value of each N row
    - For each element, create a new Node
    -   if the board has a 1 at any index, add to the Node's "adjacentNodes" array, the index of the column where 
        the value in that row equals 1 (co-ordinate system)
    
    fitsWith (value1, value2) {
        if (this.nodes[value1]) {
            let nodesConnections = this.nodes[value1].adjacentNodes; 
            for (let i = 0; i < nodesConnections.length; i++) {
                if (nodesConnections[i] === value2) {
                    return true
                }
            }
        }
    }

    - For fitsWith method, we can look at all nodes in Graph
    - with constant time look-up, we can access the first node with the first argument, and see whether,
    inside of its children nodes, the second argument exists (will return boolean whether node exists
        in node's children array)

*/

let jigsawBoard = [
    [0, 1, 0, 1],
    [1, 0, 1, 0],
    [0, 1, 0, 1],
    [1, 0, 1, 0],
];

class Graph {
    constructor() {
        this.nodes = {};
    };

    createAdjList(board) {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === 1) {
                    let node = Node(i);
                    node.adjacentNodes.push(j);
                    this.nodes[i] = node;
                };
            };
        };
    };

    fitsWith(node1, node2) {
        if (this.nodes[node1]) {
            let nodesConnections = this.nodes[node1].adjacentNodes; 
            for (let i = 0; i < nodesConnections.length; i++) {
                if (nodesConnections[i] === node2) {
                    return true
                };
            };
        };
    };
};

class Node {
    constructor(val) {
        this.value = val;
        this.adjacentNodes = [];
    };
};

let newGraph = new Graph;
newGraph.createAdjList(jigsawBoard);






























/*

    Stack of Boxes: You have a stack of n boxes, with widths wi, heights hi, and depths di. 
    The boxes cannot be rotated and can only be stacked on top of one another if each box in the 
    stack is strictly larger than the box above it in width, height, and depth. 
    
    Implement a method to compute the height of the tallest possible stack. 
    
    The height of a stack is the sum of the heights of each box. 
    
    Hints:#755, #194, #274, #260, #322, #368, #378 

*/

/*

    Stock Data: Imagine you are building some sort of service that will be called by up to 1,000 client 
    applications to get simple end-of-day stock price information (open, close, high, low). 
    
    You may assume that you already have the data, and you can store it in any format you wish. 
    
    How would you design the client-facing service that provides the information to client applications?
    
    You are respon­sible for the development, rollout, and ongoing monitoring and maintenance of the feed. 
    
    Describe the different methods you considered and why you would recommend your approach. 
    
    Your service can use any technologies you wish, and can distribute the information to the client
    applications in any mechanism you choose. 

    Hints: #385, #396 

*/
