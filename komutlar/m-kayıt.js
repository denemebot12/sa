const Discord = require('discord.js');
exports.run = (client, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Bunun için gerekli iznin yok');
  let guild = message.guild
  let user = message.mentions.members.first() 
  let rolver = guild.roles.find('name', 'Admin')// Verilicek Rol
  let rolal = guild.roles.find('name', 'kayıtsız üye')// Alınıcak Rol (Siledebilrisiniz)
user.addRole(rolver);
user.removeRole(rolal);// Alınıcak Rolü Silicekseniz Bunuda Silin
  
  const embed = new Discord.RichEmbed()
        .setColor("GREEN")
        .setDescription(`🤖 Rol Başarıyla Verildi 🤖`)
        .addField("⭐ Rolü Veren Kişi", `<@${message.author.id}>`)
        .addField("🎉 Rolü Alan Kişi", user)
        .addField("✔️ Verildi", rolver)
  message.channel.send(embed)

  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ky","e"],
  permLevel: 2
};

exports.help = {
  name: 'kayıtyap',
  description: '',
  usage: 'kayıtyap'
};