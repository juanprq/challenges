const maxProfit = (prices) => {
  let min = Number.MAX_VALUE;
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else {
      profit = Math.max(profit, prices[i] - min);
    }
  }

  return profit;
};

module.exports = maxProfit;
