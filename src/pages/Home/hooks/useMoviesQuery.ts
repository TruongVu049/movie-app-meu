import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "@/services/movie";
import { CategoryType, MediaType } from "@/types";

export const useMoviesQuery = ({
  mediaType,
  categoryType,
  staleTime,
  page,
}: {
  mediaType: MediaType;
  categoryType: CategoryType;
  staleTime?: number;
  page?: number;
}) => {
  return useQuery({
    queryKey: [mediaType, categoryType],
    queryFn: () =>
      fetchMovies({
        mediaType: mediaType,
        categoryType: categoryType,
        ...(page && { page: page }),
      }),
    staleTime: staleTime ?? 10000,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
  });
};
