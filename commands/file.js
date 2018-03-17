const executor = require('../executor')
const { isURL, removeStatus } = require('../lib')
const pwd = require('./pwd')

module.exports = (bot, msg, db) => {
  db.get('downloader', (err, downloader) => {
    console.log(downloader)
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
        let command = "cd " + path + ";" + downloader + " " + msg.text
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
          });
      })
    } else {
      bot.sendMessage(msg.chat.id, 'Please send a valid link or /cancel to go back')
    }
  })

}