const notification = require('../services/notification.service');
const ws = require('./ws.binance');

const handleNewTick = ({ symbol, advisor }) => ({ open, close, low, high, isFinal }) => {
  if (isFinal) {
    const { isPositive, indicatorName } =  advisor.check({ open, close, low, high });

    if (isPositive) {
      notification.notify({
        exchangeName: 'binance',
        symbol,
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
