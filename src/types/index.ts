export type Media = {
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

export interface Movie extends Media {
  original_title: string;
  release_date: string;
  title: string;
  video: boolean;
}

export interface TV extends Media {
  origin_country: string[];
  original_name: string;
  first_air_date: string;
  name: string;
}

export interface ApiResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export type MediaType = "movie" | "tv";
export type CategoryType = "popular" | "top_rated" | "search";
