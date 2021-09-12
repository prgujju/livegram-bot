const bot = require('./bot');
const admin = process.env.ADMIN;

bot.on('contact', ctx => {
  const phone_number = ctx.update.message.contact.phone_number;
  const first_name = ctx.update.message.contact.first_name;
  const last_name = ctx.update.message.contact.last_name || '';
  const user_id = ctx.update.message.contact.user_id;
  const msg = `Sanga btas malumotn jonatti qara\nIsmi: <a href="tg://user?id=${user_id}">${first_name + ' ' + last_name}</a>\nID: ${user_id}\nTel: ${phone_number}`;
  ctx.telegram.getUserProfilePhotos(user_id)
    .then(d => {
      ctx.telegram.sendPhoto(admin, d.photos[0][0].file_id, { caption: msg, parse_mode: 'HTML' })
        .then(d => {
          if (d) return ctx.reply('Ma\'lumotlaringiz yuborildi✅');
        })
        .catch(d => {
          if (d) return ctx.reply('Ma\'lumotlaringiz yuborilmadi❌');
        })
    })
    .catch(d => {
      ctx.telegram.sendMessage(admin, msg, { parse_mode: 'HTML' })
        .then(d => {
          if (d) return ctx.reply('Ma\'lumotlaringiz yuborildi✅');
        })
        .catch(d => {
          if (d) return ctx.reply('Ma\'lumotlaringiz yuborilmadi❌');
        })
    })
})