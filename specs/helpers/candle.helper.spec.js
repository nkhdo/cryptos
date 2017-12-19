const { expect } = require('chai');
const {
  isGreen,
  getHeight,
  getHead,
  getBody,
  getFoot,
  isMaxOpenClose,
  isMinOpenClose
} = require('../../helpers/candle.helper');

describe('Candle helper', () => {
  describe('isGreen', () => {
    it('should return true if it is green', () => {
      expect(isGreen({
        open: 4,
        close: 8,
      })).to.be.equals(true);
    });

    it('should return false if it is not green', () => {
      expect(isGreen({
        open: 8,
        close: 4
      })).to.be.equals(false);
    });
  });

  describe('getHeight', () => {
    it('should return correct', () => {
      expect(getHeight({
        high: 10,
        low: 0
      })).to.be.equals(10);
    });
  });

  describe('getHead', () => {
    it('should return correct if it is green', () => {
      expect(getHead({
        open: 4,
        close: 8,
        high: 10
      })).to.be.equals(2);
    });

    it('should return correct if it is not green', () => {
      expect(getHead({
        open: 8,
        close: 4,
        high: 10
      })).to.be.equals(2);
    });
  });

  describe('getBody', () => {
    it('should return correct if it is green', () => {
      expect(getBody({
        open: 4,
        close: 10,
      })).to.be.equals(6);
    });

    it('should return correct if it is not green', () => {
      expect(getBody({
        open: 10,
        close: 4,
      })).to.be.equals(6);
    });
  });

  describe('getFoot', () => {
    it('should return correct if it is green', () => {
      expect(getFoot({
        open: 4,
        close: 10,
        low: 0
      })).to.be.equals(4);
    });

    it('should return correct if it is not green', () => {
      expect(getFoot({
        open: 10,
        close: 4,
        low: 0
      })).to.be.equals(4);
    });
  });

  describe('isMaxOpenClose', () => {
    it('should return true if high equal open', () => {
      expect(isMaxOpenClose({ open: 10, high: 10 })).to.be.equals(true);
    });

    it('should return true if high equal close', () => {
      expect(isMaxOpenClose({ close: 10, high: 10 })).to.be.equals(true);
    })

    it('should return false if height divided by head is less than 10', () => {
      expect(isMaxOpenClose({
        open: 4,
        close: 8,
        high: 10,
        low: 0
      })).to.be.equals(false);
    })

    it('should return true if height divided by head is more than 10', () => {
      expect(isMaxOpenClose({
        open: 4,
        close: 9.5,
        high: 10,
        low: 0
      })).to.be.equals(true);
    })
  });

  describe('isMinOpenClose', () => {
    it('should return true if low equal open', () => {
      expect(isMinOpenClose({ open: 0, low: 0 })).to.be.equals(true);
    });

    it('should return true if low equal close', () => {
      expect(isMinOpenClose({ close: 0, low: 0 })).to.be.equals(true);
    })

    it('should return false if height divided by fot is less than 10', () => {
      expect(isMinOpenClose({
        open: 2,
        close: 8,
        high: 10,
        low: 0
      })).to.be.equals(false);
    })

    it('should return true if height divided by fot is more than 10', () => {
      expect(isMinOpenClose({
        open: 0.5,
        close: 1,
        high: 10,
        low: 0
      })).to.be.equals(true);
    })
  });
});
