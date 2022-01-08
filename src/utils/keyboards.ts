import { Keyboard } from 'grammy';

const shareContact = new Keyboard()
  .requestContact('Share contact')

export { shareContact };