const executor = require('../executor')
const pwd = require('./pwd')
const { chunkString, asyncForEach } = require('../lib')

module.exports = (bot, msg, db) => {

  executor(msg.text)
    .then(({ code, stdout, stderr }) => {
      if (!code) {
        bot.sendLongMessage(msg.chat.id,
          "Done: \n ----------------------- \n " + stdout + "\n" + stderr, {
            reply_to_message_id: msg.message_id
          }
        )
      } else {
        bot.sendLongMessage(msg.chat.id, "Error code: " + code + "\n" + stdout + "\n" + stderr, {
          reply_to_message_id: msg.message_id
        })
      }
    })
    .catch(err => {
      bot.sendLongMessage(msg.chat.id, "Error: \n" + err.message, {
        reply_to_message_id: msg.message_id
      })
    });
}