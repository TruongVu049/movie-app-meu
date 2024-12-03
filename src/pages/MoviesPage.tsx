import React, { Suspense } from "react";
import Button from "../components/Button";
import Grid from "../components/grid";
import MovieCard, { CardSkeleton } from "../components/movie/MovieCard";
import Search from "../components/Search";
import { useInfiniteMovies } from "../hooks/useInfiniteMovies";
import { useSearchParams } from "react-router-dom";
import { TAGS } from "../constants";
const MoviesPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data, isLoading, fetchNextPage, isFetchingNextPage } =
    useInfiniteMovies({
      tags: [TAGS.movie, searchParams.get("keyword") ?? ""],
      mediaType: "movie",
      categoryType: searchParams.has("keyword")
        ? "search"
        : searchParams.has("type")
        ? searchParams.get("type") === "popular"
          ? "popular"
          : "top_rated"
        : "popular",
      ...(searchParams.has("keyword") && {
        query: searchParams.get("keyword"),
      }),
    });

  return (
    <div>
      <div className="relative h-48 bg-gradient-to-t from-black to-transparent">
        <h2 className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-[5] text-4xl font-bold text-white">
          Movies
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
                isLoading || isFetchingNextPage ? "gap-1" : ""
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
                {isFetchingNextPage &&
                  Array.from({ length: 5 }).map((_, index) => (
                    <CardSkeleton key={`fetching-${index}`} />
                  ))}
              </Suspense>
            </Grid>
            <div className="flex justify-center mt-8">
              <Button
                className={
                  data?.pages[0].total_pages !== data?.pages.length
                    ? "flex items-center gap-1"
                    : "hidden"
                }
                variant="secondary"
                tagName="button"
                disable={isFetchingNextPage}
                size="sm"
                onClick={() => {
                  fetchNextPage();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`mr-2 h-4 w-4 text-white animate-spin ${
                    isFetchingNextPage ? "block" : "hidden"
                  }`}
                >
                  <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                </svg>
                Load More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesPage;
