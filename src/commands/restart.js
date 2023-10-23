const { Command } = require("sheweny");

module.exports = class  extends Command {
  constructor(client) {
    super(client, {
        name: "restart",
        description: "redémarre le bot",
        type: "SLASH_COMMAND",
        category: "Fondateur",
        cooldown: 3,
        
      }
    );
  }

  async execute(interaction) {
    await this.client.managers.commands.deleteAllCommands("943495023549362189");
    // Send ephemeral message
    await interaction.reply({ content: "Redémarrage en cours...", ephemeral: true });
    return process.exit();
  }
};
