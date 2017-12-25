const notify = ({ exchangeName, symbol, takeProfitAt, stopLossAt, advisorName, indicatorName }) => {
  const roundedTakeProfitAt = round(takeProfitAt);
  const roundedStopLossAt = round(stopLossAt);

  console.log(`
    ${new Date()}
    ${symbol} is having a ${indicatorName} on ${exchangeName} according to ${advisorName}
    Take profit at: ${roundedTakeProfitAt}
    Stop loss at: ${roundedStopLossAt}`);
};

module.exports = {
  notify
};