import { MediaType, CategoryType } from "@/types";
import config from "@/config";

// Fetch movies
export const fetchMovies = async ({
  mediaType,
  categoryType,
  query,
  page,
}: {
  mediaType: MediaType;
  categoryType: CategoryType;
  query?: string;
  page?: number;
}) => {
  const res = await fetch(
    `${config.baseURL}/${mediaType}/${categoryType}?api_key=${config.apiKey}${
      page ? "&page=" + page : ""
    }${query ? "&query=" + query : ""}`
  );

  return res.json();
};

// Fetch videos
export const fetchVideos = async (mediaType: MediaType, id: number) => {
  const res = await fetch(
    `${config.baseURL}/${mediaType}/${id}/videos?api_key=${config.apiKey}`
  );

  return res.json();
};

// Fetch movie
export const fetchMovie = async (mediaType: MediaType, id: number) => {
  const res = await fetch(
    `${config.baseURL}/${mediaType}/${id}?api_key=${config.apiKey}`
  );

  return res.json();
};

// Fetch credit
export const fetchCredit = async (mediaType: MediaType, id: number) => {
  const res = await fetch(
    `${config.baseURL}/${mediaType}/${id}/credits?api_key=${config.apiKey}`
  );

  return res.json();
};

// Fetch similar
export const fetchSimilar = async (mediaType: MediaType, id: number) => {
  const res = await fetch(
    `${config.baseURL}/${mediaType}/${id}/similar?api_key=${config.apiKey}`
  );

  return res.json();
};
