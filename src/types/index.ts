export type DataType = {
  adult: boolean;
  backdrop_path?: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
};

export type MovieType = DataType & {
  original_title: string;
  release_date: string;
  title: string;
  video: boolean;
};

export type TvType = DataType & {
  origin_country: string[];
  original_name: string;
  first_air_date: string;
  name: string;
};

// Define API response type for the movie data
export interface MovieAPIResponse {
  page: number;
  results: MovieType[] | TvType[];
  total_pages: number;
  total_results: number;
}

export interface TVAPIResponse {
  page: number;
  results: TvType[];
  total_pages: number;
  total_results: number;
}
export type CollectionType = "movie" | "tv";
export type CategoryType = "popular" | "top_rated";
