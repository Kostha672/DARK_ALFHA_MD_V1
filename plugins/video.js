//Created by Sadeesha Coder 🙋

const {cmd , commands} = require('../command')
const yts = require('yt-search')
const { fetchJson } = require("../lib/functions")

cmd({
    pattern: "video",
    desc: "download videos.",
    react: "📽️",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply(">🔗Please give me a URL or TITLE🔗*")
const search = await yts (q) 
const data = search.videos[0];
const url = data.url

let desc = `*❮❮❮ THENU - MD VIDEO DOWNLOADER ❯❯❯*

> ➤ *𝗧𝗜𝗧𝗟𝗘* - ${data.title}

> ➤ *𝗩𝗜𝗘𝗪𝗦* - ${data.views}

> ➤ *𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗧𝗜𝗢𝗡* - ${data.description}

> ➤ *𝗧𝗜𝗠𝗘* - ${data.timestamp}

> ➤ *𝗔𝗚𝗢* - ${data.ago}

> 🎬 Your video downloading....

> ꜱɪᴍᴘᴀʟ ᴡᴀᴛꜱ ᴀᴘᴘ ʙᴏᴛ ʙʏ THENU  ᴍᴅ ⚡

> *THENU ᴍᴅ ᴡᴀᴛꜱ ᴀᴘᴘ ʙᴏᴛ ⚟*
 
> © Made by Thenula Panapiti.
> ↺ |◁   II   ▷|   ♡
  `
 await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek})
 
 //download video

 let down = await fg.ytv(url)
 let downloadUrl = down.dl_url
    
 //send video+ document message 

 await conn.sendMessage(from,{video: {url:downloadUrl},mimetype:"video/mp4",caption:">Thenula Panapiti💕"},{quoted:mek})
 await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"video/mp4",fileName:data.title + ".mp4",caption:"> Thenula Panapiti💕"},{quoted:mek})

 


}catch(e){
  console.log(e)
  reply(`${e}`)
}
})

