import { fetchMovie } from "@/services/movie";
import { MediaType } from "@/types";
import { useQuery } from "@tanstack/react-query";

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

export default useMovieQuery;
