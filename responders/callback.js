const pwd = require('../callbacks/pwd')
const downloader = require('../callbacks/downloader')
const youtube_quality = require('../callbacks/youtube_quality')

module.exports = (bot, config, db) => (callbackQuery) => {

  const quality_callbacks = [
    "YAUDIO",
    "YLOW",
    "YMEDIUM",
    "YHIGH",
    "YULTRA"
  ]

  const downloader_callbacks = [
    "DWNAXEL",
    "DWNCURL",
    "DWNWGET"
  ]

  /*
  	Set Show current directory after each command to true
   */
  if (callbackQuery.data === 'PWDTRUE') {
    pwd(bot, config, db, callbackQuery, true)
    return
  }

  /*
  	Set Show current directory after each command to false
   */
  if (callbackQuery.data === 'PWDFALSE') {
    pwd(bot, config, db, callbackQuery, false)
    return
  }

  /*
  	Set default downloader
   */
  if (downloader_callbacks.indexOf(callbackQuery.data) > -1) {
    downloader(bot, config, db, callbackQuery)
    return
  }

  /*
  	Set default youtube download quality
   */
  if (quality_callbacks.indexOf(callbackQuery.data) > -1) {
    youtube_quality(bot, config, db, callbackQuery)
    return
  }

}