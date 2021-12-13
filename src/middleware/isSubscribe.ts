import { Context, NextFunction } from 'grammy';
import { subscribers } from '../database';

function isSubscribe(ctx: Context, next: NextFunction) {
  const admin = parseInt(process.env.ADMIN!);

  if (!subscribers.includes(ctx.from!.id)) {
    const first_name: string = ctx.from!.first_name;
    const last_name: string = ctx.from!.last_name || '';
    const id: number = ctx.from!.id;
    const msg = `New subscriber: <a href="tg://user?id=${id}">${first_name} ${last_name}</a>`;
    subscribers.push(id);
    ctx.api.sendMessage(admin, msg, { parse_mode: 'HTML' });
  }
  next();
}

export { isSubscribe };