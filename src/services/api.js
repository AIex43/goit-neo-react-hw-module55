import axios from "axios";

const BASE_URL = "https://api.unsplash.com/search/photos";

export const fetchImages = async (query, page) => {
  const response = await axios.get(BASE_URL, {
    params: {
      query,
      page,
      per_page: 12,
      client_id: "XFwT6AfxIoIREVf1-qJhR1HLMMekoDb4xTAh3m4syzI",
    },
  });

  return response.data;
};