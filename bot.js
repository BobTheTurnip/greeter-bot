const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});
/*
function txt_check(check) {
    var temp = '(^|\s)' + check + '($|\s|\?)';
    if (/temp/g.test(message.content.toLowerCase())) {
        return true;
    }
    else return false;
}
*/
client.on('message', message => {
    if(message.author.bot) return;

    if (message.content === '!help') {
        var amalgam = 'Hello! BobBot can ~~annoy~~ help you in a few ways!\n'.concat('`!help`       It\'s what you\'re looking at dingus!\n\n');
        amalgam = amalgam.concat('`!ping`       If you want to see the responce time of the bot!\n\n');
        amalgam = amalgam.concat('`!flip`       You can flip the table in any situation!\n\n');
        amalgam = amalgam.concat('`!roll x`     Roll an **x** sided die! Or 6 if you give nothing!\n\n');
        amalgam = amalgam.concat('Bob bot may also interfere with any conversation!\n');
        amalgam = amalgam.concat('*You have been warned*');
        message.channel.send(amalgam);
    }
    if (message.content === '!ping') {
        message.channel.send('*Pong* This is fun!');
    }
    if (message.content === '!flip') {
        message.channel.send('\(\╯\°\□\°\）\╯\︵ \┻\━\┻');
    }
    if (message.content.substring(0, 5) === '!roll') {    // Dice roller
        var num = 6;
        var res = message.content.substring(6);
        var con = '';
        if (res !== '')
            num = res;
        var rnd = Math.floor(Math.random() * num) + 1;
        if (!Number.isInteger(rnd))
            rnd = Math.floor(Math.random() * 6) + 1;
        con = 'You got a '.concat(rnd);
        con = con.concat('!');
        message.channel.send(con);
    }
    /* text check
    if (txt_check('don(\'t|t)( |)do')) message.channel.send('You cant tell me what to do!');
    if (txt_check('good bot')) message.channel.send('*Purrs softly*');
    if (txt_check('bad bot')) message.channel.send('BobBot will remember that.');
    if (txt_check('hello there')) message.channel.send('General Kenobi!');
    if (txt_check('say hello')) message.channel.send('Hello!');
    if (txt_check('w(a|o|u)t')) message.channel.send('\*what');
    if (txt_check('listen')) message.channel.send('What? listerning? Who\'s doing that? Certainly not me!');
    if (txt_check('(murder|kill)')) message.channel.send('*Calls Police*');
    if (txt_check('\(\╯\°\□\°\）\╯\︵ \┻\━\┻')) message.channel.send('\┬\─\┬\ノ\( \º \_ \º\ノ\) Let\'s keep it civil here');
    if (txt_check('\(\☞ﾟ\ヮﾟ\)\☞')) message.channel.send('\\\\\\\\\\\\\☜\(ﾟ\ヮﾟ\☜\)');
    if (txt_check('f(u|o|oo)(c|ck|k) (u|you|yoo|off)')) message.channel.send('No U');
    if (txt_check('(you|your|ur|u) mum g(a|e)y')) message.channel.send('No U');
    if (txt_check('no (you|u)')) message.channel.send('No U');
    */
    if (/(^|\s)don(\'t|t)( |)do($|\s|\?)/g.test((message.content).toLowerCase())) {
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
    if (/(^|\s)f(u|o|oo)(c|ck|k) (u|you|yoo|off)($|\s|\?)/g.test(message.content)) {
        message.channel.send('No U');
    }
    if (/(^|\s)(you|your|ur|u) mum g(a|e)y($|\s|\?)/g.test(message.content)) {
        message.channel.send('No U');
    }
    if (/(^|\s)no (you|u)($|\s|\?)/g.test(message.content)) {
        message.channel.send('No U');
    }
    //
});

client.login(process.env.BOT_TOKEN);
