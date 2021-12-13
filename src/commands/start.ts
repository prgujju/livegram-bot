import { bot } from '../core/bot';
import { start } from '../controllers';
import { isSubscribe } from '../middleware';

bot.command('start', isSubscribe, start);