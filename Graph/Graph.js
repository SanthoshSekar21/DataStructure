class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    // Add a vertex to the graph
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    // Add an edge between two vertices (undirected graph)
    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1]) {
            this.adjacencyList[vertex1].push(vertex2);
        } else {
            this.addVertex(vertex1);
            this.adjacencyList[vertex1].push(vertex2);
        }

        if (this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex2].push(vertex1);
        } else {
            this.addVertex(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
        }
    }

    // Remove an edge between two vertices
    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1]) {
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
                v => v !== vertex2
            );
        }

        if (this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
                v => v !== vertex1
            );
        }
    }

    // Remove a vertex and all associated edges
    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }

    // Depth First Search (DFS)
    depthFirstSearch(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex) {
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    dfs(neighbor);
                }
            });
        })(start);

        return result;
    }

    // Breadth First Search (BFS)
    breadthFirstSearch(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;
        while (queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }

    // Print the adjacency list (for debugging purposes)
    printGraph() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + " -> " + this.adjacencyList[vertex].join(", "));
        }
    }
}

// Example Usage
const g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');

console.log("Graph:");
g.printGraph(); // Prints the graph structure

console.log("DFS from vertex A: ", g.depthFirstSearch('A')); // ['A', 'B', 'D', 'E', 'C']
console.log("BFS from vertex A: ", g.breadthFirstSearch('A')); // ['A', 'B', 'C', 'D', 'E']
