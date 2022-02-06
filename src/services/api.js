import axios from "axios";

export const key = "65b6dc042754f909ffcd8f6ca00027fc1afe76b0";

const api = axios.create({
  baseURL: "https://api-ssl.bitly.com/v4",
  headers: {
    Authorization: `Bearer ${key}`,
  },
});
// minha chave: 65b6dc042754f909ffcd8f6ca00027fc1afe76b0
export default api;
