const executor = require('../executor')

module.exports = (bot, msg, db) => {
  db.get('torrent_downloader', (err, value) => {
    if (err) {
      bot.sendMessage(msg.chat.id, 'Something went wrong')
    }
    //validate message is url 
    if (isURL(msg.text)) {
      // TODO: GET torrend downloader parameters
      let command = value + " " + msg.text
      executor(command)
        .then(({ code, stdout, stderr }) => {
          if (!code) {
            bot.sendMessage(msg.chat.id, stdout + "\n" + stderr, {
              reply_to_message_id: msg.message_id,
            });
          } else {
            bot.sendMessage(msg.chat.id, "Error code: " + code + "\n" + stdout + "\n" + stderr, {
              reply_to_message_id: msg.message_id,
            });
          }
        });
    } else {
      bot.sendMessage(msg.chat.id, 'Please send a valid link or /cancel to go back')
    }
  })
}