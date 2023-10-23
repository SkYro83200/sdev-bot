const { Button } = require("sheweny");
const config = require('../../../config.json');
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

module.exports = class  extends Button {
  constructor(client) {
    super(client, ["support_close"]);
  }

  async execute(button) {
    // Delete the channel 
    const channel = button.channel;
    // Check if the player has admin role in the config.json AdminRole it's table of role id
    if (!button.member.roles.cache.some(role => config.AdminRole.includes(role.id))) return button.reply({ content: "Vous n'avez pas la permission d'utiliser cette commande.", ephemeral: true });
    await channel.delete();
    // Send message to this channel : 1166027445045039124
    const logsChannel = button.guild.channels.cache.get('1166027445045039124');
    const embed = new EmbedBuilder()
      .setTitle('Support')
      // Name of the ticket 
      .setDescription(`Le ticket **${channel.name}** a été fermé par ${button.user}`)
      .setTimestamp();

    await logsChannel.send({ embeds: [embed] });
  };
};