const { Event } = require("sheweny");
const { VoiceChannel, ChannelType } = require('discord.js');

module.exports = class extends Event {
  constructor(client) {
    super(client, "voiceStateUpdate", {
      description: "create voice room with pseudo",
      once: false,
    });
  }

  async execute(oldState, newState) {
    const voiceChannelId = "943495023746490424"; // The ID of the voice channel to monitor
    const voiceChannelName = newState.member.user.username; // The name of the voice channel to create

      if (newState.channelId == voiceChannelId) {
        oldState.guild.channels.create({
          name: `Vocal de ${voiceChannelName}`,
          type: ChannelType.GuildVoice,
          parent: "943495023746490420",
          
        }).then(chen => {
          newState.member.voice.setChannel(chen);
        });
      }
      if(oldState.channel){
        if(oldState.channel.name.includes("Vocal de") && oldState.channel.members.size === 0){
          oldState.channel.delete();
        }
      }
    }
  };
