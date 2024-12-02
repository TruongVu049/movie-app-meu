import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../services";
import { ApiResponse, CategoryType, MediaType, Movie, TV } from "../types";
export const useMovies = <T extends Movie | TV>(
  tags: string[],
  mediaType: MediaType,
  categoryType: CategoryType,
  staleTime?: number
) => {
  return useQuery<ApiResponse<T>, Error>({
    queryKey: [tags],
    queryFn: () =>
      fetchData({
        mediaType: mediaType,
        categoryType: categoryType,
      }),
    ...(staleTime && { staleTime }),
  });
};
