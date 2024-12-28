import { Credit, MovieDetail, TVDetail } from "@/types";

export type BannerProps = {
  isSuccessMovie: boolean;
  isSuccessCredit: boolean;
  movie: MovieDetail | TVDetail;
  credit: Credit | undefined;
};
