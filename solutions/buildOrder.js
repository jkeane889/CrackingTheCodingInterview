// Trees & Graphs

// Build Order

/*
    You are given a list of projects and a list of dependencies (which is a list of pairs of projects, 
    where the second project is dependent on the first project). 

    All of a project's dependencies must be built before the project is. 
    Find a build order that will allow the projects to be built. 

    If there is no valid build order, return an error. 

    EXAMPLE 

    Input: 

        projects: a, b, c, d, e, f 
        dependencies: (a, d), (f, b), (b, d), (f, a), (d, c) 

    Output: f, e, a, b, d, c 

*/

/*
    d is dependent on a,
    b is dependent on f,
    d is dependent on b,
    a is dependent on f,
    c is dependent on d

    Create a graph to represent the relationships between projects and dependencies

    For input list, create an object with key values set to each value in list as []

        a: [],
        b: [],
        c: [],
        d: [],
        e: [],
        f: []

    Iterate over dependencies list and check if dependency[1] exists in object, and then if it does, add to its array dependency[0]

        a: [f],
        b: [f],
        c: [d],
        d: [a, b]
        e: [],
        f: []

    Create build list output as empty array
    
    Get all empty arrays (object.values)
        if array is empty
            build it and push it into built list array
            find if project has any outgoing edges
            store next project into queue
        while queue isn't empty
            build next projects in stack and push into built array
            find if project has any outgoing edges
            store next project into queue
            
*/

let Graph = () => {
    this.nodes = {};
}

// Add node to the graph, passing in node's value
Graph.prototype.addNote = (node) => {
    let newNode = {};
    newNode.value = node;
    newNode.edges = {};
    this.nodes[newNode.value] = newNode;
}

// Return boolean indicating if value passed in is contained in the graph
Graph.prototype.contains = (node) => {
    if (this.nodes[node]) {
        return true
    }

    return false
};

// Removes a node from the graph
Graph.prototype.removeNode = (node) => {
    if (this.nodes[node]) {
        for (let key in this.nodes[node].edges) {
            this.removeEdge(key, node);
        };

        delete this.nodes[node]
    };
};

// Returns a boolean indicating whether two specified nodes are connected. Pass in values contained
//  in each of the two nodes.
Graph.prototype.hasEdge = (fromNode, toNode) => {
    if (this.nodes[fromNode].edges[toNode] && this.nodes[toNode].edges[fromNode]) {
        return true
    }

    return false
};

// Connects two nodes by adding an edge between them
Graph.prototype.addEdge = (fromNode, toNode) => {
    if (this.nodes[fromNode] && this.nodes[toNode]) {
        let node1Edges = this.nodes[fromNode].edges;
        let node2Edges = this.nodes[toNode].edges;

        node1Edges[toNode] = toNode;
        node2Edges[fromNode] = fromNode;
    }
}

// Remove an edge between two any specified (by value) nodes
Graph.prototype.removeEdge = (fromNode, toNode) => {
    delete this.nodes[fromNode].edges[toNode];
    delete this.nodes[toNode].edges[fromNode];
};

// Pass in a callback which will be executed on each node of the graph
Graph.prototype.forEachNode = (callback) => {
    for (let key in this.nodes) {
        callback.call(this, key)
    }
};








