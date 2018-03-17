const executor = require('../executor')
const fs = require("fs");

module.exports = (bot, msg, db) => {

  if (!fs.existsSync(msg.text)) {
    bot.sendMessage(msg.chat.id, "File Not Found", {
      reply_to_message_id: msg.message_id
    })
    db.del('status', (err) => {
      if (err)
        throw err
    })
  } else {
    bot.sendDocument(msg.chat.id, msg.text, {
        reply_to_message_id: msg.message_id,
      })
      .then(() => {
        db.del('status', (err) => {
          if (err)
            throw err
        })
      })
      .catch((err) => {
        bot.sendLongMessage(msg.chat.id, "Error: " + err.message, {
          reply_to_message_id: msg.message_id
        })
      });
  }
}