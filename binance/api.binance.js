const axios = require('axios');
const constant = require('./constant.binance');
const apiConstant = constant.API;

const getRecentCandles = ({ symbol, interval }) => {
  const url = `${apiConstant.BASE_URL}${apiConstant.ENDPOINTS.CANDLE}`;
  const params = { symbol, interval };

  return axios.get(url, { params });
}

module.exports = {
  getRecentCandles
};
