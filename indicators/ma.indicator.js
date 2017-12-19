const { round } = require('../utils/number.utils');

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

const reduceExponentialMAs = ({ period, multiplier }) => (accumulator, currentClose, index) => {
  if (index < period) return accumulator;

  const previousMA = accumulator[accumulator.length - 1];
  const currentMA = (currentClose - previousMA) * multiplier + previousMA;
  return [
    ...accumulator,
    currentMA
  ];
};

const getExponentialMAs = ({ closePrices, period }) => {
  const initialSMA = getInitialSMA({ closePrices, period });
  const multiplier = getMultiplier(period);
  const initResult = [initialSMA];

  return closePrices.reduce(reduceExponentialMAs({ period, multiplier }), initResult)
};

const isDownTrend = ({ closePrices, period }) => {
  const exponentialMAs = getExponentialMAs({ closePrices, period });
  const halfPeriod = round((period / 2), 0);
  const halfPeriodIndex = exponentialMAs.length - 1 - halfPeriod;

  return exponentialMAs[exponentialMAs.length - 1] < exponentialMAs[halfPeriodIndex];
};

module.exports = {
  name: 'movingAverageIndicator',
  getExponentialMAs,
  isDownTrend
};
