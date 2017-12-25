const { TELEGRAM_NOTIFY, WN_NOTIFY } = process.env;
const notification = require('../services/notification.service');
const telegram = require('../services/telegram.service');
const consoles = require('../services/console.service');
const ws = require('./ws.binance');
const api = require('./api.binance');

const getLatestClosePrices = ({ symbol, interval }) => () => api.getLatestClosePrices({ symbol, interval });
const notifyTelegram = TELEGRAM_NOTIFY === 'true';
const notifyWN = WN_NOTIFY === 'true';

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
      const payload = {
        exchangeName: 'binance',
        symbol,
        takeProfitAt,
        stopLossAt,
        advisorName: advisor.name,
        indicatorName
      };
      consoles.notify(payload);
      if (notifyWN) {
        notification.notify(payload);
      }
      if (notifyTelegram) {
        telegram.notify(payload);
      }
    }

    if (reason) {
      console.log(`
  ${new Date()}
  ${symbol} has been ${reason}`);
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
