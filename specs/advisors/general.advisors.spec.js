const { expect } = require('chai');
const {
  name,
  check
} = require('../../advisors/general.advisors');

describe('General advisor', () => {
  describe('name', () => {
    it('should be general', () => {
      expect(name).to.be.equals('general');
    });
  });

  describe('check', () => {
    it('should return correctly if it is not hangman candle', () => {
      expect(check({
        open: 4,
        close: 10,
        low: 0,
        high: 10
      })).to.eql({
        isPositive: false,
        indicatorName: 'hangman'
      });
    });

    it('should return correctly if it is not hangman candle', () => {
      expect(check({
        open: 0.00029741,
        close: 0.00029630,
        low: 0.00029248,
        high: 0.00029773
      })).to.eql({
        isPositive: true,
        takeProfitAt: 0.00030298,
        stopLossAt: 0.00028898000000000004,
        indicatorName: 'hangman'
      });
    });
  });
});
