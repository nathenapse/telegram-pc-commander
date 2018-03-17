const executor = require('../executor')

module.exports = (bot, msg, db) => {
  db.get('showpwd', (err, value = true) => {
    if (value) {
      db.get('pwd', (err, value) => {
        if (err) {
          bot.sendMessage(msg.chat.id, "PWD can't be found")
          return
        }
        bot.sendMessage(msg.chat.id, value)
      })
    }
  })
}