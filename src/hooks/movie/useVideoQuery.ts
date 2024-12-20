import { useQuery } from "@tanstack/react-query";
import { MediaType } from "@/types";
import { fetchVideos } from "@/services/movie";

export const useVideosQuery = ({
  mediaType,
  staleTime,
  id,
}: {
  mediaType: MediaType;
  staleTime?: number;
  id: number;
}) => {
  return useQuery({
    queryKey: [mediaType, id, "video"],
    queryFn: () => fetchVideos(mediaType, id),
    ...(staleTime && { staleTime }),
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
  });
};
