const constant = {
  API: {
    BASE_URL: 'https://api.binance.com',
    ENDPOINT: {
      CANDLE: '/api/v1/klines'
    },
    CANDLE_KEY: {
      OPEN: 1,
      HIGH: 2,
      LOW: 3,
      CLOSE: 4
    }
  },
  WS: {
    BASE_URL: 'wss://stream.binance.com:9443/ws',
    ENDPOINT: {
      CANDLE: '@kline'
    },
  },
  INTERVAL: {
    ONE_MIN: '1m',
    THIRTY_MIN: '30m'
  },
  SYMBOLS: [
    'BTCUSDT',
    'ETHUSDT',
    'BCCUSDT',
    'NEOUSDT',
    'BNBUSDT',
    'LTCUSDT',
    'XVGBTC',
    'ETHBTC',
    'ADABTC',
    'NEOBTC',
    'IOTABTC',
    'TRXBTC',
    'LTCBTC',
    'XRPBTC',
    'BNBBTC',
    'EOSBTC',
    'ICXBTC',
    'QTUMBTC',
    'VENBTC',
    'BCCBTC',
    'POWRBTC',
    'CNDBTC',
    'HSRBTC',
    'XLMBTC',
    'ETCBTC',
    'GTOBTC',
    'OMGBTC',
    'REQBTC',
    'MANABTC',
    'ZECBTC',
  ]
};

module.exports = constant;
