const isGreen = ({ open, close }) => {
  return close > open;
};

const getHeight = ({ high, low }) => {
  return high - low;
};

const getHead = ({ open, close, high }) => {
  if (isGreen({ open, close })) {
    return high - close;
  } else {
    return high - open;
  };
};

const getBody = ({ open, close }) => {
  return Math.abs(open - close);
};

const getFoot = ({ open, close, low }) => {
  if (isGreen({ open, close })) {
    return open - low;
  } else {
    return close - low;
  }
};

const isMaxOpenClose = ({ open, close, high, low }) => {
  if (open === high || close === high) return true;

  const height = getHeight({ high, low });
  const head = getHead({ open, close, high });

  return (height / head) > 10;
};

module.exports = {
  isGreen,
  getHeight,
  getHead,
  getBody,
  getFoot,
  isMaxOpenClose
};
