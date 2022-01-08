import process from 'process';
const admin = parseInt(process.env.ADMIN!);

const contacts: number[] = [admin];

export { contacts };