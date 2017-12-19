const WebSocket = require('ws');
const { WS: constant } = require('./constant.binance');
const { round } = require('../utils/number.utils');

const generateUrl = ({ symbol, interval, type }) => (
  `${constant.BASE_URL}/${symbol.toLowerCase()}${type}_${interval}`
);

const parse = (data) => {
  try {
    const parseData = JSON.parse(data);
    const { k: { o, c, l, h, x } } = parseData;

    return {
      open: round(o),
      close: round(c),
      low: round(l),
      high: round(h),
      isFinal: x
    };
  } catch(error) {
    console.log('failed to parse ws new tick', error);
    return {};
  }
};

const handleNewTick = (onNewTick) => (data) => {
  const parsedData = parse(data);
  onNewTick(parsedData);
};

const candle = ({ symbol, interval, onNewTick }) => {
  const url = generateUrl({
    symbol,
    interval,
    type: constant.ENDPOINT.CANDLE
  });
  const ws = new WebSocket(url, { perMessageDeflate: false });

  ws.on('message', handleNewTick(onNewTick));
};

module.exports = {
  generateUrl,
  candle
};
