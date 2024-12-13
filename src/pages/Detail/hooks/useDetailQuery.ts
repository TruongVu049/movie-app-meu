import { useQuery } from "@tanstack/react-query";
import {
  fetchCredit,
  fetchMovie,
  fetchSimilar,
} from "@/services/detail/detailServices";
import { MediaType } from "@/types";

export const useMovieQuery = ({
  mediaType,
  id,
}: {
  mediaType: MediaType;
  id: number;
}) => {
  return useQuery({
    queryKey: [mediaType, id],
    queryFn: () => fetchMovie(mediaType, id),
    staleTime: 0,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
  });
};

export const useCreditQuery = ({
  mediaType,
  id,
}: {
  mediaType: MediaType;
  id: number;
}) => {
  return useQuery({
    queryKey: [mediaType, id, "credit"],
    queryFn: () => fetchCredit(mediaType, id),
    staleTime: 0,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
  });
};

export const useSimilarQuery = ({
  mediaType,
  id,
}: {
  mediaType: MediaType;
  id: number;
}) => {
  return useQuery({
    queryKey: [mediaType, id, "similar"],
    queryFn: () => fetchSimilar(mediaType, id),
    staleTime: 0,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
  });
};
