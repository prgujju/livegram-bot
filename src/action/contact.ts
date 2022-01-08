import { bot } from '../core/bot';
import { contact } from '../controllers';

bot.on(':contact', contact);