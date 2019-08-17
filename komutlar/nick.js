const ayarlar = require("../ayarlar.json");   
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => { 
    if (message.author.id == message.guild.owner.user.id) {
        message.reply("**Hata: ** Takma ad ayarlanamadı. Sunucu sahiplerini düzenleyemiyorum.");
    } else { var msg = message.content
        var nick = msg.substr(ayarlar.prefix.length + 5);
        if (nick.length == 0) {
            message.reply("Takma adınızı sildim.");
            message.member.setNickname(message.author.username).catch(function(error) {
                message.channel.send("**Hata:** Takma ad ayarlanamadı. Takma adları değiştirme ve ayarlama iznim olduğundan emin olun.");
            });
        } else if (nick == "clear") {
            message.reply("Takma adınızı sildim."); 
            message.member.setNickname(message.author.username).catch(function(error) {
                message.channel.send("**Hata:** Takma ad ayarlanamadı. Takma adları değiştirme ve ayarlama iznim olduğundan emin olun.");
            });
        } else if (nick.length >= 33) {
            message.reply("**Hata: ** Takma adlar 32 karakterden uzun olamaz.");
        } else {
            message.reply("Yeni Nickiniz `" + nick + "`");
            message.member.setNickname(nick).catch(function (error) {
                message.channel.send("****Hata:** Takma ad ayarlanamadı. Takma adları değiştirme ve ayarlama iznim olduğundan emin olun.");
            });
        }
    }
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["isim"],
  permLevel: 0
};

module.exports.help = {
  name: 'nick',
  description: '',
  usage: ''
};