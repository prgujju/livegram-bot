import { Api, Bot, Context, RawApi } from 'grammy';
import process from 'process';

if (!process.env.BOT_TOKEN) throw new Error('BOT_TOKEN environment variable is required');
if (!process.env.ADMIN) throw new Error('ADMIN environment variable is required');

const bot: Bot<Context, Api<RawApi>> = new Bot(process.env.BOT_TOKEN);

bot.init()
  .then(() => console.log(`Bot @${bot.botInfo.username} has been started`))
  .catch(() => console.log('Cannot start bot'))

bot.start()

export { bot };