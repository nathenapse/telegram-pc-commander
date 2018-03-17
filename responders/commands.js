const exec = require('../commands/exec')

module.exports = (bot, config, db, msg) => {

  /*
  	Download a file
   */
  if (msg.text === '/file') {
    bot.sendMessage(msg.chat.id, 'Send Me the link')
    db.put('status', 'file', (err) => {
      if (err) throw err
    })
    return
  }

  /*
  	Download a torrent
   */
  if (msg.text === '/torrent') {
    bot.sendMessage(msg.chat.id, 'Not implemented yet! Will be done soon!')
    return
  }

  /*
  	Upload a file
   */
  if (msg.text === '/upload') {
    bot.sendMessage(msg.chat.id, 'File path')
    db.put('status', 'upload', (err) => {
      if (err) throw err
    })
    return
  }

  /*
  	Download Youtube video
   */
  if (msg.text === '/youtube') {
    // TODO: do download youtube
    bot.sendMessage(msg.chat.id, 'Send Me the link')
    db.put('status', 'youtube', (err) => {
      if (err) throw err
    })
    return
  }

  /*
  	set show pwd
   */
  if (msg.text === '/showpwd') {
    // TODO: do download youtube
    bot.sendMessage(msg.chat.id, 'This feature is still in progress! please be be patient!!')
    // bot.sendMessage(msg.chat.id, 'Show current path after each command', {
    //   reply_markup: {
    //     inline_keyboard: [
    //       [{
    //           text: 'Show PWD',
    //           callback_data: 'PWDTRUE'
    //         },
    //         {
    //           text: 'Don\'t Show PWD',
    //           callback_data: 'PWDFALSE'
    //         }
    //       ]
    //     ]
    //   }
    // })
    return
  }

  /*
  	set show pwd
   */
  if (msg.text === '/setdownloader') {
    // TODO: do download youtube
    bot.sendMessage(msg.chat.id, 'Set Default file Downloader', {
      reply_markup: {
        inline_keyboard: [
          [{
              text: 'wget',
              callback_data: 'DWNWGET'
            },
            {
              text: 'curl',
              callback_data: 'DWNCURL'
            }
          ],
          [{
            text: 'axel',
            callback_data: 'DWNAXEL'
          }]
        ]
      }
    })
    return
  }

  /*
  	get current downloader
   */
  if (msg.text === '/getdownloader') {
    db.get('downloader', (err, downloader) => {
      if (err) {
        throw err
      }
      bot.sendMessage(msg.chat.id, downloader, {
        reply_to_message_id: msg.message_id,
      })
    })
    return
  }

  /*
  	get current quality
   */
  if (msg.text === '/getquality') {
    db.get('quality', (err, downloader) => {
      if (err) {
        throw err
      }
      bot.sendMessage(msg.chat.id, downloader, {
        reply_to_message_id: msg.message_id,
      })
    })
    return
  }
  /*
  	set youtube download quality
   */
  if (msg.text === '/setquality') {
    bot.sendMessage(msg.chat.id, 'Set Download quality for Youtube-dl', {
      reply_markup: {
        inline_keyboard: [
          [{
              text: 'Audio',
              callback_data: 'YAUDIO'
            },
            {
              text: 'low',
              callback_data: 'YLOW'
            }
          ],
          [{
              text: 'medium',
              callback_data: 'YMEDIUM'
            },
            {
              text: 'high',
              callback_data: 'YHIGH'
            }
          ],
          [{
            text: 'ultra high',
            callback_data: 'YULTRA'
          }]
        ]
      }
    })
    return
  }
  exec(bot, msg, db)
}