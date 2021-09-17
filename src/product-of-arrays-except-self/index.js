const productExceptSelf = (input) => {
  let headProduct = 1;
  const heads = [headProduct];

  // for of heads
  for (let i = 0; i < input.length - 1; i++) {
    headProduct *= input[i];
    heads.push(headProduct);
  }

  // for tails
  let tailProduct = 1;
  const tails = [tailProduct]

  for (let i = input.length - 1; i > 0; i--) {
    tailProduct *= input[i];
    tails.push(tailProduct);
  }

  return heads.map((head, i) => {
    let product = head * tails[tails.length - i - 1]
    if (product === -0) product = 0;

    return product;
  });
};

module.exports = productExceptSelf;
