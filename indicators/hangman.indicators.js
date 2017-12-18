const {
  isMaxOpenClose,
  getBody,
  getHeight
} = require('../helpers/candle.helper');

const isPositive = ({ open, close, low, high }) => {
  if (!isMaxOpenClose({ open, close, low, high })) return false;

  const body = getBody({ open, close });
  const height = getHeight({ high, low });

  return (height / body) > 3;
};

module.exports = {
  name: 'hangman',
  isPositive
};
