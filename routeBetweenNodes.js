    // Trees & Graphs

    // Route Between Nodes

    /*
        Given a directed graph, design an algorithm to find out whether there is a
        route between two nodes.
    */

    /*
        I - directed graph
        O - boolean indicating whether there is a route between two nodes
        C - n/a
        E - n/a
    */

   class LinkedList {
    constructor() {
        this.list = {}
        this.head = null;
        this.tail = null;
    }

    addToTail(value) {
        let newTail = Node(value);

        if (!this.head) {
            this.head = newTail
        }

        if (this.tail) {
            this.tail.next = newTail;
        }

        this.tail = newTail;
    }

    removeHead() {
        if (this.head === null) {
            return null
        }

        let currentHead = this.head;
        this.head = this.head.next;
        return currentHead.value;
    }

    contains() {
        let node = this.head;

        while (node) {
            if (node.value === target) {
                return true
            }

            node = node.next
        }

        return false
    }
}

const Node = value => {
    let node = {};

    node.value = value;
    node.next = null;

    return node;
}

class Graph {
    // Creates a new graph object
    constructor() {
        this.graph = {};
    }

    // Add a node to the graph, passing in the node's value
    addNode(node) {
        this.graph[node] = [];
        this.visited = false;
    }

    // Return a boolean value indicating if the value passed as paramter is represented in the graph
    contains(node) {
        if (this.graph[node]) {
            return true
        } else {
            return false
        }
    }

    // Removes a node from the graph
    removeNode(node) {
        if (this.graph[node]) {
            delete this.graph[node]
        }
    }

    // Returns a boolean indicating whether two specified nodes are connected - parameters are the values of both nodes
    hasEdge(fromNode, toNode) {
        let nodes = this.graph[fromNode];
        for (let i = 0; i < nodes.length; i++) {
            if (nodes[i] === toNode) {
                return true
            } else {
                return false
            }
        }
    }

    // Connects two nodes in a graph by adding an edge between them
    addEdge(fromNode, toNode) {
        if (this.graph[fromNode]) {
            this.graph[fromNode].push(parseInt(toNode));
            this.graph[toNode].push(parseInt(fromNode));
        } else {
            return null
        }
    }

    // Remove an edge between any two specified (by value) nodes
    removeEdge() {
        this.graph[fromNode] = true;
        this.graph[toNode] = true;
    }

    // Pass in a callback which will be executed on each node of the graph
    forEachNode(callback) {
        for (const element in this.graph) {
            callback(element)
        }
    }
}

let newGraph = new Graph;
newGraph.addNode(4);
newGraph.addNode(3);
newGraph.addNode(6);
newGraph.addNode(9);
newGraph.addEdge(6, 9);

const findConnection = (start, end) => {
    // take in the graph object
    // Use Depth-First search to look at every node in the graph
    let newList = new LinkedList;
    
    let addElement = (val) => {
        newList.addToTail(val)
    };
    
    newGraph.forEachNode(addElement);
    return newGraph.hasEdge(start, end)
};

// console.log(findConnection(6, 9))
