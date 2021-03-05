class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].filter((vertex) => vertex != vertex2);
    this.adjacencyList[vertex2].filter((vertex) => vertex != vertex1);
  }
}

const g = new Graph();

g.addVertex("Tokyo");
g.addVertex("China");
g.addVertex("Dallas");
g.addVertex("Aspen");
console.log(g);
