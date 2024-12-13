import { MediaType } from "@/types";
import config from "@/config";

export const fetchVideos = async (mediaType: MediaType, id: number) => {
  const res = await fetch(
    `${config.baseURL}/${mediaType}/${id}/videos?api_key=${config.apiKey}`
  );

  return res.json();
};

export const fetchMovie = async (mediaType: MediaType, id: number) => {
  const res = await fetch(
    `${config.baseURL}/${mediaType}/${id}?api_key=${config.apiKey}`
  );

  return res.json();
};

export const fetchCredit = async (mediaType: MediaType, id: number) => {
  const res = await fetch(
    `${config.baseURL}/${mediaType}/${id}/credits?api_key=${config.apiKey}`
  );

  return res.json();
};

export const fetchSimilar = async (mediaType: MediaType, id: number) => {
  const res = await fetch(
    `${config.baseURL}/${mediaType}/${id}/similar?api_key=${config.apiKey}`
  );

  return res.json();
};
