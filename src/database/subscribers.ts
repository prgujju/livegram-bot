import { env } from 'process';

const admin = parseInt(env.ADMIN!);

const subscribers: number[] = [admin];

export { subscribers };