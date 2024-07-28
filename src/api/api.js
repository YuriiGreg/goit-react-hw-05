import axios from 'axios';

const API_KEY = '001f851c9fafc10e2b4bdf77de7157ea';
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchTrendingMovies = async () => {
  const response = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
};

const searchMovies = async (query) => {
  const response = await axios.get(`${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}`);
  return response.data.results;
};

const fetchMovieDetails = async (id) => {
  const response = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  return response.data;
};

const fetchMovieCast = async (id) => {
  const response = await axios.get(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`);
  return response.data.cast;
};

const fetchMovieReviews = async (id) => {
  const response = await axios.get(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`);
  return response.data.results;
};

export { fetchTrendingMovies, searchMovies, fetchMovieDetails, fetchMovieCast, fetchMovieReviews };
