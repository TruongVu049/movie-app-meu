import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useInfiniteMovies } from "./hooks/useInfiniteMovies";
import { CategoryType, MediaType, Movie, TV } from "@/types";
import Search from "./components/Search";
import { CardSkeleton } from "@/components/movie/MovieCard";
import MediaCard from "@/components/movie/MovieCard";
import Button from "@/components/Button";

const MediaPage: React.FC = () => {
  const params = useParams();
  const { mediaType } = params;
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    data: mediaList,
    isSuccess: isSuccessMediaList,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteMovies({
    mediaType: mediaType as MediaType,
    categoryType: (searchParams.get("type") as CategoryType) ?? "popular",
    ...(searchParams.has("keyword") && { query: searchParams.get("keyword") }),
  });

  return (
    <div>
      <div className="relative h-48 bg-gradient-to-t from-black to-transparent">
        <h2 className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-[5] text-4xl font-bold text-white">
          {mediaType === "movie" ? "Movies" : "Tv Series"}
        </h2>
      </div>
      <div className="bg-black lg:p-16 md:px-8 py-8 px-4">
        <div className="max-w-screen-2xl mx-auto">
          <div className="">
            <Search
              key={location.pathname}
              searchParams={searchParams}
              setSearchParams={setSearchParams}
            />
          </div>
          <div className="mt-16 max-w-screen-2xl">
            <ul
              className={`grid grid-flow-row grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 ${
                mediaList || isFetchingNextPage ? "gap-1" : ""
              }`}
            >
              {!isSuccessMediaList
                ? new Array(12)
                    .fill(6)
                    .map((item, index) => <CardSkeleton key={item + index} />)
                : mediaList?.pages.map((item) =>
                    item.results.map((movie: Movie | TV) => {
                      if (!movie.backdrop_path) return null;
                      return (
                        <li
                          key={movie.id}
                          className={`transition-opacity animate-fadeIn px-2 mb-8`}
                        >
                          <MediaCard data={movie} />
                        </li>
                      );
                    })
                  )}
              {isFetchingNextPage &&
                Array.from({ length: 5 }).map((_, index) => (
                  <CardSkeleton key={`fetching-${index}`} />
                ))}
            </ul>
            <div className="flex justify-center mt-8">
              <Button
                className={
                  mediaList?.pages[0].total_pages !== mediaList?.pages.length
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

export default MediaPage;
