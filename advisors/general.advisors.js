const hangman = require('../indicators/hangman.indicators');

const check = ({ open, close, low, high }) => {
  if (hangman.isPositive({ open, close, low, high })) {
    return {
      isPositive: true,
      indicatorName: hangman.name
    };
  } else {
    return {
      isPositive: false,
      indicatorName: hangman.name
    }
  }
};

module.exports = {
  name: 'general',
  check
};
