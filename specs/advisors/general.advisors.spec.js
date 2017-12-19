const { expect } = require('chai');
const {
  name,
  check
} = require('../../advisors/general.advisor');

describe('General advisor', () => {
  describe('name', () => {
    it('should be general', () => {
      expect(name).to.be.equals('generalAdvisor');
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
        indicatorName: 'hammerIndicator'
      });
    });

    it('should return correctly if it is not hammer candle', async () => {
      const result = await check({
        open: 0.00029741,
        close: 0.00029630,
        low: 0.00029248,
        high: 0.00029773
      });

      expect(result).to.eql({
        isPositive: true,
        takeProfitAt: 0.00030298,
        stopLossAt: 0.00028898000000000004,
        indicatorName: 'hammerIndicator'
      });
    });
  });
});
