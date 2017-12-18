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
        open: 9.5,
        close: 10,
        low: 0,
        high: 10
      })).to.eql({
        isPositive: true,
        takeProfitAt: 20,
        stopLossAt: -6.666666666666667,
        indicatorName: 'hangman'
      });
    });
  });
});
