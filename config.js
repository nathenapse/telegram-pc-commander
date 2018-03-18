const os = require('os')

const ADMIN = process.env.TELEGRAM_USER_ID
const DB_PATH = "./db"

const DOWNLOADERS = [
  'wget',
  'curl',
  'axel'
];
const YOUTUBE_QUALITY = {
  'audio': 140,
  'low': 160,
  'medium': 18,
  'high': 22,
  'ultra': 137
}

const DOWNLOAD_PATH = os.homedir();

const DEFAULT_DOWNLOADER = 'wget';

const YOUTUBE_DOWNLOADER = 'youtube-dl'

const TORRENT_DOWNLOADER = 'aria'

const DEFAULT_YOUTUBE_QUALITY = 'medium'

module.exports = {
  ADMIN,

  DB_PATH,
  DOWNLOADERS,
  DOWNLOAD_PATH,
  DEFAULT_DOWNLOADER,
  YOUTUBE_DOWNLOADER,
  DEFAULT_YOUTUBE_QUALITY,
  YOUTUBE_QUALITY,
}