const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
  console.log("Je suis connecté !")
})

bot.login('NDM0MTgzODkwNjgxNDYyNzg0.DbGtKg.1WmC3vj94U-LK9lZ6WkG8ZTSXWY')

const client = new Discord.Client();

client.login('NDM0MTgzODkwNjgxNDYyNzg0.DbGtKg.1WmC3vj94U-LK9lZ6WkG8ZTSXWY');

client.on('message', message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === '/join') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          message.reply('I have successfully connected to the channel!');
        })
        .catch(console.log);
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
});
// Play an mp3 from a URL
connection.playArbitraryInput('http://mysite.com/sound.mp3');
