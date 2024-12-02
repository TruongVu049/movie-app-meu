export const IMAGE_SIZES = {
  small: "w500",
  original: "original",
};

export const NavLinkData = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Movies",
    path: "/movie",
  },
  {
    id: 3,
    title: "TV Series",
    path: "/tv",
  },
];

const API_KEY = "4f85134e0e3de33d9af45eb9596b5735";
const BASE_URL = "https://api.themoviedb.org/3";

export const Endpoints = {
  MOVIE_POPULAR: (page?: number) =>
    `${BASE_URL}/movie/popular?api_key=${API_KEY}${
      page ? "&page=" + page : ""
    }`,
  MOVIE_TOP_RATED: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`,
  TV_POPULAR: (page?: number) =>
    `${BASE_URL}/tv/popular?api_key=${API_KEY}${page ? "&page=" + page : ""}`,
  TV_TOP_RATED: `${BASE_URL}/tv/top_rated?api_key=${API_KEY}`,
  MOVIE_SEARCH: (query: string, page: number = 1) =>
    `${BASE_URL}/search/movie?page=${page}&api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`,
  TV_SEARCH: (query: string, page: number = 1) =>
    `${BASE_URL}/search/tv?page=${page}&api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`,
};

export const TAGS = {
  movie: "movie",
  tv: "tv",
  popular: "popular",
  top_rated: "top_rated",
  search: "search",
};
