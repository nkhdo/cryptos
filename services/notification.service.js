const notifier = require('node-notifier');
const { round } = require('../utils/number.utils');

const notify = ({ exchangeName, symbol, takeProfitAt, stopLossAt, advisorName, indicatorName }) => {
  const roundedTakeProfitAt = round(takeProfitAt);
  const roundedStopLossAt = round(stopLossAt);

  notifier.notify({
    title: `Mua ${symbol} trên ${exchangeName} đi người ơi!!!`,
    message: `Take profit at: ${roundedTakeProfitAt},
Stop loss at: ${roundedStopLossAt}
Signal của ${advisorName} dùng ${indicatorName} đó <3`
  });
  console.log(`
${new Date()}
${symbol} is having a ${indicatorName} on ${exchangeName} according to ${advisorName}
Take profit at: ${roundedTakeProfitAt}
Stop loss at: ${roundedStopLossAt}`);
};

module.exports = {
  notify
};
