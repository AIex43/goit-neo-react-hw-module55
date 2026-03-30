import axios from "axios";

const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZmEwNDIyNWE5NTAzYjk2MTJkNzkzM2NmOGM2NWE1MCIsIm5iZiI6MTc3NDg3NzQ1Ni4yNCwic3ViIjoiNjljYTdiMTBjNmU1M2JkZDczNWFmMjE1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.oBPTq273O3Y3t1k3tZ_ws1L2WDXb6eorp17oS4Phah4";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

export const getTrendingMovies = async () => {
  const { data } = await instance.get("/trending/movie/day");
  return data.results;
};

export const searchMovies = async (query) => {
  const { data } = await instance.get(
    `/search/movie?query=${query}&include_adult=false&page=1`
  );
  return data.results;
};

export const getMovieDetails = async (id) => {
  const { data } = await instance.get(`/movie/${id}`);
  return data;
};

export const getMovieCast = async (id) => {
  const { data } = await instance.get(`/movie/${id}/credits`);
  return data.cast;
};

export const getMovieReviews = async (id) => {
  const { data } = await instance.get(`/movie/${id}/reviews`);
  return data.results;
};