const Discord = require('discord.io');
const logger = require('winston');
const auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
const bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        let args = message.substring(1).split(' ');
        let cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            case 'node':
                bot.sendMessage({
                    to: channelID,
                    message: 'Learn about Node.js and the ecosystem: https://tinyurl.com/LearnNodejs'
                });
            break;
            case 'php':
                bot.sendMessage({
                    to: channelID,
                    message: 'Server side programming with PHP: https://tinyurl.com/LearnPHP-XAMPP'
                });
            break;
            case 'html':
            bot.sendMessage({
                to: channelID,
                message: 'Master the art of HTML: https://tinyurl.com/y986bpe6'
            });
            break;
            case 'css':
            bot.sendMessage({
                to: channelID,
                message: 'Design like a pro using CSS: https://tinyurl.com/y986bpe6'
            });
            break;
            case '42':
            bot.sendMessage({
                to: channelID,
                message: 'https://tinyurl.com/WhatIsTheAnswerToLife'
            });
            break;
            case 'feedback':
            bot.sendMessage({
                to: channelID,
                message: 'https://form.jotform.ca/71937212084253'
            });
            break;
            case 'help':
            bot.sendMessage({
                to: channelID,
                message: 'Command list:   !node  !html  !css  !42  !feedback'
            });
            break;
            
         }
     }
});