import { configDotenv } from "dotenv";

// Use local *.env variables only on development environment
if (process.env.NODE_ENV !== 'production')
  configDotenv();

const AppConfig = {
  PORT: Number(process.env.PORT) || 5200,
  BASE_URL: process.env.BASE_URL,
  PROCESSING_SERVER_HOST: process.env.PROCESSING_SERVER_SANDBOX,
  database: {
    HOST: process.env.HOST,
    USER: process.env._USER,
    PASSWORD: process.env.PASSWORD
  }
}

export default AppConfig;