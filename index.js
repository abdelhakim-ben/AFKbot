const mineflayer=require('mineflayer')
const botarg = {
    host: 'GesTamp.aternos.me',
    port: 64873,
    username: 'nero'
};

let bot = mineflayer.createBot(botarg);
    bot.on('login',()=> {
    let botSocket = bot._client.socket;
    console.log(`Logged in to ${botSocket.server ? botSocket.server : botSocket._host}`);

});

bot.on('end', () => {
    console.log(`Disconnected`);
});
