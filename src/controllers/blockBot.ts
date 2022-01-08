import { Context } from 'grammy';
import { subscribers } from '../database';

const blockBot = (ctx: Context) => {
  const user = ctx.update.my_chat_member!.from.id;
  if (!subscribers.includes(user)) return;
  const index = subscribers.indexOf(user);
  subscribers.splice(index, 1);
}

export { blockBot };