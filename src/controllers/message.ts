import { Context } from 'grammy';
import process from 'process';

const message = async (ctx: Context) => {
  const admin = parseInt(process.env.ADMIN!);

  if (ctx.from!.id === admin) {
    if (!ctx.message!.reply_to_message) return await ctx.reply('With reply!');

    const id = ctx.message!.reply_to_message!.forward_from!.id;
    if (ctx.message?.text) return ctx.api.sendMessage(id, ctx.message.text);
    if (ctx.message?.voice) return ctx.api.sendVoice(id, ctx.message.voice.file_id);
    if (ctx.message?.audio) return ctx.api.sendAudio(id, ctx.message.audio.file_id);
    if (ctx.message?.video) return ctx.api.sendVideo(id, ctx.message.video.file_id);
    if (ctx.message?.location) return ctx.api.sendLocation(id, ctx.message.location.latitude, ctx.message.location.longitude);
    if (ctx.message?.sticker) return ctx.api.sendSticker(id, ctx.message.sticker.file_id);
    if (ctx.message?.animation) return ctx.api.sendAnimation(id, ctx.message.animation.file_id);
    if (ctx.message?.photo) return ctx.api.sendPhoto(id, ctx.message.photo[2].file_id);
  }

  ctx.forwardMessage(admin);
}

export { message };