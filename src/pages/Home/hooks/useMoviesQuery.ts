import { useQuery } from "@tanstack/react-query";
import { fetchMedia } from "@/services/movies/movieservices";
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
      fetchMedia({
        mediaType: mediaType,
        categoryType: categoryType,
        ...(page && { page: page }),
      }),
    ...(staleTime && { staleTime }),
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
  });
};
