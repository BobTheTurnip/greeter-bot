const Discord = require('discord.js');
const client = new Discord.Client();
var newGreeting = 27;

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if(message.content === '!help'){
        var amalgam = 'Hello! BobBot can ~~annoy~~ help you in a few ways!\n'.concat('`!help`       Its what you\'re looking at dingus!\n\n');
        amalgam = amalgam.concat('`!ping`       If you want to see the responce time of the bot!\n\n');
        amalgam = amalgam.concat('`!flip`       You can flip the table in any situation!\n\n');
        amalgam = amalgam.concat('`!roll x`     Roll an **x** sided die! Or 6 if you give nothing!\n\n');
        amalgam = amalgam.concat('Bob bot may also interfere with any conversation!\n');
        amalgam = amalgam.concat('*You have been warned*');
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
        var res = message.content.substring(6);
        var con = '';
        if(res != '')
            num = res;
        var rnd = Math.floor(Math.random() * num) + 1;
        if(!(Number.isInteger(rnd)))
            rnd = Math.floor(Math.random() * 6) + 1;
        con = 'You got a '.concat(rnd);
        con = con.concat('!');
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
    
    var temp = new Date.now();
    if(temp.getDay() == newGreeting)
    {
        newGreeting += 1;
        message.channel.send("@BobTheTurnip#9562 You are shit!");
    }
});

client.login(process.env.BOT_TOKEN);
