const upload = require('../commands/upload')
const file = require('../commands/file')
const torrent = require('../commands/torrent')
const youtube = require('../commands/youtube')

module.exports = (bot, config, db, msg) => {
  db.get('status', (err, value) => {
    if (err && err.notFound) {
      console.log('no status')
      return
    }
    if (value) {
      if (value === 'upload') {
        upload(bot, msg, db, config)
        return
      }

      if (value === 'file') {
        file(bot, msg, db, config)
        return
      }

      if (value === 'torrent') {
        torrent(bot, msg, db, config)
        return
      }

      if (value === 'youtube') {
        youtube(bot, msg, db, config)
        return
      }

      if (value === 'exec') {
        exec(bot, msg, db, config)
        return
      }

      if (value === 'stop') {
        //TODO: stop a process
      }

    }
  })
}