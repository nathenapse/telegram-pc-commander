module.exports = (bot, config, db, callbackQuery) => {

  const downloaders = {
    DWNAXEL: { text: 'axel', command: 'axel -n 100' },
    DWNCURL: { text: 'curl', command: 'curl -O' },
    DWNWGET: { text: 'wget', command: 'wget' },
  }
  bot.sendChatAction(callbackQuery.message.chat.id, 'typing');

  db.put('downloader', downloaders[callbackQuery.data].command, (err) => {
    if (err) {
      throw err
    }
    bot.answerCallbackQuery(callbackQuery.id, { text: "Default Downloader set to " + downloaders[callbackQuery.data].text, show_alert: false })

    bot.editMessageText("Defalut Downloader set to: " + downloaders[callbackQuery.data].text, {
      chat_id: callbackQuery.message.chat.id,
      message_id: callbackQuery.message.message_id
    })
  })
}