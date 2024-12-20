import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import { CategoryType, MediaType } from "@/types";
import { useEffect } from "react";
import { fetchMovies } from "@/services/movie";

export const useInfiniteMovies = ({
  mediaType,
  categoryType = "popular",
  query,
  pathname,
}: {
  mediaType: MediaType;
  categoryType: CategoryType;
  query?: string | null;
  pathname?: string;
}) => {
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.resetQueries({
      queryKey: [mediaType, categoryType, query],
      exact: true,
    });
  }, [pathname, queryClient, query, categoryType, mediaType]);

  return useInfiniteQuery({
    queryKey: [mediaType, categoryType, query],
    queryFn: ({ pageParam }) => {
      return fetchMovies({
        mediaType: query ? "search" : mediaType,
        categoryType: query ? (mediaType as CategoryType) : categoryType,
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
    refetchOnReconnect: true,
  });
};
