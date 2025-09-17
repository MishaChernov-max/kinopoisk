import axios from "axios";

const instance = axios.create({
  baseURL: "https://kinopoiskapiunofficial.tech/api/v2.2",
  timeout: 1000,
  headers: {
    "X-API-KEY": "df0dcea1-11e9-4124-a2f3-8a9606af3f73",
    "Content-Type": "application/json",
  },
});
export default instance;
