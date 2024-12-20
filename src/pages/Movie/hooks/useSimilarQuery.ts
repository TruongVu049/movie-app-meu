import { fetchSimilar } from "@/services/movie";
import { MediaType } from "@/types";
import { useQuery } from "@tanstack/react-query";

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

export default useSimilarQuery;
