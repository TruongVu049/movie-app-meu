import React from "react";
import { useMoviesQuery } from "@/hooks/movie";
import Banner from "./components/Banner";
import MovieSwiperList from "@/components/MovieSwiperList";
import MoviesSection from "./components/MoviesSection";
import useScrollToTop from "@/hooks/useScrollToTop";

const HomePage: React.FC = () => {
  const {
    data: trendingMovieList,
    isSuccess: isSuccessTrendingMovie,
    error: errorTrendingMovie,
  } = useMoviesQuery({
    mediaType: "movie",
    categoryType: "popular",
  });

  const {
    data: topRatedMovieList,
    isSuccess: isSuccessTopRatedMovie,
    error: errorTopRatedMovie,
  } = useMoviesQuery({
    mediaType: "movie",
    categoryType: "top_rated",
  });
  const {
    data: trendingTvList,
    isSuccess: isSuccessTrendingTv,
    error: errorTrendingTv,
  } = useMoviesQuery({
    mediaType: "tv",
    categoryType: "popular",
  });
  const {
    data: topRatedTvList,
    isSuccess: isSuccessTopRatedTv,
    error: errorTopRatedTv,
  } = useMoviesQuery({
    mediaType: "tv",
    categoryType: "top_rated",
  });

  useScrollToTop();

  return (
    <>
      {!isSuccessTrendingMovie ? (
        <div className="relative h-80 md:h-[36rem] lg:h-[52rem]">
          <div className="animate-pulse">
            <div className=" bg-gray-950 h-80 md:h-[36rem] lg:h-[52rem] px-4 md:px-12 py-12 md:py-32"></div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black to-transparent"></div>
        </div>
      ) : (
        <Banner movieList={trendingMovieList.results.slice(1, 5) ?? []} />
      )}
      <div className="px-4 md:px-8 py-8 md:py-16 bg-black">
        <div className="max-w-screen-2xl mx-auto last:mb-0">
          <div className="mb-8 md:mb-16">
            <MoviesSection title="Trending Movies" href="/movie?type=popular">
              <div className="mt-8">
                <MovieSwiperList
                  movies={trendingMovieList?.results ?? []}
                  isSuccess={isSuccessTrendingMovie}
                  error={errorTrendingMovie?.message}
                />
              </div>
            </MoviesSection>
          </div>
          <div className="mb-8 md:mb-16">
            <MoviesSection
              title="Top Rated Movies"
              href="/movie?type=top_rated"
            >
              <div className="mt-8">
                <MovieSwiperList
                  movies={topRatedMovieList?.results ?? []}
                  isSuccess={isSuccessTopRatedMovie}
                  error={errorTopRatedMovie?.message}
                />
              </div>
            </MoviesSection>
          </div>
          <div className="mb-8 md:mb-16">
            <MoviesSection title="Trending TV" href="/tv?type=popular">
              <div className="mt-8">
                <MovieSwiperList
                  movies={trendingTvList?.results ?? []}
                  isSuccess={isSuccessTrendingTv}
                  error={errorTrendingTv?.message}
                />
              </div>
            </MoviesSection>
          </div>
          <div className="">
            <MoviesSection title="Top Rated TV" href="/tv?type=top_rated">
              <div className="mt-8">
                <MovieSwiperList
                  movies={topRatedTvList?.results ?? []}
                  isSuccess={isSuccessTopRatedTv}
                  error={errorTopRatedTv?.message}
                />
              </div>
            </MoviesSection>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
