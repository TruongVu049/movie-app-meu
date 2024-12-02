import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchData } from "../services";
import { ApiResponse, CategoryType, MediaType, Movie, TV } from "../types";
export const useInfiniteMovies = <T extends Movie | TV>({
  tags,
  mediaType,
  categoryType,
  query,
}: {
  tags: string[];
  mediaType: MediaType;
  categoryType: CategoryType;
  query?: string | null;
}) => {
  return useInfiniteQuery<ApiResponse<T>, Error>({
    queryKey: [tags, query],
    queryFn: ({ pageParam = 1 }) =>
      fetchData({
        mediaType: mediaType,
        categoryType: categoryType,
        page: pageParam as number,
        ...(query && { query: query }),
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage.page + 1;
    },
    staleTime: 0,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
};
