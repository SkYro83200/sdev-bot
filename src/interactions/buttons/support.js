const { Button } = require("sheweny");
const { ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } = require("discord.js");

module.exports = class  extends Button {
  constructor(client) {
    super(client, ["support_button"]);
  }

  async execute(button) {
    const modal = new ModalBuilder().setCustomId("suport_modal").setTitle("Support");
    const emailInput = new TextInputBuilder().setCustomId("email").setLabel("Saisissez votre email").setStyle(TextInputStyle.Short);
    const messageInput = new TextInputBuilder().setCustomId("message").setLabel("Saisissez votre message").setStyle(TextInputStyle.Paragraph);

    const emailRow = new ActionRowBuilder().addComponents(emailInput);
    const messageRow = new ActionRowBuilder().addComponents(messageInput);

    modal.addComponents(emailRow, messageRow);

    await button.showModal(modal);
  }
};