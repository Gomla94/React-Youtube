import axios from "axios";

const KEY = "AIzaSyDn3YSHzBhwcDkNN_S5vAuuoXJNi0F-0Yg";

export default axios.create({
  baseURL: "https://googleapis.com/youtube/v3",
  headers: {
    mode: "cors",
  },
  params: {
    par: "snippet",
    maxResult: 5,
    key: KEY,
  },
});
