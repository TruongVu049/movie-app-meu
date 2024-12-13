import { Movie, MovieDetail, TV, TVDetail } from "@/types";

export const isMovieDetail = (
  movie: MovieDetail | TVDetail
): movie is MovieDetail => {
  return "original_title" in movie;
};

export const isMovie = (movie: Movie | TV): movie is Movie => {
  return "original_title" in movie;
};
