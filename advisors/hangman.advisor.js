const hangman = require('../indicators/hangman.indicators');
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
