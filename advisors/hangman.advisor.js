const hangman = require('../indicators/hangman.indicators');
const { getHeight } = require('../helpers/candle.helper');
const { round } = require('../utils/number.utils');

const getProfitLoss = ({ low, high}) => {
  const height = getHeight({ low, high });
  const rawTakeProfitAt = high + height;
  const rawStopLossAt = (low - height) / 3 * 2;

  return {
    takeProfitAt: round(rawTakeProfitAt),
    stopLossAt: round(rawStopLossAt)
  };
};

const check = ({ open, close, low, high }) => {
  if (hangman.isPositive({ open, close, low, high })) {
    const { takeProfitAt, stopLossAt } = getProfitLoss({ low, high });
    return {
      isPositive: true,
      takeProfitAt,
      stopLossAt,
      indicatorName: hangman.name
    };
  } else {
    return {
      isPositive: false,
      indicatorName: hangman.name
    }
  }
};

module.exports = {
  name: 'hangman',
  getProfitLoss,
  check
};
