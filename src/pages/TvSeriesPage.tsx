import React, { Suspense } from "react";
import Button from "../components/Button";
import Grid from "../components/grid";
import MovieCard, { CardSkeleton } from "../components/movie/MovieCard";
import Search from "../components/Search";
import { useInfiniteMovies } from "../hooks/useInfiniteMovies";
import { useSearchParams } from "react-router-dom";

const TvSeriesPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteMovies({
    tags: [searchParams.get("keyword") ?? ""],
    mediaType: "tv",
    categoryType: searchParams.has("keyword") ? "search" : "popular",
    ...(searchParams.has("keyword") && {
      query: searchParams.get("keyword"),
    }),
  });

  return (
    <div>
      <div className="relative h-48 bg-gradient-to-t from-black to-transparent">
        <h2 className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-[5] text-4xl font-bold text-white">
          TV Series
        </h2>
      </div>
      <div className="bg-black lg:p-16 md:px-8 py-8 px-4">
        <div className="max-w-screen-2xl mx-auto">
          <div className="">
            <Search
              searchParams={searchParams}
              setSearchParams={setSearchParams}
            />
          </div>
          <div className="mt-16 max-w-screen-2xl">
            <Grid
              className={`grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 ${
                isLoading ? "gap-4" : ""
              }`}
            >
              <Suspense>
                {isLoading
                  ? new Array(12)
                      .fill(6)
                      .map((item, index) => <CardSkeleton key={item + index} />)
                  : data?.pages.map((item) =>
                      item.results
                        ? item.results.map((movie) => {
                            if (!movie.backdrop_path) {
                              return null;
                            }
                            return (
                              <Grid.Item
                                key={movie.id}
                                className="animate-fadeIn px-2 mb-8"
                              >
                                <MovieCard data={movie} />
                              </Grid.Item>
                            );
                          })
                        : null
                    )}
              </Suspense>
            </Grid>
            <div className="flex justify-center mt-8">
              <Button
                className={hasNextPage ? "" : "hidden"}
                variant="secondary"
                tagName="button"
                size="sm"
                onClick={() => {
                  fetchNextPage();
                }}
              >
                Load More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TvSeriesPage;
