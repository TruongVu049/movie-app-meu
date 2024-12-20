import React, { Suspense } from "react";
import { useParams } from "react-router-dom";
import useCreditQuery from "./hooks/useCreditQuery";
import useMovieQuery from "./hooks/useMovieQuery";
import useSimilarQuery from "./hooks/useSimilarQuery";
import { MediaType } from "@/types";
import Banner from "./components/Banner";
import { useVideosQuery } from "@/hooks/movie/useVideoQuery";
import { CardSkeleton } from "@/components/MovieCard";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";

const VideosSection = React.lazy(() => import("./components/VideosSection"));
const SimilarList = React.lazy(() => import("./components/SimilarList"));

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

  const { data: movieList, isSuccess: isSuccessMovieList } = useSimilarQuery({
    mediaType: mediaType as MediaType,
    id: Number(id),
  });

  return (
    <div>
      <ScrollToTop />
      <Banner
        isSuccessMovie={isSuccessMovie}
        isSuccessCredit={isSuccessCredit}
        movie={movie}
        credit={credit}
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

        <Suspense
          fallback={
            <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-4">
              {new Array(6).fill(6).map((item, index) => (
                <CardSkeleton key={item + index} />
              ))}
            </div>
          }
        >
          <SimilarList
            movieList={isSuccessMovieList ? movieList.results : []}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default MoviePage;
