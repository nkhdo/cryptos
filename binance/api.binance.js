const axios = require('axios');
const { API: API_CONSTANT } = require('./constant.binance');

const { CANDLE_KEY } = API_CONSTANT;

const parseData = (rawData) => {
  return rawData.map(([, open, high, low, close]) => ({ open, close, high, low }))
};

const getLatestCandles = async ({ symbol, interval }) => {
  const url = `${API_CONSTANT.BASE_URL}${API_CONSTANT.ENDPOINT.CANDLE}`;
  const params = { symbol, interval };
  const { data } = await axios.get(url, { params });

  return parseData(data);
};

const getLatestClosePrices = async ({ symbol, interval }) => {
  const latestCandles = await getLatestCandles({ symbol, interval });

  return latestCandles.map(({ close }) => close);
};

module.exports = {
  getLatestCandles
};
