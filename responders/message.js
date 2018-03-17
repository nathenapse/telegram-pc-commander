const reply = require('./reply')
const commands = require('./commands')

module.exports = (bot, config, db) => (msg) => {
  if (msg.chat.id === parseInt(config.ADMIN)) {

    if (msg.text) {

      /*
      	Cancel command
       */
      if (msg.text === '/cancel') {
        bot.sendMessage(msg.chat.id, 'Start over the command')
        db.del('status', (err) => {
          if (err) throw err
        })
        return
      }

      db.get('status', (err, value) => {
        if (value) {
          reply(bot, config, db, msg)
        } else {
          commands(bot, config, db, msg)
        }
      })

      console.log("text")
    }
  } else {
    console.log("message user does not match admin")
  }
}