const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if(message.content === '!help'){
        var amalgam = 'Hello! BobBot can ~~annoy~~ help you in a few ways!\n'.concat('**!help**    Its what you\'re looking at dingus!\n');
        amalgam = amalgam.concat('**!help**    Its what you\'re looking at dingus!\n');
        amalgam = amalgam.concat('**!ping**    If you want to see the responce time of the bot!\n');
        amalgam = amalgam.concat('**!flip**     You can flip the table in any situation!\n');
        amalgam = amalgam.concat('**!roll x**  Roll an **x** sided die!\n');
        amalgam = amalgam.concat('Bob bot may also interfere with any conversation!\n');
        amalgam = amalgam.concat('*No relation to the zucc you have been warned*');
        message.channel.send(amalgam);
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
