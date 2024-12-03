import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import { fetchData } from "../services";
import { ApiResponse, CategoryType, MediaType, Movie, TV } from "../types";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
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
  const location = useLocation();
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.resetQueries({ queryKey: [tags, query], exact: true });
  }, [location.pathname, queryClient]);
  return useInfiniteQuery<ApiResponse<T>, Error>({
    queryKey: [tags, query],
    queryFn: ({ pageParam }) => {
      return fetchData({
        mediaType: mediaType,
        categoryType: categoryType,
        page: pageParam as number,
        ...(query && { query: query }),
      });
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage.page + 1;
    },
    staleTime: 0,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
};
