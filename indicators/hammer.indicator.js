const {
  isMaxOpenClose,
  isMinOpenClose,
  getBody,
  getHeight
} = require('../helpers/candle.helper');

const isHangingMan = ({ open, close, low, high }) => {
  if (!isMaxOpenClose({ open, close, low, high })) return false;

  const body = getBody({ open, close });
  const height = getHeight({ high, low });

  return (height / body) > 3;
};

const isShootingStar = ({ open, close, low, high }) => {
  if (!isMinOpenClose({ open, close, low, high })) return false;

  const body = getBody({ open, close });
  const height = getHeight({ high, low });

  return (height / body) > 3;
};

const isPositive = (args) => {
  return isShootingStar(args) || isHangingMan(args);
};

module.exports = {
  name: 'hammerIndicator',
  isHangingMan,
  isShootingStar,
  isPositive
};
