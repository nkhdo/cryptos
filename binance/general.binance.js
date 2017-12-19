const advisor = require('../advisors/general.advisor');
const worker = require('./worker.binance');
const constant = require('./constant.binance');

worker.start({
  symbols: constant.SYMBOLS,
  interval: constant.INTERVAL.THIRTY_MIN,
  advisor
});
