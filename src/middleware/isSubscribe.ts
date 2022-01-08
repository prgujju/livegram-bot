import { Context, NextFunction } from 'grammy';
import process from 'process';
import { subscribers } from '../database';

async function isSubscribe(ctx: Context, next: NextFunction) {
  if (ctx.chat?.type !== 'private') return;
  const admin = parseInt(process.env.ADMIN!);

  if (!subscribers.includes(ctx.from!.id)) {
    const first_name = ctx.from?.first_name;
    const last_name = ctx.from?.last_name || '';
    const id = ctx.from!.id;
    const msg = `New subscriber: <a href="tg://user?id=${id}">${first_name} ${last_name}</a>`;
    subscribers.push(id);
    await ctx.api.sendMessage(admin, msg, { parse_mode: 'HTML' });
  }
  next();
}


export { isSubscribe };