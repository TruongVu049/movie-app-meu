import { Movie, TV } from "@/types";

export type MovieCategoryItemProps = {
  isSuccess: boolean;
  movieList: Movie[] | TV[];
};
