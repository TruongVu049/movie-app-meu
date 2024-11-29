import React, { Suspense, useDeferredValue } from "react";
import Button from "../components/Button";
import Grid from "../components/grid";
import { MovieAPIResponse } from "../types"; // Ensure this is defined in your types
import MovieCard from "../components/movie/MovieCard";
import Search from "../components/Search";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

const MoviesPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";

  const { data, error, fetchNextPage, hasNextPage } = useInfiniteQuery<
    MovieAPIResponse,
    Error
  >({
    queryKey: ["movies", keyword], // Adding keyword to queryKey for cache key and refetching
    queryFn: async ({ pageParam = 1 }) => {
      // Constructing the URL based on keyword
      const url = keyword
        ? `https://api.themoviedb.org/3/search/movie?page=${pageParam}&api_key=4f85134e0e3de33d9af45eb9596b5735&query=${keyword}`
        : `https://api.themoviedb.org/3/movie/popular?page=${pageParam}&api_key=4f85134e0e3de33d9af45eb9596b5735`;

      const response = await fetch(url);
      return await response.json();
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      console.log("page", lastPage);
      return lastPage.page + 1;
    },
  });

  const deferredData = useDeferredValue(data);

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
            <Search />
          </div>
          <div className="mt-16 max-w-screen-2xl">
            <Grid className="grid-cols-2 sm:grid-cols-4 lg:grid-cols-6">
              <Suspense fallback={<h2>Loading...</h2>}>
                {deferredData?.pages.map((item) =>
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
                            <MovieCard movie={movie} />
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

export default MoviesPage;
