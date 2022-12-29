import React from 'react';
export class Graph {
    constructor() {
      this.vertices = [];
      this.adjacent = {};
      this.edges = 0;
    }
  
    addVertex(v) {
      this.vertices.push(v);
      this.adjacent[v] = [];
    }
  
    addEdge(v, w) {
      this.adjacent[v].push(w);
      this.adjacent[w].push(v);
      this.edges++;
    }
  
    bfs(goal, root = this.vertices[0]) {
      const adj = this.adjacent;
      const queue = [];
      const discovered = {};
      const edges = {};
      const predecessors = {};
  
      const buildPath = (goal, root, predecessors) => {
        const stack = [];
        let u = goal;
  
        while (u !== root) {
          stack.push(u);
          u = predecessors[u];
        }
  
        stack.push(root);
        return stack.reverse().join("-");
      };
  
      queue.push(root);
      discovered[root] = true;
      edges[root] = 0;
      predecessors[root] = null;
  
      while (queue.length) {
        const v = queue.shift();
  
        if (v === goal) {
          return {
            distance: edges[goal],
            path: buildPath(goal, root, predecessors),
          };
        }
  
        for (const neighbor of adj[v]) {
          if (!discovered[neighbor]) {
            discovered[neighbor] = true;
            queue.push(neighbor);
            edges[neighbor] = edges[v] + 1;
            predecessors[neighbor] = v;
          }
        }
      }
  
      return false;
    }
  }
  




