const dfs = (graph, root) => {
  const result = [];
  const stack = [root];

  while (stack.length) {
    const node = stack.pop();
    result.push(node);

    graph[node].forEach((value, child) => {
      if (value === 1 && !result.includes(child)) {
        stack.push(child);
      }
    });
  }

  return result;
};

module.exports = dfs;
