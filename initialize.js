module.exports = (db, config, callback) => {
  const data = [
    { type: 'put', key: 'admin', value: process.env.TELEGRAM_USER_ID },
    { type: 'put', key: 'download_path', value: config.DOWNLOAD_PATH },
    { type: 'put', key: 'downloader', value: config.DEFAULT_DOWNLOADER },
    { type: 'put', key: 'torrent_downloader', value: config.DEFAULT_TORRENT_DOWNLOADER },
    { type: 'put', key: 'youtube_downloader', value: config.DEFAULT_YOUTUBE_DOWNLOADER },
    { type: 'put', key: 'quality', value: config.DEFAULT_YOUTUBE_QUALITY },
    { type: 'put', key: 'pwd', value: '~/' },
    { type: 'put', key: 'initialized', value: true },
  ];
  db.batch(data, err => {
    if (err) console.log("Ooops! can't initialize", err);
    callback(err);
  });
}