const { Modal } = require("sheweny");
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Permissions, ChannelType, PermissionFlagsBits, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const config = require('../../../config.json');
module.exports = class  extends Modal {
  constructor(client) {
    super(client, ["suport_modal"]);
  }
  
  async execute(modal) {
    // Get my modal information
    const email = modal.fields.getTextInputValue("email");
    const message = modal.fields.getTextInputValue("message");
    // My category id 1165658038364024902

    await modal.guild.channels.create({
      name: `support-${modal.user.username}`,
      type: ChannelType.GuildText,
      parent: `1165658038364024902`,
      permissionOverwrites: [
        {
          id: modal.guild.roles.everyone,
          allow: [PermissionFlagsBits.SendMessages],
          deny: [PermissionFlagsBits.ViewChannel],
        },
        {
          id: modal.user.id,
          allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.ReadMessageHistory],
          deny: [PermissionFlagsBits.ManageChannels],
        }
      ]
    }).then(async (channel) => {
      const embed = new EmbedBuilder()
        .setTitle("Support")
        .addFields({
          name: "Email",
          value: email,
        },
        {
          name: "Message",
          value: message,
        })
        .setTimestamp()
      const close = new ButtonBuilder().setStyle(ButtonStyle.Danger).setCustomId("support_close").setLabel("Fermer le ticket");

      const logsEmbed = new EmbedBuilder().setTitle("Support").setDescription(`Un nouveau ticket a été ouvert par ${modal.user} : <#${channel.id}>`).setTimestamp();
      const logsChannel = modal.guild.channels.cache.get("1166027445045039124");
      modal.reply({content: `Votre ticket : <#${channel.id}>`, ephemeral: true});
      channel.send({embeds: [embed], components: [new ActionRowBuilder().setComponents(close)]});
      logsChannel.send({embeds: [logsEmbed]});
    })
  }
};