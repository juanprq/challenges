const registrationSystem = (input) => {
  const memo = {};

  return input.map(value => {
    const current = memo[value];

    if (current) {
      memo[value] = current + 1;
      return `${value}${current}`;
    } else {
      memo[value] = 1;
      return 'OK';
    }
  });
};

module.exports = registrationSystem;
