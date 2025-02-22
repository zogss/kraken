import dotenv from 'dotenv';
dotenv.config();

const { CLIENT_ID, DISCORD_TOKEN } = process.env;

if (!CLIENT_ID || !DISCORD_TOKEN) {
  throw new Error('Missing environment variables');
}

const config: Record<string, string> = {
  CLIENT_ID,
  DISCORD_TOKEN,
};

export default config;
