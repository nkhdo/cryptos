const { expect } = require('chai');
const {
  name,
  isHangingMan,
  isShootingStar,
  isPositive
} = require('../../indicators/hammer.indicator');

describe('Hammer indicator', () => {
  describe('name', () => {
    it('should be hammer', () => {
      expect(name).to.be.equals('hammerIndicator');
    });
  });

  describe('isHangingMan', () => {
    it('should return false if it is not maxOpenClose', () => {
      expect(isHangingMan({
        open: 4,
        close: 8,
        low: 0,
        high: 10
      })).to.be.equals(false);
    });

    it('should return false if it is not hangingMan candle', () => {
      expect(isHangingMan({
        open: 4,
        close: 10,
        low: 0,
        high: 10
      })).to.be.equals(false);
    });

    it('should return true if it is hangingMan candle', () => {
      expect(isHangingMan({
        open: 9.5,
        close: 10,
        low: 0,
        high: 10
      })).to.be.equals(true);
    });
  });

  describe('isShootingStar', () => {
    it('should return false if it is not minOpenClose', () => {
      expect(isShootingStar({
        open: 2,
        close: 8,
        low: 0,
        high: 10
      })).to.be.equals(false);
    });

    it('should return false if it is not isShootingStar candle', () => {
      expect(isShootingStar({
        open: 0,
        close: 10,
        low: 0,
        high: 10
      })).to.be.equals(false);
    });

    it('should return true if it is isShootingStar candle', () => {
      expect(isShootingStar({
        open: 0.5,
        close: 2,
        low: 0,
        high: 10
      })).to.be.equals(true);
    });
  });

  describe('isPositive', () => {
    it('should return false if it is not hammer candle', () => {
      expect(isPositive({
        open: 4,
        close: 10,
        low: 0,
        high: 10
      })).to.be.equals(false);
    });

    it('should return true if it is hammer candle', () => {
      expect(isPositive({
        open: 9.5,
        close: 10,
        low: 0,
        high: 10
      })).to.be.equals(true);
    });
  });
});
