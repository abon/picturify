import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      " Client-ID 12d7b26ad9d8318cf156a539dee9d735859623d14a2bd7ef5f01673449828d7f"
  }
});
