const { ApplicationCommandOptionType } = require("discord.js");
const { Command } = require("sheweny");

module.exports = class  extends Command {
  constructor(client) {
    super(client, {
        name: "clear",
        description: "supprimer tous les messages",
        type: "SLASH_COMMAND",
        category: "Admin",
        cooldown: 5,
        channel: "GUILD",
        userPermissions: ['ManageMessages'],
        options: [
          {
            name: "nombre",
            description: "nombre de message a supprimer",
            type: ApplicationCommandOptionType.Integer,
            required: true,
          },
        ]
      }
    );
  }

  async execute(interaction) {
    const { options } = interaction;
    const amount = options.getInteger("nombre");
    if (amount < 1 || amount > 100) {
      return interaction.reply({
        content: "Vous devez saisir un nombre entre 1 et 100",
        ephemeral: true,
      });
    }
    await interaction.channel.bulkDelete(amount, true);
    return interaction.reply({
      content: `Vous avez supprimé ${amount} messages`,
      ephemeral: true,
    });
  }
};
