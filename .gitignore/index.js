

    const Discord = require("discord.js");

    var bot = new Discord.Client()

    bot.on("ready", function(){
        bot.user.setGame("GarrysBot, !help")
    });

    bot.login("Mzk2MzA5OTU0NTUxODczNTM3.DSqMUw.AmWxggPBMEbaWsToNfalrdd3gHQ")

    bot.on('message', message =>{
        if(Message.content === '!help'){
            return Message.reply(' : Voici la liste des commandes : !help ; !yt')
        }
    })

    bot.on('guildMemberAdd', function (membre){
        membre.createDM.then(function(chanel) {
            return chanel.send('Bienvenue à ' + membre.displayName)
        }).catch(console.error)
    })
