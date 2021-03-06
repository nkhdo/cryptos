const { expect } = require('chai');
const {
  name,
  getExponentialMAs,
  isDownTrend
} = require('../../indicators/ma.indicator');

const closePrices = [
  22.27, 22.19, 22.08, 22.17, 22.18, 22.13, 22.23, 22.43,
  22.24, 22.29, 22.15, 22.39, 22.38, 22.61, 23.36, 24.05,
  23.75, 23.83, 23.95, 23.63, 23.82, 23.87, 23.65, 23.19,
  23.10, 23.33, 22.68, 23.10, 22.40, 22.17
];

const exponentialMAs = [
  22.220999999999997, 22.208090909090906, 22.241165289256195, 22.266407963936885,
  22.32887924322109, 22.516355744453616, 22.79520015455296, 22.96880012645242,
  23.12538192164289, 23.275312481344184, 23.339801121099786, 23.42711000817255,
  23.507635461232088, 23.533519922826255, 23.471061755039663, 23.403595981396087,
  23.390214893869526, 23.261084913165977, 23.2317967471358, 23.08056097492929, 22.915004434033058
];

describe('MA indicator', () => {
  describe('name', () => {
    it('should be movingAverageIndicator', () => {
      expect(name).to.be.equals('movingAverageIndicator');
    });
  });

  describe('getExponentialMAs', () => {
    it('should return correct array', () => {
      expect(getExponentialMAs({
        closePrices,
        period: 10
      })).to.eql(exponentialMAs);
    });
  });

  describe('isDownTrend', () => {
    it('should return true if it is down trend', () => {
      expect(isDownTrend({
        closePrices,
        period: 10
      })).to.be.equals(true);
    });

    it('should return false if it is up trend', () => {
      expect(isDownTrend({
        closePrices: [...closePrices, 29.15],
        period: 10
      })).to.be.equals(false);
    });
  });
});
