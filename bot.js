const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'duts') {

       message.reply('dule');

       }

});


client.on('message', message => {

    if (message.content === 'nino') {

       message.reply('nin4e');

       }

});
 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
