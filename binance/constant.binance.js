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
    'LTCUSDT',
    'ETHBTC',
    'ADABTC',
    'NEOBTC',
    'TRXBTC',
    'EOSBTC',
    'ICXBTC',
    'CNDBTC',
    'HSRBTC',
    'GTOBTC',
    'REQBTC',
    'MANABTC',
    'ZECBTC',
  ]
};

module.exports = constant;
