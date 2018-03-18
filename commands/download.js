module.exports = (bot, config, db, msg, type) => {
  const getFile = {
    audio: (audio) => {
      return [audio.file_id, audio.title]
    },
    video: (video) => {
      return [video.file_id, video.title]
    },
    photo: (photo) => {
      return [photo[photo.length - 1].file_id]
    },
    document: (doc) => {
      return [doc.file_id, doc.file_name]
    }
  }


  db.get('download_path', (err, path) => {
    if (err) {
      throw err
    }
    bot.downloadFile(getFile[type](msg[type])[0], path)
      .then((filepath) => {
        bot.sendMessage(msg.chat.id, "File saved successfully at: " + filepath, {
          reply_to_message_id: msg.message_id
        })
      })
      .catch((error) => {
        bot.sendLongMessage(msg.chat.id, error.message, {
          reply_to_message_id: msg.message_id
        })
      })
  })


}