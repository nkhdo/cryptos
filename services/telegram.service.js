const { TELEGRAM_BOT_TOKEN, TELEGRAM_CONVERSATION_ID } = process.env;
const Slimbot = require('slimbot');
const { round } = require('../utils/number.utils');

const slimbot = new Slimbot(TELEGRAM_BOT_TOKEN);

const notify = ({ exchangeName, symbol, takeProfitAt, stopLossAt, advisorName, indicatorName }) => {
  const roundedTakeProfitAt = round(takeProfitAt);
  const roundedStopLossAt = round(stopLossAt);

  const message = `Mua *${symbol}* trên *${exchangeName}* đi người ơi!!!
  Take profit at: _${roundedTakeProfitAt}_
  Stop loss at: _${roundedStopLossAt}_
  Signal của _${advisorName}_ dùng _${indicatorName}_ đó <3`;

  slimbot.sendMessage(TELEGRAM_CONVERSATION_ID, message, {
    parse_mode: 'Markdown'
  });
};

module.exports = {
  notify
};
