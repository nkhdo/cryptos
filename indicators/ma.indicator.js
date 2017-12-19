
const getInitialSMA = ({ closePrices, period }) => {
  const firstPeriodClosePrices = closePrices.slice(0, period);
  const firstPeriodClosePricesSum = firstPeriodClosePrices.reduce((accumulator, currentClose) => {
    return accumulator + currentClose;
  }, 0);
  
  return firstPeriodClosePricesSum / period;
};

const getMultiplier = (period) => {
  return 2 / (period + 1);
};

const reduceExponentialMA = ({ period, multiplier }) => (accumulator, currentClose, index) => {
  if (index < period) return accumulator;

  const previousMA = accumulator[accumulator.length - 1];
  const currentMA = (currentClose - previousMA) * multiplier + previousMA;
  return [
    ...accumulator,
    currentMA
  ];
};

const getExponentialMA = ({ closePrices, period }) => {
  const initialSMA = getInitialSMA({ closePrices, period });
  const multiplier = getMultiplier(period);
  const initResult = [initialSMA];

  return closePrices.reduce(reduceExponentialMA({ period, multiplier }), initResult)
};

module.exports = {
  name: 'movingAverageIndicator',
  getExponentialMA
};
