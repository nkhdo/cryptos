const advisor = require('../advisors/general.advisors');
const worker = require('./worker.binance');
const constant = require('./constant.binance');

worker.start({
  symbols: constant.SYMBOLS,
  interval: constant.INTERVAL.ONE_MIN,
  advisor
});
