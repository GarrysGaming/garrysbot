import { Message } from "discord.js";

    const Discord = require("discord.js");

    var bot = new Discord.Client();

    bot.on("ready", function(){
        bot.user.setGame("GarrysBot, !help");
    });

    bot.login("Mzk2MzA5OTU0NTUxODczNTM3.DSqMUw.AmWxggPBMEbaWsToNfalrdd3gHQ");

    bot.on('message', Message =>{
        if(Message.content == "!help"){
            Message.reply(" : Voici la liste des commandes : !help ; !yt");
        }
    })
