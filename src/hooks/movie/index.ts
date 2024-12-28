import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from "@tanstack/react-query";
import { CategoryType, FetchVideosResponse, MediaType } from "@/types";
import {
  fetchCredit,
  fetchMovie,
  fetchMovies,
  fetchSimilar,
  fetchVideos,
} from "@/services/movie";
import { useEffect } from "react";
import { defaultQueryOptions } from "@/utils";

export const useVideosQuery = ({
  id,
  mediaType,
  ...options
}: {
  id: number;
  mediaType: MediaType;
} & Omit<UseQueryOptions<FetchVideosResponse>, "queryKey" | "queryFn">) => {
  return useQuery({
    queryKey: [mediaType, id, "video"],
    queryFn: () => fetchVideos(mediaType, id),
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    ...options,
  });
};

export const useCreditQuery = ({
  id,
  mediaType,
  ...options
}: {
  id: number;
  mediaType: MediaType;
} & Omit<UseQueryOptions, "queryKey" | "queryFn">) => {
  return useQuery({
    queryKey: [mediaType, id, "credit"],
    queryFn: () => fetchCredit(mediaType, id),
    ...defaultQueryOptions,
    ...options,
  });
};

export const useMovieQuery = ({
  id,
  mediaType,
  ...options
}: {
  id: number;
  mediaType: MediaType;
} & Omit<UseQueryOptions, "queryKey" | "queryFn">) => {
  return useQuery({
    queryKey: [mediaType, id],
    queryFn: () => fetchMovie(mediaType, id),
    ...defaultQueryOptions,
    ...options,
  });
};

export const useSimilarQuery = ({
  id,
  mediaType,
  ...options
}: {
  id: number;
  mediaType: MediaType;
} & Omit<UseQueryOptions, "queryKey" | "queryFn">) => {
  return useQuery({
    queryKey: [mediaType, id, "similar"],
    queryFn: () => fetchSimilar(mediaType, id),
    ...defaultQueryOptions,
    ...options,
  });
};

export const useMoviesQuery = ({
  mediaType,
  categoryType,
  staleTime = 10000,
  page,
  ...options
}: {
  mediaType: MediaType;
  categoryType: CategoryType;
  staleTime?: number;
  page?: number;
} & Omit<UseQueryOptions<any>, "queryKey" | "queryFn">) => {
  return useQuery({
    queryKey: [mediaType, categoryType],
    queryFn: () =>
      fetchMovies({
        mediaType: mediaType,
        categoryType: categoryType,
        ...(page && { page: page }),
      }),
    staleTime: staleTime,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    ...options,
  });
};

export const useInfiniteMovies = ({
  mediaType,
  categoryType = "popular",
  query,
  pathname,
  ...options
}: {
  mediaType: MediaType;
  categoryType: CategoryType;
  query?: string | null;
  pathname?: string;
} & Omit<
  UseInfiniteQueryOptions<any>,
  "queryKey" | "queryFn" | "getNextPageParam" | "initialPageParam"
>) => {
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
    ...defaultQueryOptions,
    ...options,
  });
};
