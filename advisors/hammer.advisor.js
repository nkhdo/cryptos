const hammer = require('../indicators/hammer.indicator');
const ma = require('../indicators/ma.indicator');
const { getHeight } = require('../helpers/candle.helper');

const getProfitLoss = ({ low, high}) => {
  const height = getHeight({ low, high });
  const takeProfitAt = high + height;
  const stopLossAt = low - (height / 3 * 2);

  return {
    takeProfitAt,
    stopLossAt
  };
};

const getNegativeResult = (reason) => ({
  isPositive: false,
  indicatorName: hammer.name,
  reason
});

const getPositiveResult = ({ takeProfitAt, stopLossAt }) => ({
  isPositive: true,
  takeProfitAt,
  stopLossAt,
  indicatorName: hammer.name
});

const check = async ({ open, close, low, high, getLatestClosePrices }) => {
  if (hammer.isPositive({ open, close, low, high })) {
    const latestClosePrices = await getLatestClosePrices();
    if (!ma.isDownTrend({ closePrices: latestClosePrices, period: 7 })) {
      return getNegativeResult('rejected by MA');
    }

    const { takeProfitAt, stopLossAt } = getProfitLoss({ low, high });
    return getPositiveResult({ takeProfitAt, stopLossAt });
  } else {
    return getNegativeResult();
  }
};

module.exports = {
  name: 'hammerAdvisor',
  getProfitLoss,
  check
};
