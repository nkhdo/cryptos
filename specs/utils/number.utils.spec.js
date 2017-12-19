const { expect } = require('chai');
const { round } = require('../../utils/number.utils');

describe('Number util', () => {
  describe('round', () => {
    it('should return 8 decimals number', () => {
      expect(round(0.0003434624234234)).to.be.equals(0.00034346);
      expect(round(0.014)).to.be.equals(0.014);
    });
  });
});
