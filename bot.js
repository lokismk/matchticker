const commando = require('discord.js-commando');
const bot = new commando.Client();

bot.registry.registerGroup('random', 'Random');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login('NDQyMzk1MzA2OTgyNjM3NTc1.Dc-MYg.0mkbk9UY17HV6GJPQ89v1fO3oQA');
