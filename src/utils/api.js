import axios from "axios";

const apiKey = "f1261be36c501633c57edf21c6cd5d2c";
const baseURL = "https://api.themoviedb.org/3";

//static endpoints
const searchMoviesEndpoint = `${baseURL}/search/movie?api_key=${apiKey}`;
const movieGenresEndpoint = `${baseURL}/genre/movie/list?api_key=${apiKey}`;

//dynamic endpoints
export const trendingMoviesEndpoint = (page) =>
  page ? `${baseURL}/trending/movie/day?api_key=${apiKey}&page=${page}` : null;
export const upComingMoviesEndpoint = (page) =>
  page ? `${baseURL}/movie/upcoming?api_key=${apiKey}&page=${page}` : null;
export const popularMoviesEndpoint = (page) =>
  page ? `${baseURL}/movie/popular?api_key=${apiKey}&page=${page}` : null;
export const topRatedMoviesEndpoint = (page) =>
  page ? `${baseURL}/trending/movie/day?api_key=${apiKey}&page=${page}` : null;
export const movieDetailsEndpoint = (id) =>
  id ? `${baseURL}/movie/${id}?api_key=${apiKey}` : null;
export const movieCastEndpoint = (id) =>
  id ? `${baseURL}/movie/${id}/credits?api_key=${apiKey}` : null;
export const similarMoviesEndpoint = (id) =>
  id ? `${baseURL}/movie/${id}/similar?api_key=${apiKey}` : null;
export const personDetailsEndpoint = (id) =>
  id ? `${baseURL}/person/${id}?api_key=${apiKey}` : null;
export const personMoviesEndpoint = (id) =>
  id ? `${baseURL}/person/${id}/movie_credits?api_key=${apiKey}` : null;

async function apiCall(endpoint, params) {
  const options = {
    method: "GET",
    url: endpoint,
    params: params ? params : {},
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (err) {
    console.log("error", err);
    return {};
  }
}

export function fetchTrendingMovies(page) {
  const pageNumber = page ? page : 1;
  return apiCall(trendingMoviesEndpoint(pageNumber));
}
export function fetchUpComingMovies(page) {
  const pageNumber = page ? page : 1;
  return apiCall(upComingMoviesEndpoint(pageNumber));
}
export function fetchPopularMovies(page) {
  const pageNumber = page ? page : 1;
  return apiCall(popularMoviesEndpoint(pageNumber));
}
export function fetchTopRatedMovies(page) {
  const pageNumber = page ? page : 1;
  return apiCall(topRatedMoviesEndpoint(pageNumber));
}

export function fetchMovieGenresList() {
  return apiCall(movieGenresEndpoint);
}

export function fetchSearchMovies(params) {
  return apiCall(searchMoviesEndpoint, params);
}

export function fetchImage500(path) {
  return path ? `https://image.tmdb.org/t/p/w500${path} ` : null;
}

export function fetchMovieDetails(id) {
  return apiCall(movieDetailsEndpoint(id));
}

export function fetchMovieCast(id) {
  return apiCall(movieCastEndpoint(id));
}

export function fetchSimilarMovies(id) {
  return apiCall(similarMoviesEndpoint(id));
}

export function fetchPersonDetails(id) {
  return apiCall(personDetailsEndpoint(id));
}

export function fetchPersonMovies(id) {
  return apiCall(personMoviesEndpoint(id));
}
