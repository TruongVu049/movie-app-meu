import React, { Suspense } from "react";
import Banner from "../components/Banner";
import MovieCategory from "../components/movie/MovieCategory";
import MovieSwiper from "../components/movie/MovieSwiper";
import { useMovies } from "../hooks/useMovies";
import { Movie, TV } from "../types";
import { TAGS } from "../constants";
import { CardSkeleton } from "../components/movie/MovieCard";

const HomePage: React.FC = () => {
  const trendinhMovies = useMovies<Movie>(
    [TAGS.movie, TAGS.popular],
    "movie",
    "popular"
  );
  const topRatedMovies = useMovies<Movie>(
    [TAGS.movie, TAGS.top_rated],
    "movie",
    "top_rated"
  );
  const trendinhTV = useMovies<TV>([TAGS.tv, TAGS.popular], "tv", "popular");
  const topRatedTV = useMovies<TV>(
    [TAGS.tv, TAGS.top_rated],
    "tv",
    "top_rated"
  );

  return (
    <>
      <Suspense>
        {trendinhMovies.isLoading ? (
          <div className="relative h-80 md:h-[36rem] lg:h-[52rem]">
            <div className="animate-pulse">
              <div className=" bg-gray-950 h-80 md:h-[36rem] lg:h-[52rem] px-4 md:px-12 py-12 md:py-32"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black to-transparent"></div>
          </div>
        ) : (
          <Banner movieList={trendinhMovies.data?.results.slice(1, 4) ?? []} />
        )}
      </Suspense>

      <div className="px-4 md:px-8 py-8 md:py-16 bg-black">
        <div className="max-w-screen-2xl mx-auto">
          <MovieCategory title="Trending Movies" href="/movie?type=popular" />
          <div className="mt-8">
            <Suspense>
              {trendinhMovies.isLoading ? (
                <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-4">
                  {new Array(6).fill(6).map((item, index) => (
                    <CardSkeleton key={item + index} />
                  ))}
                </div>
              ) : (
                trendinhMovies.data && (
                  <MovieSwiper data={trendinhMovies.data?.results} />
                )
              )}
            </Suspense>
          </div>
          <div className="mt-8 md:mt-16">
            <MovieCategory
              title="Top Rated Movies"
              href="/movie?type=top_rated"
            />
            <div className="mt-8">
              <Suspense>
                {topRatedMovies.isLoading ? (
                  <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-4">
                    {new Array(6).fill(6).map((item, index) => (
                      <CardSkeleton key={item + index} />
                    ))}
                  </div>
                ) : (
                  topRatedMovies.data && (
                    <MovieSwiper data={topRatedMovies.data?.results} />
                  )
                )}
              </Suspense>
            </div>
          </div>
          <div className="mt-8 md:mt-16">
            <MovieCategory title="Trending TV" href="/tv?type=popular" />
            <div className="mt-8">
              <Suspense>
                {trendinhTV.isLoading ? (
                  <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-4">
                    {new Array(6).fill(6).map((item, index) => (
                      <CardSkeleton key={item + index} />
                    ))}
                  </div>
                ) : (
                  trendinhTV.data && (
                    <MovieSwiper data={trendinhTV.data?.results} />
                  )
                )}
              </Suspense>
            </div>
          </div>
          <div className="mt-8 md:mt-16">
            <MovieCategory title="Top Rated TV" href="/tv?type=top_rated" />
            <div className="mt-8">
              <Suspense>
                {topRatedTV.isLoading ? (
                  <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-4">
                    {new Array(6).fill(6).map((item, index) => (
                      <CardSkeleton key={item + index} />
                    ))}
                  </div>
                ) : (
                  topRatedTV.data && (
                    <MovieSwiper data={topRatedTV.data?.results} />
                  )
                )}
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
