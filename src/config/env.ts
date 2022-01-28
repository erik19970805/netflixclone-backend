import { IEnv } from '@src/interfaces/IEnv';

const { MONGODB_URL, PORT } = process.env as unknown as IEnv;

export const port = String(PORT);

export const mongodbUrl = String(MONGODB_URL);
