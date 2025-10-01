import axios from "axios";
import { config } from "./config.js";

export async function getPages() {
  const auth = { username: config.email, password: config.apiToken };

  const response = await axios.get(
    `${config.baseUrl}/pages`,
    { auth }
  );
  return response.data;
}