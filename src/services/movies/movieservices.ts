import { CategoryType, MediaType } from "@/types";
import config from "@/config";

export const fetchMedia = async ({
  mediaType,
  categoryType,
  query,
  page,
}: {
  mediaType: MediaType;
  categoryType: CategoryType;
  query?: string;
  page?: number;
}) => {
  const res = await fetch(
    `${config.baseURL}/${mediaType}/${categoryType}?api_key=${config.apiKey}${
      page ? "&page=" + page : ""
    }${query ? "&query=" + query : ""}`
  );

  return res.json();
};
