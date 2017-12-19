const hammerAdvisor = require('../advisors/hammer.advisor');
const { getHeight } = require('../helpers/candle.helper');
const { round } = require('../utils/number.utils');

const check = async ({ open, close, low, high, getLatestClosePrices }) => {
  return hammerAdvisor.check({ open, close, low, high, getLatestClosePrices });
};

module.exports = {
  name: 'generalAdvisor',
  check
};
