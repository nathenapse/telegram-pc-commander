const executor = require('../executor')
const { isURL } = require('../lib')

module.exports = (bot, msg, db, config) => {
  const YOUTUBE_QUALITY = config.YOUTUBE_QUALITY
  db.get('quality', (err, quality) => {
    if (err) {
      bot.sendMessage(msg.chat.id, 'Something went wrong')
    }

    //validate message is url 
    if (isURL(msg.text)) {
      //get download path
      db.get('download_path', (err, path) => {
        if (err) {
          throw err
        }
        // construct command
        let command = "cd " + path + ";" + "youtube-dl" + " -f " + config.YOUTUBE_QUALITY[quality] + " \"" + msg.text + "\""
        //execute command
        executor(command)
          .then(({ code, stdout, stderr }) => {
            if (!code) {
              bot.sendMessage(msg.chat.id, "File Finished Downloading", {
                  reply_to_message_id: msg.message_id,
                })
                .then(() => {
                  removeStatus(db)
                });
            } else {

              bot.sendLongMessage(msg.chat.id, "Error code: " + code + "\n" + stdout + "\n" + stderr, {
                  reply_to_message_id: msg.message_id,
                })
                .then(() => {
                  removeStatus(db)
                });
            }
          })
          .catch(err => {
            bot.sendLongMessage(msg.chat.id, "Error\n" + err.message, {
                reply_to_message_id: msg.message_id,
              })
              .then(() => {
                removeStatus(db)
              });
          });
      })
    } else {
      bot.sendMessage(msg.chat.id, 'Please send a valid link or /cancel to go back')
    }
  })
}