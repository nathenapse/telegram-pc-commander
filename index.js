/**
 * require packages
 */
require('dotenv').config()
const level = require('level')
const TelegramBot = require('node-telegram-bot-api');
const shell = require('shelljs');
/**
 * setup packages
 */
// TODO: verify the token exists
const token = process.env.TELEGRAM_TOKEN;
const bot = new TelegramBot(token, { polling: true });

const config = require('./config')
const db = level(config.DB_PATH)
// customize bot with features
require('./custombot')(bot);

/**
 * require responders
 */
const initialize = require('./initialize')
const message = require('./responders/message')
const callback = require('./responders/callback')

bot.on('message', message(bot, config, db))

bot.on('callback_query', callback(bot, config, db))

bot.on('polling_error', (error) => {
  if (error) {
    throw error;
  }
});

initialize(db, config, (error) => {
  if (error) {
    throw error
  }
})
})