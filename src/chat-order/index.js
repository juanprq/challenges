const chatOrder = (input) => {
  input.reverse();
  const set = new Set(input);

  return [...set];
};

module.exports = chatOrder;
