const { Command } = require("sheweny");
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

module.exports = class  extends Command {
  constructor(client) {
    super(client, {
        name: "developpement",
        description: "Créer le message de commandes",
        type: "SLASH_COMMAND",
        category: "Fondateur",
        
        channel: "GUILD",
      }
    );
  }

  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setTitle('Commande de développement')
      .setDescription('Si vous souhaitez passer une commande de développement, vous pouvez ouvrir un ticket commande via le bouton ci-dessous.')

    const mesBoutons = new ActionRowBuilder()
      .setComponents(
          new ButtonBuilder().setStyle(ButtonStyle.Success).setCustomId('command_button').setLabel('Passer une commande'),
      );

    // Send message to this channel : 1165629838703460452
    const channel = interaction.guild.channels.cache.get('1165629838703460452');
    await channel.send({ embeds: [embed], components: [mesBoutons] });
  }
};
