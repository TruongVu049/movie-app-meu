import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "../services/movieService";
import { MovieAPIResponse, CategoryType, CollectionType } from "../types";

export const useMovies = (
  collectionType: CollectionType,
  categoryType: CategoryType
) => {
  return useQuery<MovieAPIResponse, Error>({
    queryKey: [collectionType, categoryType],
    queryFn: () => fetchMovies(collectionType, categoryType), // Matches MovieAPIResponse
  });
};
