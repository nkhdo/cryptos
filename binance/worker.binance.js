const notification = require('../services/notification.service');
const ws = require('./ws.binance');
const api = require('./api.binance');

const getLatestClosePrices = ({ symbol, interval }) => () => api.getLatestClosePrices({ symbol, interval });

const handleNewTick = ({ symbol, interval, advisor }) => async ({ open, close, low, high, isFinal }) => {
  if (isFinal) {
    const {
      isPositive,
      takeProfitAt,
      stopLossAt,
      indicatorName,
      reason
    } =  await advisor.check({
      open,
      close,
      low,
      high,
      getLatestClosePrices: getLatestClosePrices({ symbol, interval })
    });

    if (isPositive) {
      notification.notify({
        exchangeName: 'binance',
        symbol,
        takeProfitAt,
        stopLossAt,
        advisorName: advisor.name,
        indicatorName
      })
    }

    if (reason) {
      console.log(`
${new Date()}
${symbol} has been ${reason}
`);
    }
  }
};

const worker = ({ interval, advisor }) => (symbol) => {
  ws.candle({
    symbol,
    interval,
    onNewTick: handleNewTick({ symbol, interval, advisor })
  })
};

const start = ({ symbols, interval, advisor }) => {
  symbols.forEach(worker({ interval, advisor }));
};

module.exports = {
  start
};
