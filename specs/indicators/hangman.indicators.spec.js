const { expect } = require('chai');
const {
  name,
  isPositive
} = require('../../indicators/hangman.indicators');

describe('Hangman indicator', () => {
  describe('name', () => {
    it('should be hangman', () => {
      expect(name).to.be.equals('hangman');
    });
  });

  describe('isPositive', () => {
    it('should return false if it is not maxOpenClose', () => {
      expect(isPositive({
        open: 4,
        close: 8,
        low: 0,
        high: 10
      })).to.be.equals(false);
    });

    it('should return false if it is not hangman candle', () => {
      expect(isPositive({
        open: 4,
        close: 10,
        low: 0,
        high: 10
      })).to.be.equals(false);
    });

    it('should return true if it is hangman candle', () => {
      expect(isPositive({
        open: 9.5,
        close: 10,
        low: 0,
        high: 10
      })).to.be.equals(true);
    });
  });
});
