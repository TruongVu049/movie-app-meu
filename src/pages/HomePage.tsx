import React, { Suspense } from "react";
import Banner from "../components/Banner";
import MovieCategory from "../components/movie/MovieCategory";
import MovieSwiper from "../components/movie/MovieSwiper";
import { useMovies } from "../hooks/useMovies";

const HomePage: React.FC = () => {
  const trendinhMovies = useMovies("movie", "popular");
  return (
    <>
      <Banner movieList={trendinhMovies.data?.results.slice(1, 5) ?? []} />
      <div className="px-4 md:px-8 py-8 md:py-16 bg-black">
        <div className="max-w-screen-2xl mx-auto">
          <MovieCategory title="Trending Movies" href="/movie?type=popular" />
          <div className="mt-8">
            <Suspense>
              <MovieSwiper collectionType="movie" categoryType="popular" />
            </Suspense>
          </div>
          <div className="mt-8 md:mt-16">
            <MovieCategory
              title="Top Rated Movies"
              href="/movie?type=top_rated"
            />
            <div className="mt-8">
              <MovieSwiper collectionType="movie" categoryType="top_rated" />
            </div>
          </div>
          <div className="mt-8 md:mt-16">
            <MovieCategory title="Trending TV" href="/tv?type=popular" />
            <div className="mt-8">
              <MovieSwiper collectionType="tv" categoryType="popular" />
            </div>
          </div>
          <div className="mt-8 md:mt-16">
            <MovieCategory title="Top Rated TV" href="/tv?type=top_rated" />
            <div className="mt-8">
              <MovieSwiper collectionType="tv" categoryType="top_rated" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
