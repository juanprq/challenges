const bfs = (matrix, initialNode) => {
  const result = {};
  const visited = [];
  const queue = [];
  for (let i = 0; i < matrix.length; i++) {
    result[i] = Infinity;
    visited[i] = false;
  }

  // init the node
  result[initialNode] = 0;
  visited[initialNode] = true;
  matrix[initialNode].forEach((value, index) => {
    if (value > 0) {
      queue.push({ node: index, parent: initialNode });
    }
  });

  while(queue.length > 0) {
    const { node, parent } = queue.pop();
    visited[node] = true;
    result[node] = matrix[parent][node] + result[parent];

    matrix[node].forEach((value, index) => {
      if (value > 0 && !visited[index]) {
        queue.push({ node: index, parent: node });
      }
    });
  }

  return result;
};

module.exports = bfs;
