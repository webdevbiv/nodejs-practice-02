import dotenv from 'dotenv';
dotenv.config();

export default function getEnv(name, defaultValue = null) {
  if (process.env[name]) {
    return process.env[name];
  }
  if (defaultValue !== null) {
    return defaultValue;
  }
  throw new Error(
    `Environment variable ${name} is not set and no default value provided.`,
  );
}
