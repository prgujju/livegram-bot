import { Context } from 'grammy';
import process from 'process';
import { contacts } from '../database';

const contact = async (ctx: Context) => {
  if (ctx.chat?.type !== 'private') return;
  const admin = parseInt(process.env.ADMIN!);
  let first_name = ctx.message!.contact!.first_name!;
  let phone_number = ctx.message!.contact!.phone_number!;
  let last_name = ctx.message!.contact!.last_name!;
  let user_id = ctx.message!.contact!.user_id!;
  let username = ctx.message!.from!.username!;

  last_name = last_name ? `<a href="tg://user?id=${user_id}">${last_name}</a>` : 'No last name';
  phone_number = phone_number[0] === '+' ? phone_number : `+${phone_number}`;
  username = username ? `@${username}` : 'No username';
  const img = await ctx.getUserProfilePhotos().then(({ photos }) => photos[0][0].file_id).catch(() => '')
  const message = `New contact info!\nFirst Name: <a href="tg://user?id=${user_id}">${first_name}</a>\nLast Name: ${last_name}\nPhone Number: ${phone_number}\nUsername: ${username}\nID: ${user_id}`;
  if (contacts.includes(user_id)) return ctx.reply('Your contact is already sended.');
  contacts.push(user_id);
  if (!img) return await ctx.api.sendMessage(admin, message, { parse_mode: 'HTML' }).then(() => ctx.reply('Your contact has successfully sended.'));
  return await ctx.api.sendPhoto(admin, img, { caption: message, parse_mode: 'HTML' }).then(() => ctx.reply('Your contact has successfully sended.'));
}

export { contact };