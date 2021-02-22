const isBinarySearchTree = (tree) => {
  const fn = (node) => {
    if (!node) return true;
    const {
      left,
      right,
      value,
    } = node;

    const { value: leftValue = -Infinity } = left || {};
    const { value: rightValue = Infinity } = right || {};

    return leftValue <= value && value <= rightValue && fn(left) && fn(right);
  };

  return fn(tree.root);
};

module.exports = isBinarySearchTree;
