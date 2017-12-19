const hangmanIndicator = require('../indicators/hangman.indicators');
const hangmanAdvisor = require('../advisors/hangman.advisor');
const { getHeight } = require('../helpers/candle.helper');
const { round } = require('../utils/number.utils');

const check = ({ open, close, low, high }) => {
  if (hangmanIndicator.isPositive({ open, close, low, high })) {
    const { takeProfitAt, stopLossAt } = hangmanAdvisor.getProfitLoss({ low, high });
    return {
      isPositive: true,
      takeProfitAt,
      stopLossAt,
      indicatorName: hangmanIndicator.name
    };
  } else {
    return {
      isPositive: false,
      indicatorName: hangmanIndicator.name
    }
  }
};

module.exports = {
  name: 'general',
  check
};
