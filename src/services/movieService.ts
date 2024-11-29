import { MovieAPIResponse, CategoryType, CollectionType } from "../types";

const API_KEY = "4f85134e0e3de33d9af45eb9596b5735";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (
  collectionType: CollectionType,
  categoryType: CategoryType
): Promise<MovieAPIResponse> => {
  const response = await fetch(
    `${BASE_URL}/${collectionType}/${categoryType}?api_key=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch ${categoryType} movies`);
  }
  return response.json();
};
