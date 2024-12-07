const axios = require ("axios")

const handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) {
    return m.reply(`Enter the Spotify track URL or title!\nExample: *${usedPrefix + command} Faded*`);
  }

  await m.reply("🔄 🎧 Hang tight! Lazack Device bot is fetching your track direct from Spotify! 🤩...");

  try {
    // Spotify track search
    const searchApiUrl = `https://spotifyapi.caliphdev.com/api/search/tracks?q=${encodeURIComponent(text)}`;
    const searchData = (await axios.get(searchApiUrl)).data;

    const trackData = searchData[0];
    if (!trackData) {
      return m.reply("❌ No Spotify results found. Please try again with a valid URL or query.");
    }

    // Send track info message
    const trackInfo = `_🎵 LAZACK DEVICE TRACK 🎵_

- *Title*: ${trackData.title}
- *Artist*: ${trackData.artist}
- *URL*: ${trackData.url}`;

    conn.sendMessage(
      m.chat,
      {
        text: trackInfo,
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
            showAdAttribution: true,
            title: trackData.title,
            body: "LAZACK DEVICE SEARCH & DOWNLOAD",
            thumbnailUrl: trackData.thumbnail,
            mediaType: 1,
            renderLargerThumbnail: true,
          },
        },
      },
      { quoted: m }
    );

    // Spotify download API
    const downloadApiUrl = `https://spotifyapi.caliphdev.com/api/download/track?url=${encodeURIComponent(trackData.url)}`;
    const response = await axios({
      url: downloadApiUrl,
      method: "GET",
      responseType: "stream",
    });

    if (response.headers["content-type"] === "audio/mpeg") {
      conn.sendMessage(
        m.chat,
        { audio: { stream: response.data }, mimetype: "audio/mpeg" },
        { quoted: m }
      );
    } else {
      m.reply("⚠ Failed to fetch Spotify audio. Please try again later.");
    }
  } catch (error) {
    m.reply(`❌ Lazack Device encountered an error: ${error.message}`);
    console.error(error);
  }
};

handler.help = ["play2"];
handler.tags = ["downloader"];
handler.command = ['play2'];
handler.limit = 3

module.exports = handler;