const hammer = require('../indicators/hammer.indicator');
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

const check = ({ open, close, low, high }) => {
  if (hammer.isPositive({ open, close, low, high })) {
    const { takeProfitAt, stopLossAt } = getProfitLoss({ low, high });
    return {
      isPositive: true,
      takeProfitAt,
      stopLossAt,
      indicatorName: hammer.name
    };
  } else {
    return {
      isPositive: false,
      indicatorName: hammer.name
    }
  }
};

module.exports = {
  name: 'hammerAdvisor',
  getProfitLoss,
  check
};
