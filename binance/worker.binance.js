const notification = require('../services/notification.service');
const ws = require('./ws.binance');

const handleNewTick = ({ symbol, advisor }) => async ({ open, close, low, high, isFinal }) => {
  if (isFinal) {
    const {
      isPositive,
      takeProfitAt,
      stopLossAt,
      indicatorName
    } =  await advisor.check({ open, close, low, high });

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
  }
};

const worker = ({ interval, advisor }) => (symbol) => {
  ws.candle({
    symbol,
    interval,
    onNewTick: handleNewTick({ symbol, advisor })
  })
};

const start = ({ symbols, interval, advisor }) => {
  symbols.forEach(worker({ interval, advisor }));
};

module.exports = {
  start
};
