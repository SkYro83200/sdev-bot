const { Modal } = require("sheweny");

module.exports = class ModalComponent extends Modal {
  constructor(client) {
    super(client, ["support_button"]);
  }
  
  async execute(modal) {
    modal.reply("Modal received.");
  }
};
