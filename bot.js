const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if(message.content === '!help'){
        message.channel.send('Hello! BobBot can ' + 'annoy'.strike() + ' help you in a few ways!');
        message.channel.send('**!ping**   If you want to see the responce time of the bot!');
        message.channel.send('**!flip**   You can flip the table in any situation!');
        message.channel.send('**!roll x** Roll an **x** sided die!');
    }
    if(message.content === '!ping'){
        message.channel.send('*Pong* This is fun!');
    }
    if(message.content === '!flip'){
        message.channel.send('\(\╯\°\□\°\）\╯\︵ \┻\━\┻');
    }
    if(message.content.substring(0, 5) === '!roll'){
        var num = 6;
        if(message.content.substring(6) != '')
            num = message.content.substring(6);
        var con = 'You got a '.concat(Math.floor(Math.random() * num) + 1);
        var con = con.concat('!');
        message.channel.send(con);
    }
    
    if (/(^|\s)don(\'t|t)($|\s|\?)/g.test((message.content).toLowerCase())) {
        message.channel.send('You cant tell me what to do!');
    }
    if (/(^|\s)good bot($|\s|\?)/g.test((message.content).toLowerCase())) {
        message.channel.send('*purrs softly*');
    }
    if (/(^|\s)bad bot($|\s|\?)/g.test((message.content).toLowerCase())) {
        message.channel.send('BobBot will remember that.');
    }
    if (/(^|\s)hello there($|\s|\?|\!)/g.test((message.content).toLowerCase())) {
        message.channel.send('General Kenobi!');
    }
    if (/(^|\s)say hello($|\s|\?)/g.test((message.content).toLowerCase())) {
        message.channel.send('Hello!');
    }
    if (/(^|\s)w(a|o|u)t($|\s|\?)/g.test((message.content).toLowerCase())) {
        message.channel.send('\*what');
    }
    if (/(^|\s)listen/g.test((message.content).toLowerCase())) {
        message.channel.send('What? listerning? Who\'s doing that? Certainly not me!');
    }
    if (/(^|\s)(murder|kill)($|\s|\?)/g.test((message.content).toLowerCase())) {
        message.channel.send('*Calls Police*');
    }
    if (/(^|\s)\(\╯\°\□\°\）\╯\︵ \┻\━\┻($|\s|\?)/g.test((message.content).toLowerCase())) {
        message.channel.send('\┬\─\┬\ノ\( \º \_ \º\ノ\) Let\'s keep it civil here');
    }
    if (/(^|\s)\(\☞ﾟ\ヮﾟ\)\☞($|\s|\?)/g.test(message.content)) {
        message.channel.send('\\\\\\\\\\\\\☜\(ﾟ\ヮﾟ\☜\)');
    }
});

client.login(process.env.BOT_TOKEN);
