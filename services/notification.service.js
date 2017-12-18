const notifier = require('node-notifier');

const notify = ({ exchangeName, symbol, advisorName, indicatorName }) => {
  notifier.notify({
    title: `Mua ${symbol} trên ${exchangeName} đi người ơi!!!`,
    message: `Signal của ${advisorName} dùng ${indicatorName} đó <3`
  });
  console.log(`${new Date()}: ${symbol} is having a ${indicatorName} on ${exchangeName}`);
};

module.exports = {
  notify
};
