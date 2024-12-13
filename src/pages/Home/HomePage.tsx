import React from "react";
import { useMoviesQuery } from "./hooks/useMoviesQuery";
import Banner from "./components/Banner";
import MovieCategoryItem from "./components/MovieCategoryItem";
import MoviesSection from "./components/MoviesSection";

const HomePage: React.FC = () => {
  const { data: trendingMovieList, isSuccess: isSuccessTrendingMovie } =
    useMoviesQuery({
      mediaType: "movie",
      categoryType: "popular",
      staleTime: 10000,
    });

  const { data: topRatedMovieList, isSuccess: isSuccessTopRatedMovie } =
    useMoviesQuery({
      mediaType: "movie",
      categoryType: "top_rated",
      staleTime: 10000,
    });
  const { data: trendingTvList, isSuccess: isSuccessTrendingTv } =
    useMoviesQuery({
      mediaType: "tv",
      categoryType: "popular",
      staleTime: 10000,
    });
  const { data: topRatedTvList, isSuccess: isSuccessTopRatedTv } =
    useMoviesQuery({
      mediaType: "tv",
      categoryType: "top_rated",
      staleTime: 10000,
    });

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
                <MovieCategoryItem
                  isSuccess={isSuccessTrendingMovie}
                  movieList={trendingMovieList?.results ?? []}
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
                <MovieCategoryItem
                  isSuccess={isSuccessTopRatedMovie}
                  movieList={topRatedMovieList?.results ?? []}
                />
              </div>
            </MoviesSection>
          </div>
          <div className="mb-8 md:mb-16">
            <MoviesSection title="Trending TV" href="/tv?type=popular">
              <div className="mt-8">
                <MovieCategoryItem
                  isSuccess={isSuccessTrendingTv}
                  movieList={trendingTvList?.results ?? []}
                />
              </div>
            </MoviesSection>
          </div>
          <div className="">
            <MoviesSection title="Top Rated TV" href="/tv?type=top_rated">
              <div className="mt-8">
                <MovieCategoryItem
                  isSuccess={isSuccessTopRatedTv}
                  movieList={topRatedTvList?.results ?? []}
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
