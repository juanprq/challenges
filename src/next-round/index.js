const nextRound = (k, input) => {
  const targetScore = input[k - 1];
  const toNextRound = input
    .filter(value => value >= targetScore && value > 0);

  return toNextRound.length;
};

module.exports = nextRound;
