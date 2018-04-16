const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!ping') {
        message.reply('*Pong* This is fun!!');
    }

    if (message.content == "div:contains('don't do')") {
        message('you cant tell me what to do');
    }
});

client.login(process.env.BOT_TOKEN);
