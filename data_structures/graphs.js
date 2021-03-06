function destinations(airlines, routes) {
  const graph = new Graph();
  airports.forEach((airport) => graph.addNode(airport));
  routes.forEach((route) => graph.addEdge(...route));
  console.log(graph.dfs("PHX"));
}

class Graph {
  constructor() {
    this.adjacenyList = new Map();
  }
  // Vertex is our node: airport
  addNode(airport) {
    this.adjacenyList.set(airport, []);
  }
  // Add Edge, undirected
  // Direct flights between two airports
  addEdge(destination, origin) {
    // We represent the relationship with the edge with an array with the node that has a node within it
    this.adjacenyList.get(destination).push(origin);
    this.adjacenyList.get(origin).push(destination);
  }
  // FIRST IN FIRST OUT  O(v + e)
  bfs(start) {
    const visited = new Set();
    const queue = [start];
    while (queue.length > 0) {
      const airport = queue.shift(); // mutates the queue
      const destinations = this.adjacenyList.get(airport); // return an array

      for (const destination of destinations) {
        if (destination === "BKK") {
          console.log(destination, "found it!");
        }

        if (!visited.has(destination)) {
          visited.add(destination);
          queue.push(destination);
          console.log(destination);
        }
      }
    }
  }
  // O(v + e) LAST IN FIRST OUT
  dfs(start, visited = new Set()) {
    console.log(start);

    visited.add(start);

    const destinations = this.adjacenyList.get(start);

    for (const destination of destinations) {
      // Base case
      if (destination === "BKK") {
        console.log("DFS found Bangkok in steps");
        return;
      }
      if (!visited.has(destination)) {
        this.dfs(destination, visited);
      }
    }
  }
}

const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");

const routes = [
  ["PHX", "LAX"],
  ["PHX", "JFK"],
  ["JFK", "OKC"],
  ["JFK", "HEL"],
  ["JFK", "LOS"],
  ["MEX", "LAX"],
  ["MEX", "BKK"],
  ["MEX", "LIM"],
  ["MEX", "EZE"],
  ["LIM", "BKK"],
];

console.log(destinations(airports, routes));
