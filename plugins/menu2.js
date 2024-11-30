
const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({

    pattern: "menu",

    react: "📜",

    alias: ["panel","commands"],

    desc: "Get bot\'s command list.",

    category: "main",

    use: '.menu',

    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, umarmd, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{
let madeMenu = `
*╭┈───────────────•*

*⇆ ʜɪɪ ᴍʏ ᴅᴇᴀʀ ғʀɪᴇɴᴅ ⇆*

     *${pushname}*
     
*╰┈───────────────•*
┏━━━━━━━━━━━━━━━━━━━━━━━━━━•⟢
   *ᴍᴀʟᴀᴋᴀ-ᴍᴅ ʙʏ ᴅᴀʀᴋ-ᴀʟꜰʜᴀ-ʙᴏᴛ*
┗━━━━━━━━━━━━━━━━━━━━━━━━━━•⟢

*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴅᴀʀᴋ-ᴀʟꜰʜᴀ-ʙᴏᴛ👨🏻‍💻*

*◆─〈 ${config.BOT_NAME} 〉─◆*
*╭┈───────────────•* 
*│  ◦*  *ʀᴜɴᴛɪᴍᴇ* : ${runtime(process.uptime())}
*│  ◦*  *ᴍᴏᴅᴇ* : *[${config.MODE}]*
*│  ◦*  *ᴘʀᴇғɪx* : *[${config.PREFIX}]*
*│  ◦*  *ʀᴀᴍ ᴜsᴇ* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*│  ◦*  *ɴᴀᴍᴇ ʙᴏᴛ* : *❖ᴍᴀʟᴀᴋᴀ-ᴍᴅ❖*
*│  ◦*  *ᴄʀᴇᴀᴛᴏʀ* : *➺ᴅᴀʀᴋ-ᴀʟꜰʜᴀ-ʙᴏᴛ࿐*
*│  ◦*  *ᴠᴇʀsɪᴏɴs* : *ᴠ.2.0.0*
*│  ◦*  *ᴍᴇɴᴜ ᴄᴍᴅ* : *ᴍᴇɴᴜ ʟɪsᴛ*
*╰┈───────────────•*
*♡︎•━━━━━━☻︎━━━━━━•♡︎*

*[ • 📥 DOWNLOADER-CMD 📥 ‎• ]*
*╭┈───────────────•*
*┋* *.ғʙ<ᴜʀʟ>*
*┋* *.ғʙ2 <ᴜʀʟ>*
*┋* *.ᴠɪᴅᴇᴏ <ᴜʀʟ>*
*┋* *.ɢᴅʀɪᴠᴇ <ᴜʀʟ>*
*┋* *.ᴛᴡɪᴛᴛᴇʀ <ᴜʀʟ>*
*┋* *.ᴛɪᴋᴛᴏᴋ <ᴜʀʟ>*
*┋* *.ᴍᴇᴅɪᴀғɪʀᴇ <ᴜʀʟ>*
*┋* *.ꜱᴏɴɢ <ϙᴜᴇʀʏ>*
*┋* *.ꜱᴏɴɢ2 <ϙᴜᴇʀʏ>*
*┋* *.ᴛɪᴋᴛᴏᴋ2 <ᴜʀʟ>*
*┋* *.ɪɢ <ᴜʀʟ>*
*┋* *.xᴠɪᴅᴇᴏ <ᴜʀʟ>*
*┋* *.ᴀᴘᴋ <ᴜʀʟ>*
*┋* *.ᴛᴛꜱ <ᴜʀʟ>*
*┋* *.ꜱɪɴʜᴀʟᴀꜱᴜᴅ <ᴜʀʟ>*
*┋* *.ᴅᴀɪꜱᴄᴏᴘᴇ <ᴜʀʟ>*
*┋* *.ɢɪɴɪꜱɪꜱɪʟᴀ <ᴜʀʟ>*
*┋* *.ᴍᴏᴠɪᴇ <ᴜʀʟ>*
*╰┈───────────────•*

*[ • 🔎 SEARCH-CMD 🔍 ‎• ]*
*╭┈───────────────•*
*┋* *.ʏᴛꜱ  <ᴛᴇxᴛ>*
*┋* *.ɪᴍɢ <ᴛᴇxᴛ>*
*╰┈───────────────•*

*[ • 🧠 AI-CMD 🧠 ‎• ]*
*╭┈───────────────•*
*┋* *.ᴀɪ <ᴛᴇxᴛ>*
*╰┈───────────────•*

*[ • 👨‍💻 OWNER-CMD 👨‍💻 ‎• ]*
*╭┈───────────────•*
*┋* *.ꜱʜᴜᴛᴅᴏᴡɴ*
*┋* *.ʙʀᴏᴀᴅᴄᴀꜱᴛ*
*┋* *.ꜱᴇᴛᴘᴘ*
*┋* *.ʙɪᴏᴄᴋ*
*┋* *.ᴜɴʙʟᴏᴄᴋ*
*┋* *.ᴄʟᴇᴀʀᴄʜᴀᴛꜱ*
*┋* *.ᴊɪᴅ*
*┋* *.ɢᴊɪᴅ*
*┋* *.ʀᴇꜱᴛᴀʀᴛ*
*┋* *.ꜱᴇᴛᴀᴜᴛᴏʙɪᴏ*
*┋* *.ꜱᴇᴛᴛɪɴɢꜱ*
*┋* *.ᴜᴘᴅᴀᴛᴇ*
*╰┈───────────────•*

*[ • 👥 GROUP-CMD 👥 ‎• ]*
*╭┈───────────────•*
*┋* *.ʀᴇᴍᴏᴠᴇ <ʀᴇᴘʟʏ ғᴏʀ ᴅᴇʟᴇᴛᴇ sᴍs>*
*┋* *.ᴅᴇʟᴇᴛᴇ <ʀᴇᴘʟʏ ғᴏʀ ᴅᴇʟᴇᴛᴇ sᴍs>*
*┋* *.ᴀᴅᴅ*
*┋* *.ᴋɪᴄᴋ*
*┋* *.sᴇᴛɢᴏᴏᴅʙʏᴇ <ᴛᴇxᴛ>*
*┋* *.sᴇᴛᴡᴇʟᴄᴏᴍᴇ <ᴛᴇxᴛ>*
*┋* *.ᴘʀᴏᴍᴏᴛᴇ*
*┋* *.ᴅᴇᴍᴏᴛᴇ*
*┋* *.ᴛᴀɢᴀʟʟ*
*┋* *.ɢᴇᴛᴘɪᴄ*
*┋* *.ɪɴᴠɪᴛᴇ*
*┋* *.ʀᴇᴠᴏᴋᴇ*
*┋* *.ᴊᴏɪɴʀᴇǫᴜᴇsᴛs*
*┋* *.ᴀʟʟʀᴇǫ*
*┋* *.ᴍᴜᴛᴇ*
*┋* *.ᴜɴᴍᴜᴛᴇ*
*┋* *.ʟᴏᴄᴋɢᴄ*
*┋* *.ᴜɴʟᴏᴄᴋɢᴄ*
*┋* *.ʟᴇᴀᴠᴇ*
*┋* *.ᴜᴘᴅᴀᴛᴇɢɴᴀᴍᴇ*
*┋* *.ᴜᴘᴅᴀᴛᴇɢᴅᴇsᴄ*
*┋* *.ᴊᴏɪɴ*
*┋* *.ʜɪᴅᴇᴛᴀɢ*
*┋* *.ɢɪɴғᴏ*
*┋* *.ᴅɪsᴀᴘᴘᴇᴀʀ ᴏɴ*
*┋* *.ᴅɪsᴀᴘᴘᴇᴀʀ ᴏғғ*
*┋* *.ᴅɪsᴀᴘᴘᴇᴀʀ 7ᴅ 24ʜ 90ᴅ*
*┋* *.sᴇɴᴅᴅᴍ*
*╰┈───────────────•*

*[ • 📃 INFO-CMD 📃 ‎• ]*
*╭┈───────────────•*
*┋* *.ᴍᴇɴᴜ*
*┋* *.ᴍᴇɴᴜ2*
*┋* *.ᴍᴇɴᴜ3*
*┋* *.ᴀʙᴏᴜᴛ*
*┋* *.sᴄʀɪᴘᴛ*
*┋* *.ʀᴇᴘᴏ*
*┋* *.ᴀʟɪᴠᴇ*
*┋* *.ʙᴏᴛɪɴꜰᴏ*
*┋* *.ꜱᴛᴀᴛᴜꜱ*
*┋* *.ꜱᴜᴘᴘᴏʀᴛ*
*┋* *.ᴘɪɴɢ*
*┋* *.ᴘɪɴɢ2*
*┋* *.ꜱʏꜱᴛᴇᴍ*
*╰┈───────────────•*

*[ • 🎡 CONVERTER-CMD 🎡 ‎• ]*
*╭┈───────────────•*
*┋* *.sᴛɪᴄᴋᴇʀ*
*┋* *.ᴛʀᴛ <ᴛᴇxᴛ>*
*┋* *.ᴛᴛs <ᴛᴇxᴛ>*
*╰┈───────────────•*

*[ • 🥂 RANDOM-CMD 🥂 ‎• ]*
*╭┈───────────────•*
*┋* *.ᴋɪɴɢ*
*┋* *.ᴅᴏɢ*
*┋* *.ᴀɴɪᴍᴇ*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ1*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ2*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ3*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ4*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ5*
*╰┈───────────────•*

*[ • 🏜️ WALLPAPERS-CMD 🏜️ ‎• ]*
*╭┈───────────────•*
*┋* *.ɪᴍɢ*
*╰┈───────────────•*

*[ • 🌐 OTHER-CMD 🌐 ‎• ]*
*╭┈───────────────•*
*┋* *.ᴛʀᴛ*
*┋* *.ᴊᴏᴋᴇ*
*┋* *.ꜰᴀᴄᴛ*
*┋* *.ɢɪᴛʜᴜʙꜱᴛᴀʟᴋ*
*┋* *.ɢᴘᴀꜱꜱ*
*┋* *.ʜᴀᴄᴋ*
*┋* *.ǫᴜᴏᴛᴇ*
*┋* *.ꜱʀᴇᴘᴏ*
*┋* *.ᴅᴇꜰɪɴᴇ*
*╰┈───────────────•*

*❒⁠⁠⁠⁠▭▬▭▬▭▬▭▬▭▬▭▬▭❒*⁠⁠⁠⁠

*•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴀʟᴀᴋᴀ-ᴍᴅ
*•────────────•⟢*
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
