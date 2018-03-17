# telegram-pc-commander
Run terminal commands on your pc using telegram

- [DESCRIPTION](#description)
- [INSTALLATION](#installation)
- [TODO](#todo)
- [LICENSE](#license)

## DESCRIPTION

**telegram-pc-commander** is a telegram bot that let's you run commands through [telegram](https://telegram.org). There are default commands that will help you run simple commands like Download a file, Download Youtube videos, Run simple commands and more to come.

## REQUIREMENTS

- Node version > 7.10.1
- [youtube-dl](https://github.com/rg3/youtube-dl) to download youtube videos
- One of terminal file downloaders wget, curl, axel


## INSTALLATION

- To install it first clone the project on your pc 
```bash 
git clone https://github.com/nathenapse/telegram-pc-commander.git
```
- Install package dependency 
```bash
cd telegram-pc-commander
npm install
```
- Create a telegram bot using [@BotFather](https://t.me/botfather)
	- Set the name of the bot
	- Set the username of the bot
	- Set the commands of the bot using ```/setcommands``` and select your bot
	- Then paste the below content
```
file - Download a file
torrent - Downalod a torrent file (TODO)
upload - Get a file from the pc
youtube - Download a youtube video
showpwd - For Sequential commands (TODO)
setdownloader - Set File Downloader
getdownloader - Get current File Downloader
setquality - set Youtube Download Quality
getquality - get current Youtube Download Quality
```	
- Get your telegram user id using [@IDBot](https://t.me/myidbot)
- Copy .env.example to .env
```bash
cp .env.example .env
```
- Set your bot and telegram user id on .env
```YAML
TELEGRAM_TOKEN=<TELEGRAM_TOKEN>
TELEGRAM_USER_ID=<TELEGRAM_USER_ID>
```
- Install [PM2](http://pm2.keymetrics.io/) globally 
```bash 
sudo npm install -g pm2
```
- Start app using pm2 
```bash 
pm2 start ecosystem.config.js
```
- To start the bot at reboot
```bash
pm2 startup
```
Copy and paste the commands pm2 tells you, then while the app is still running
```bash
pm2 save
```

## TODO

- [ ] Torrent Downloads
- [ ] Continous command
- [ ] Better Documentation

## LICENSE

MIT