const isValidNumber = (number) => {
  return /^(\+|-)?\d*\.?\d*$/.test(number);
};

module.exports = isValidNumber;
