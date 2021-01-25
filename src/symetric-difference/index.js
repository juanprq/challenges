const sym = (...args) => {
  if (args.length === 1) return args[0];
  const [first, second, ...rest] = args;

  const count = [...new Set(first), ...new Set(second)]
    .reduce((accum, value) => ({
      ...accum,
      [value]: accum[value] ? accum[value] + 1 : 1,
    }), {});

  const result = Object
    .entries(count)
    .filter(([, value]) => value === 1)
    .map(([key]) => parseInt(key, 10))

  return sym(result, ...rest);
};

module.exports = sym;
