import { Context, NextFunction } from 'grammy';
import process from 'process';


const start = async (ctx: Context, next: NextFunction) => {
  if (ctx.chat?.type !== 'private') return;
  const admin = parseInt(process.env.ADMIN!);

  if (ctx.from?.id === admin) return await ctx.reply('Welcome SaDi!');

  await ctx.reply('Hi there👋\nI can send your messages to SaDi, just send me a message');
  next();
}

export { start };
