const updateInventory = (currentInventory, newInventory) => {
  const result = currentInventory
    .concat(newInventory)
    .reduce((accum, [value, key]) =>
      ({ ...accum, [key]: (accum[key] || 0) + value }),
    {});

  return Object
    .keys(result)
    .sort()
    .map(key => [result[key], key]);
};

module.exports = updateInventory;
