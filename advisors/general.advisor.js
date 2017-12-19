const hammerIndicator = require('../indicators/hammer.indicator');
const hammerAdvisor = require('../advisors/hammer.advisor');
const { getHeight } = require('../helpers/candle.helper');
const { round } = require('../utils/number.utils');

const check = ({ open, close, low, high }) => {
  if (hammerIndicator.isPositive({ open, close, low, high })) {
    const { takeProfitAt, stopLossAt } = hammerAdvisor.getProfitLoss({ low, high });
    return {
      isPositive: true,
      takeProfitAt,
      stopLossAt,
      indicatorName: hammerIndicator.name
    };
  } else {
    return {
      isPositive: false,
      indicatorName: hammerIndicator.name
    }
  }
};

module.exports = {
  name: 'generalAdvisor',
  check
};
