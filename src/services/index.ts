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
  page,
}: FetchParams): Promise<ApiResponse<T>> => {
  let url: string = "";
  if (categoryType === "search") {
    if (!query) throw new Error("Search query is required for search.");
    url =
      mediaType === "movie"
        ? Endpoints.MOVIE_SEARCH(query, page)
        : Endpoints.TV_SEARCH(query, page);
  } else {
    if (mediaType === "movie") {
      switch (categoryType) {
        case "popular":
          url = Endpoints.MOVIE_POPULAR(page);
          break;
        case "top_rated":
          url = Endpoints.MOVIE_TOP_RATED(page);
          break;
        case "video":
          url = Endpoints.VIDEOS("movie", page ?? 0);
          break;
        case "detail":
          url = Endpoints.DETAIL("movie", page ?? 0);
          break;
        case "credit":
          url = Endpoints.CREDIT("movie", page ?? 0);
          break;
        case "similar":
          url = Endpoints.SIMILAR("movie", page ?? 0);
          break;
        default:
          throw new Error("Search query is required for search.");
      }
    } else if (mediaType === "tv") {
      switch (categoryType) {
        case "popular":
          url = Endpoints.TV_POPULAR(page);
          break;
        case "top_rated":
          url = Endpoints.TV_TOP_RATED(page);
          break;
        case "video":
          url = Endpoints.VIDEOS("tv", page ?? 0);
          break;
        case "detail":
          url = Endpoints.DETAIL("tv", page ?? 0);
          break;
        case "similar":
          url = Endpoints.SIMILAR("tv", page ?? 0);
          break;
        case "credit":
          url = Endpoints.CREDIT("tv", page ?? 0);
          break;
        default:
          throw new Error("Search query is required for search.");
      }
    } else {
      throw new Error("Search query is required for search.");
    }
    // url =
    //   mediaType === "movie"
    //     ? categoryType === "popular"
    //       ? Endpoints.MOVIE_POPULAR(page)
    //       : categoryType == "top_rated"
    //       ? Endpoints.MOVIE_TOP_RATED(page)
    //       : Endpoints.MOVIE_VIDEOS(page ?? 0)
    //     : categoryType === "popular"
    //     ? Endpoints.TV_POPULAR(page)
    //     : Endpoints.TV_TOP_RATED(page);
  }
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${categoryType} movies`);
  }
  return response.json();
};
