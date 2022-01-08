import { bot } from '../core/bot';
import { blockBot } from '../controllers';

bot.on('my_chat_member', blockBot);