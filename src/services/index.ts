import { ApiResponse, MediaType, CategoryType } from "../types";
import { Endpoints } from "../constants";

type FetchParams = {
  mediaType: MediaType;
  categoryType: CategoryType;
  query?: string;
  page?: number;
};

export const fetchData = async <T>({
  mediaType,
  categoryType,
  query,
  page = 1,
}: FetchParams): Promise<ApiResponse<T>> => {
  let url: string = "";
  console.log(page);
  if (categoryType === "search") {
    if (!query) throw new Error("Search query is required for search.");
    url =
      mediaType === "movie"
        ? Endpoints.MOVIE_SEARCH(query, page)
        : Endpoints.TV_SEARCH(query, page);
  } else {
    url =
      mediaType === "movie"
        ? categoryType === "popular"
          ? Endpoints.MOVIE_POPULAR(page)
          : Endpoints.MOVIE_TOP_RATED
        : categoryType === "popular"
        ? Endpoints.TV_POPULAR(page)
        : Endpoints.TV_TOP_RATED;
  }
  console.log(url);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${categoryType} movies`);
  }
  return response.json();
};
