import React, { Suspense } from "react";
import { useParams } from "react-router-dom";
import {
  useCreditQuery,
  useMovieQuery,
  useSimilarQuery,
  useVideosQuery,
} from "@/hooks/movie";
import { Credit, MediaType, MovieDetail, TVDetail } from "@/types";
import Banner from "./components/Banner";
import SimilarList from "./components/SimilarList";
import useScrollToTop from "@/hooks/useScrollToTop";

const VideosSection = React.lazy(() => import("./components/VideosSection"));

const MoviePage: React.FC = () => {
  const params = useParams();
  const { mediaType, id } = params;
  const { data: movie, isSuccess: isSuccessMovie } = useMovieQuery({
    mediaType: mediaType as MediaType,
    id: Number(id),
  });

  const { data: credit, isSuccess: isSuccessCredit } = useCreditQuery({
    mediaType: mediaType as MediaType,
    id: Number(id),
  });

  const { data: videos, isSuccess: isSuccessVideos } = useVideosQuery({
    mediaType: mediaType as MediaType,
    id: Number(id),
  });

  const {
    data: movieList,
    isSuccess: isSuccessMovieList,
    error: errorMovieList,
  } = useSimilarQuery({
    mediaType: mediaType as MediaType,
    id: Number(id),
  });

  useScrollToTop();

  return (
    <div>
      <Banner
        isSuccessMovie={isSuccessMovie}
        isSuccessCredit={isSuccessCredit}
        movie={movie as MovieDetail | TVDetail}
        credit={credit as Credit}
      />
      <div className="bg-black py-2 lg:px-16 md:px-8 px-4">
        <Suspense
          fallback={
            <div className="mb-16 animate-pulse transition-all duration-300">
              <div className="bg-gray-900 h-6 w-24 mb-4 rounded-3xl"></div>
              <div className="bg-gray-900 h-[800px] w-full mb-4 rounded-3xl"></div>
            </div>
          }
        >
          <VideosSection videoList={isSuccessVideos ? videos.results : []} />
        </Suspense>

        <SimilarList
          movies={isSuccessMovieList ? (movieList as any).results : []}
          isSuccess={isSuccessMovieList}
          error={errorMovieList?.message}
        />
      </div>
    </div>
  );
};

export default MoviePage;
