const axios = require('axios');
const { round } = require('../utils/number.utils');
const { API: API_CONSTANT } = require('./constant.binance');

const { CANDLE_KEY } = API_CONSTANT;

const parseData = (rawData) => {
  return rawData.map(([, open, high, low, close]) => ({
    open: round(open),
    close: round(close),
    high: round(high),
    low: round(low)
  }))
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
  getLatestCandles,
  getLatestClosePrices
};
