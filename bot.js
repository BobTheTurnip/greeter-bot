const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!ping') {
        message.reply('*Pong* This is fun!');
    }

    if (message.content == to.lowercase(/("don't do")/g)) {
        message('You cant tell me what to do!');
    }
});

client.login(process.env.BOT_TOKEN);
