

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
                message.delete(message.author)
                message.channel.sendMessage('Voici la liste des commandes disponible : !help ; !yt')
            }
            else if(message.content === '!yt'){
                message.delete(message.author)
                message.channel.sendMessage('Voici la chaine youtube de GarrysGaming : https://www.youtube.com/channel/UCu80F8H_BDuVjIrXnvWUjew')
            }
        }
        if(message.channel.name === 'music'){
            if(message.content.startsWith('!youtube')){
              
            }
            if(message.content === '!play'){
                message.delete(message.author)
                message.channel.sendMessage('Fonction bientôt disponible !')
            }
        }
    })
    bot.on('guildMemberAdd', function (membre){
        membre.sendMessage('Bienvenue ' + membre.displayName + ' sur le discord ' + membre.guild.name)
    })





