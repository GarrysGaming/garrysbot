

    const Discord = require("discord.js");

    var bot = new Discord.Client()

    bot.on("ready", function(){
        bot.user.setGame("GarrysBot, !help")
        console.log('Connection reussi avec succes')
    });

    bot.login("Mzk2MzA5OTU0NTUxODczNTM3.DSqMUw.AmWxggPBMEbaWsToNfalrdd3gHQ")

    bot.on('message', function (message){
        if(message.channel.name === 'bot'){
            if(message.content === '!help')   {
                message.delete
                message.channel.sendMessage('Voici la liste des commandes disponible : !help ; !yt')
            }
        }
    })
