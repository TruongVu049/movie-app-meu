import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Movie, MovieDetail, TV, TVDetail } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const defaultQueryOptions = {
  refetchOnWindowFocus: false,
  refetchOnReconnect: true,
  staleTime: 0,
};

export const isMovieDetail = (
  movie: MovieDetail | TVDetail
): movie is MovieDetail => {
  return "original_title" in movie;
};

export const isMovie = (movie: Movie | TV): movie is Movie => {
  return "original_title" in movie;
};
