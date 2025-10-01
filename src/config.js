import dotenv from "dotenv";
dotenv.config();

export const config = {
  email: process.env.CONFLUENCE_EMAIL,
  apiToken: process.env.CONFLUENCE_API_TOKEN,
  baseUrl: process.env.CONFLUENCE_BASE_URL
};