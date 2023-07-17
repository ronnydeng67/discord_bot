const { SlashCommandBuilder } = require("discord.js");
const { joinVoiceChannel } = require('@discordjs/voice');


module.exports = {
    data: new SlashCommandBuilder()
    .setName("play")
    .setDescription("Use this command to play your favourite song!")
    .addStringOption(option => option.setName("song_name").setDescription("Enter the name of the song you want to play!").setRequired(true)),

    async execute(client, interaction) {
        const song_name = interaction.options.getString("song_name");
        if (!interaction.member.voice.channel) {
            return interaction.reply({content: "You must join a voice channel to play song", ephemeral:true})
        } else {
            joinVoiceChannel({
                channelId: interaction.member.voice.channel.id,
                guildId: interaction.member.voice.channel.guild.id,
                adapterCreator: interaction.member.voice.channel.guild.voiceAdapterCreator,
            })
        }
    }
    
}