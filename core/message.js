const bot = require('./bot');
const admin = process.env.ADMIN;

bot.on('message', ctx => {
  if (ctx.chat.id !== parseInt(admin)) {
    if (ctx.message.text === '/start') {
      ctx.forwardMessage(admin)
      const msg = `SaD1'ning shaxsiy botiga Xush kelibsiz!\nSiz bu botdan spam bo'lgan xolatingizda Sadi bilan bog'lanishingiz mumkin ;)\n/help - Bot haqida ma'lumot`;
      return ctx.reply(msg, {
        reply_markup: {
          keyboard: [
            [
              {
                text: 'O\'zim haqimda ma\'lumotlarimni yuborish👥',
                request_contact: true
              }
            ]
          ],
          one_time_keyboard: true,
          resize_keyboard: true,
        }
      });
    }
    if (ctx.message.text === '/help') {
      ctx.forwardMessage(admin)
      const msg = `Bu bot 100% <a href="https://en.wikipedia.org/wiki/JavaScript">JavaScript</a> dasturlash tilida yozilgan, <a href="https://en.wikipedia.org/wiki/Node.js">NodeJS</a> yordamida\nBotning <a href="https://github.com/sad1go0/livegrambot.git">source kod</a>lari, bemalol kirib ko'rinishingiz mumkin!\nAgar sizgaham shunday, va boshqacha Telegram bot'lar kerak bo'lsa murojaat qilishingiz mumkin :)`;
      return ctx.replyWithHTML(msg, { disable_web_page_preview: true });
    }
    ctx.forwardMessage(admin)
  }
  else {
    if (!ctx.message.reply_to_message) return ctx.reply('SaD1 xabarin yetbormadi, reply bn yoz', { reply_to_message_id: ctx.message.message_id });
    if (!ctx.message.reply_to_message.forward_from) return ctx.reply('Baltun kimga reply qilyabsan', { reply_to_message_id: ctx.message.message_id })
    const chat = ctx.message.reply_to_message.forward_from.id;
    if (ctx.message.text) return ctx.telegram.sendMessage(chat, ctx.message.text);
    if (ctx.message.photo) return ctx.telegram.sendPhoto(chat, ctx.message.photo[2].file_id)
    if (ctx.message.animation) return ctx.telegram.sendAnimation(chat, ctx.message.animation.file_id)
    if (ctx.message.sticker) return ctx.telegram.sendSticker(chat, ctx.message.sticker.file_id);
    if (ctx.message.video) return ctx.telegram.sendVideo(chat, ctx.message.video.file_id);
  }
})