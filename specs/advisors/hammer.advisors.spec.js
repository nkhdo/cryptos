const { expect } = require('chai');
const {
  name,
  check
} = require('../../advisors/hammer.advisor');


const notDownTrendClosePrices = [
  22.27, 22.19, 22.08, 22.17, 22.18, 22.13, 22.23, 22.43,
  22.24, 22.29, 22.15, 22.39, 22.38, 22.61, 23.36, 24.05,
  23.75, 23.83, 23.95, 23.63, 23.82, 23.87, 23.65, 23.19,
  23.10, 23.33, 70.68, 80.10, 90.40, 100.17
]
const downTrendClosePrices = [
  22.27, 22.19, 22.08, 22.17, 22.18, 22.13, 22.23, 22.43,
  22.24, 22.29, 22.15, 22.39, 22.38, 22.61, 23.36, 24.05,
  23.75, 23.83, 23.95, 23.63, 23.82, 23.87, 23.65, 23.19,
  23.10, 23.33, 22.68, 23.10, 22.40, 22.17
];
const getLatestClosePrices = (data) => async () => data;

describe('Hammer advisor', () => {
  describe('name', () => {
    it('should be hammer', () => {
      expect(name).to.be.equals('hammerAdvisor');
    });
  });

  describe('check', () => {
    it('should return correctly if it is not hammer candle', async () => {
      const result = await check({
        open: 4,
        close: 10,
        low: 0,
        high: 10
      });

      expect(result).to.eql({
        isPositive: false,
        indicatorName: 'hammerIndicator',
        reason: undefined
      });
    });

    it('should return correctly if it is hammer candle and has a downtrend', async () => {
      const result = await check({
        open: 0.00029741,
        close: 0.00029630,
        low: 0.00029248,
        high: 0.00029773,
        getLatestClosePrices: getLatestClosePrices(downTrendClosePrices)
      });

      expect(result).to.eql({
        isPositive: true,
        takeProfitAt: 0.00030298,
        stopLossAt: 0.00028898000000000004,
        indicatorName: 'hammerIndicator'
      });
    });

    it('should return correctly if it is hammer candle and does not have a downtrend', async () => {
      const result = await check({
        open: 0.00029741,
        close: 0.00029630,
        low: 0.00029248,
        high: 0.00029773,
        getLatestClosePrices: getLatestClosePrices(notDownTrendClosePrices)
      });

      expect(result).to.eql({
        isPositive: false,
        indicatorName: 'hammerIndicator',
        reason: 'rejected by MA'
      });
    });
  });
});
