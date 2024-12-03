import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../services";
import {
  ApiResponse,
  CategoryType,
  Credit,
  MediaType,
  Movie,
  MovieDetail,
  TV,
  TVDetail,
  Video,
} from "../types";
export const useMovies = <
  T extends Movie | TV | Video | MovieDetail | TVDetail | Credit
>({
  tags,
  mediaType,
  categoryType,
  staleTime,
  movieId,
}: {
  tags: string[];
  mediaType: MediaType;
  categoryType: CategoryType;
  staleTime?: number;
  movieId?: number;
}) => {
  return useQuery<ApiResponse<T>, Error>({
    queryKey: [tags],
    queryFn: () =>
      fetchData({
        mediaType: mediaType,
        categoryType: categoryType,
        ...(movieId && { page: movieId }),
      }),
    ...(staleTime && { staleTime }),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
};
