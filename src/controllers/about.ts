import { Context, NextFunction } from 'grammy';

const about = async (ctx: Context, next: NextFunction) => {
  if (ctx.chat?.type !== 'private') return;
  await ctx.reply('The bot is built on the javascript\'s grammY package. <a href="https://github.com/sad1go0/livegram-js.git">Sources</a>', { parse_mode: 'HTML' });
  next();
}

export { about };