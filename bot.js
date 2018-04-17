const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!ping') {
        message.channel.send('*Pong* This is fun!');
    }
    if (message.content === '!flip') {
        message.channel.send('\(\╯\°\□\°\）\╯\︵ \┻\━\┻');
    }
    
    if (/don(\'t|t)/g.test((message.content).toLowerCase())) {
        message.channel.send('You cant tell me what to do!');
    }
    if (/good bot/g.test((message.content).toLowerCase())) {
        message.channel.send('*purrs softly*');
    }
    if (/bad bot/g.test((message.content).toLowerCase())) {
        message.channel.send('BobBot will remember that.');
    }
    if (/hello there/g.test((message.content).toLowerCase())) {
        message.channel.send('General Kenobi!');
    }
    if (/say hello/g.test((message.content).toLowerCase())) {
        message.channel.send('Hello!');
    }
    if (/\swat/g.test((message.content).toLowerCase())) {
        message.channel.send('\*what');
    }
    if (/listen/g.test((message.content).toLowerCase())) {
        message.channel.send('What? listerning? Who\'s doing that? Certainly not me!');
    }
    if (/(murder|kill)/g.test((message.content).toLowerCase())) {
        message.channel.send('*Calls Police*');
    }
    if (/\(\╯\°\□\°\）\╯\︵ \┻\━\┻/g.test((message.content).toLowerCase())) {
        message.channel.send('\┬\─\┬\ノ\( \º \_ \º\ノ\) Let\'s keep it civil here');
    }
    if (/\(\☞ﾟ\ヮﾟ\)\☞/g.test(message.content)) {
        message.channel.send('\\\\\\\\\\\\\☜\(ﾟ\ヮﾟ\☜\)');
    }
});

client.login(process.env.BOT_TOKEN);
