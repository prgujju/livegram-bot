import { Api, Bot, Context, RawApi } from 'grammy';
import process from 'process';

if (!process.env.BOTTOKEN) throw new Error('BOT_TOKEN environment variable is required');
if (!process.env.ADMIN) throw new Error('ADMIN environment variable is required');

const bot: Bot<Context, Api<RawApi>> = new Bot(process.env.BOTTOKEN);

bot.init()
  .then(() => console.log(`Bot has successfully launched`))
  .catch(() => console.log('Cannot start bot'))

bot.start()

export { bot };
