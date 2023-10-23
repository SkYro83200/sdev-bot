const { Command } = require("sheweny");
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

module.exports = class  extends Command {
  constructor(client) {
    super(client, {
        name: "support",
        description: "Créer le message de support",
        type: "SLASH_COMMAND",
        category: "Fondateur",
        
        channel: "GUILD",
      }
    );
  }

  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setTitle('Besoin de support')
      .setDescription('En cas de problème technique avec un addon réalisé chez nous, vous pouvez ouvrir un ticket support via le bouton ci-dessous.')

    const mesBoutons = new ActionRowBuilder()
      .setComponents(
          new ButtonBuilder().setStyle(ButtonStyle.Success).setCustomId('support_button').setLabel('Ouvrir un ticket'),
      );

    // Send message to this channel : 943495023746490418
    const channel = interaction.guild.channels.cache.get('943495023746490418');
    await channel.send({ embeds: [embed], components: [mesBoutons] });
  }
};
