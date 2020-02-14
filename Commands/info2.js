const { RichEmbed } = require("discord.js"); 

module.exports = class info {
    constructor() {
        this.name = "info",
        this.alias = [],
        this.usage = "b!info"
    }

    async run(client, message, args) {
        try{
         let infoEmbed = new RichEmbed()
         .setTitle("**Forseti**")
         .setDescription("Sunucu Yedekleme")
         .addField("Davet", "[BANA TIKLA !](https://discordapp.com/oauth2/authorize?client_id=649660611227287553&scope=bot&permissions=2134244831)")
         .addField("Discord", "[BANA TIKLA !](https://discord.gg/8tCABEs)")
         .addField("Prefix", "!", true)
         .addField("Sunucular", client.guilds.size, true)
         .addField("Kullanıcılar:", client.users.size, true)
         .setFooter("Developed By Buse")
            message.channel.send(infoEmbed)
        }catch(e) {
            throw e;
        }
    }
}
