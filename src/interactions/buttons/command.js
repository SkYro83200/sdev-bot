const { Button } = require("sheweny");
const { ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } = require("discord.js");

module.exports = class  extends Button {
  constructor(client) {
    super(client, ["command_button"]);
  }

  async execute(button) {
    const modal = new ModalBuilder().setCustomId("command_modal").setTitle("Commander");
    const emailInput = new TextInputBuilder().setCustomId("email").setLabel("Saisissez votre email").setStyle(TextInputStyle.Short);
    const domain = new TextInputBuilder().setCustomId("domain").setLabel("Quelle domaine").setStyle(TextInputStyle.Short);
    const messageInput = new TextInputBuilder().setCustomId("message").setLabel("Informations complémentaires").setStyle(TextInputStyle.Paragraph);

    const emailRow = new ActionRowBuilder().addComponents(emailInput);
    const domainRow = new ActionRowBuilder().addComponents(domain);
    const messageRow = new ActionRowBuilder().addComponents(messageInput);

    modal.addComponents(
      emailRow,
      domainRow,
      messageRow
      );

    await button.showModal(modal);
  }
};