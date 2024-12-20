import { fetchCredit } from "@/services/movie";
import { MediaType } from "@/types";
import { useQuery } from "@tanstack/react-query";

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

export default useCreditQuery;
