module.exports = (bot, config, db, callbackQuery) => {

  const quality = {
    YAUDIO: 'audio',
    YLOW: 'low',
    YMEDIUM: 'midium',
    YHIGH: 'high',
    YULTRA: 'ultra',
  }

  bot.sendChatAction(callbackQuery.message.chat.id, 'typing');

  db.put('quality', quality[callbackQuery.data], (err) => {
    if (err) {
      throw err
    }
    bot.answerCallbackQuery(callbackQuery.id, { text: "Default Youtube download quality set to: " + quality[callbackQuery.data], show_alert: false })

    bot.editMessageText("Default Youtube download quality set to: " + quality[callbackQuery.data], {
      chat_id: callbackQuery.message.chat.id,
      message_id: callbackQuery.message.message_id
    })
  })
}