module.exports = (bot, config, db, callbackQuery, showpwd = true) => {
  bot.sendChatAction(callbackQuery.message.chat.id, 'typing');
  db.put('showpwd', showpwd, (err) => {
    if (err) {
      throw err
    }

    bot.editMessageText("Showing of current directory after a command set: " + showpwd, {
      chat_id: callbackQuery.message.chat.id,
      message_id: callbackQuery.message.message_id
    })
    bot.answerCallbackQuery(callbackQuery.id, { text: "Show PWD set successfully", show_alert: false })
  })
}