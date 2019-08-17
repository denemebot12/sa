constDiscord=require('discord.js');
exports.run=(client,message,args)=>{
if(message.author.id!="498389962971021312")returnmessage.reply('BunuSadeceSahibimKullanabilir');

if(!message.guild){
constozelmesajuyari=newDiscord.RichEmbed()
.setColor(0xFF0000)
.setTimestamp()
.setAuthor(message.author.username,message.author.avatarURL)
.addField('⚠Uyarı⚠','Bukomutuözelmesajlardakullanamazsın.');
returnmessage.author.sendEmbed(ozelmesajuyari);}
letguild=message.guild;
letreason=args.slice(1).join('');
letuser=message.mentions.users.first();
if(reason.length<1)returnmessage.reply('Negöndericemonudayazıver.');
if(message.mentions.users.size<1)returnmessage.reply('KimeMesajatacamonudayazıver.').catch(console.error);
message.delete();
message.reply('✔|MesajınıGönderdim.')
constembed=newDiscord.RichEmbed()
.setColor('RANDOM')
.setTitle(`**SahibimdenBirMesajınVar**`)
.setTimestamp()
.setDescription(reason);
returnuser.send(embed);
};

exports.conf={
enabled:true,
guildOnly:false,
aliases:['pm','öm'],
permlevel:4
};

exports.help={
name:'özelmesaj',
description:'Birkullanıcıyaözelmesajyollar.',
usage:'özelmesaj'
};