import { Context, NextFunction } from 'grammy';
import process from 'process';

const start = async (ctx: Context, next: NextFunction) => {
  const admin = parseInt(process.env.ADMIN!);

  if (ctx.from!.id === admin)
    return await ctx.reply('Welcome SaDi!');

  await ctx.reply('Welcome');
  next();
}

export { start };