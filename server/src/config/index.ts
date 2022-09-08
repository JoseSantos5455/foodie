import { config } from 'dotenv';

config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });
export const { NODE_ENV, PORT, MONGO_URI, JWT_SECRET, ORIGIN, PROJECT_ID, CLIENT_EMAIL, PRIVATE_KEY } = process.env;
