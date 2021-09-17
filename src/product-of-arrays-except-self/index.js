const productExceptSelf = (input) => {
  const result = [];
  for (let i = 0; i < input.length; i++) {
    let product = 1;
    for (let j = 0; j < input.length; j++) {
      if (j !== i) {
        product *= input[j];
      }
    }

    if (product === -0) product = 0;
    result.push(product);
  }

  return result;
};

module.exports = productExceptSelf;
