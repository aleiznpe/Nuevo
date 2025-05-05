import { WAMessageStubType } from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return !0;

  let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => 'https://qu.ax/jYQH.jpg')
  let img = await (await fetch(pp)).buffer()  
  let chat = global.db.data.chats[m.chat]
  let welcome = ''
  let bye = ''

  if (chat.bienvenida && m.messageStubType == 27) {
    if (chat.sWelcome){
      let user = `@${m.messageStubParameters[0].split`@`[0]}`
      welcome = chat.sWelcome
        .replace('@user', () => user)
        .replace('@group', () => groupMetadata.subject)
        .replace('@desc', () => groupMetadata.desc || 'sin descripción');
    } else {
    let user = `@${m.messageStubParameters[0].split`@`[0]}`
    welcome = `👋🏻 𝐁𝐢𝐞𝐧𝐯𝐞𝐧𝐢𝐝𝐨/𝐚\n👤: ${user}\n💢 𝙶𝚛𝚞𝚙𝚘: ${groupMetadata.subject}\n📩 𝙳𝚎𝚜𝚌𝚛𝚒𝚙𝚌𝚒𝚘́𝚗:\n🩸 ${groupMetadata.desc || '𝚂𝚒𝚗 𝚍𝚎𝚜𝚌𝚛𝚒𝚙𝚌𝚒𝚘́𝚗.'}\n\n> 𝐙𝐞𝐫𝐰𝐚𝐲 𝐛𝐨𝐭 🔥`
    }
    let text = welcome
    let message = {
      caption: text, 
      mentions: [m.messageStubParameters[0]],
      contextInfo: {
        mentionedJid: [m.messageStubParameters[0]],
        externalAdReply: {
          title: packname,
          body: dev,
          mediaUrl: pp,
          mediaType: 2,
          thumbnailUrl: 'https://qu.ax/ZAyVQ.jpg',
          thumbnail: img
        }
      },
      image: img, 
    }
    
    await conn.sendMessage(m.chat, message, { quoted: m })
  }

  if (chat.bienvenida && m.messageStubType == 28) {
    if (chat.sBye) {
          let user = `@${m.messageStubParameters[0].split`@`[0]}`
      bye = chat.sBye
        .replace('@user', () => user)
        .replace('@group', () => groupMetadata.subject)
        .replace('@desc', () => groupMetadata.desc || 'sin descripción');
    } else {
    let user = `@${m.messageStubParameters[0].split`@`[0]}`
    bye = `👋🏻 *𝐂𝐡𝐚𝐨𝐨*\n👤: ${user}\n🤷🏻‍♂️ 𝐔𝐧𝐚 𝐛𝐚𝐬𝐮𝐫𝐚 𝐦𝐞𝐧𝐨𝐬 😮‍💨🖕🏼\n\n> ALEIZN BOT 🔥`
    }
    let text = bye
    let message = {
      caption: text, 
      mentions: [m.messageStubParameters[0]],
      contextInfo: {
        mentionedJid: [m.messageStubParameters[0]],
        externalAdReply: {
          title: packname,
          body: dev,
          mediaUrl: pp,
          mediaType: 2,
          thumbnailUrl: 'https://qu.ax/ZAyVQ.jpg',
          thumbnail: img
        }
      },
      image: img,
    }

    await conn.sendMessage(m.chat, message, { quoted: m })
  }

  if (chat.bienvenida && m.messageStubType == 32) {
    let user = `@${m.messageStubParameters[0].split`@`[0]}`
    let text = chat.sBye || `👋🏻 *𝐂𝐡𝐚𝐨𝐨*\n👤: ${user}\n🤷🏻‍♂️ 𝐔𝐧𝐚 𝐛𝐚𝐬𝐮𝐫𝐚 𝐦𝐞𝐧𝐨𝐬 😮‍💨🖕🏼\n\n> ALEIZN BOT 🔥`

    let message = {
      caption: text,
      mentions: [m.messageStubParameters[0]],
      contextInfo: {
        mentionedJid: [m.messageStubParameters[0]],
        externalAdReply: {
          title: packname,
          body: dev,
          mediaUrl: pp,
          mediaType: 2,
          thumbnailUrl: 'https://qu.ax/ZAyVQ.jpg',
          thumbnail: img
        }
      },
      image: img,
    }

    await conn.sendMessage(m.chat, message, { quoted: m })
  }
}
