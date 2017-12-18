const notifier = require('node-notifier');

const notify = ({ exchangeName, symbol, takeProfitAt, stopLossAt, advisorName, indicatorName }) => {
  const roundedTakeProfitAt = Number((parseFloat(`${takeProfitAt}`)).toFixed(8));
  const roundedStopLossAt = Number((parseFloat(`${stopLossAt}`)).toFixed(8));

  notifier.notify({
    title: `Mua ${symbol} trên ${exchangeName} đi người ơi!!!`,
    message: `Take profit at: ${roundedTakeProfitAt},
Stop loss at: ${roundedStopLossAt}
Signal của ${advisorName} dùng ${indicatorName} đó <3`
  });
  console.log(`
${new Date()}
${symbol} is having a ${indicatorName} on ${exchangeName}
Take profit at: ${roundedTakeProfitAt}
Stop loss at: ${roundedStopLossAt}`);
};

module.exports = {
  notify
};
