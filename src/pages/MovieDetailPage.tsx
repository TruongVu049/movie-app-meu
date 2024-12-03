import React, { Suspense } from "react";
import MovieSwiper from "../components/movie/MovieSwiper";
import { useParams } from "react-router-dom";
import { useMovies } from "../hooks/useMovies";
import { Credit, Movie, MovieDetail, Video } from "../types";
import { TAGS } from "../constants";
import { getImageUrl } from "../Helper/imageHelper";
import { CardSkeleton } from "../components/movie/MovieCard";
const MovieDetailPage: React.FC = () => {
  const params = useParams();
  const { id } = params;

  if (!id) return null;

  const movieQuery = useMovies<MovieDetail>({
    tags: [TAGS.movie, TAGS.detail, id],
    mediaType: "movie",
    categoryType: "detail",
    staleTime: 0,
    movieId: Number(id),
  });
  let movie = null;
  if (!movieQuery.isLoading) movie = movieQuery.data as any;

  const castsQuery = useMovies<Credit>({
    tags: [TAGS.movie, TAGS.detail, TAGS.credit, id],
    mediaType: "movie",
    categoryType: "credit",
    staleTime: 0,
    movieId: Number(id),
  });
  let casts = null;
  if (!castsQuery.isLoading) casts = castsQuery.data as any;

  const videosQuery = useMovies<Video>({
    tags: [TAGS.movie, TAGS.detail, TAGS.video, id],
    mediaType: "movie",
    categoryType: "video",
    staleTime: 0,
    movieId: Number(id),
  });

  const similarQuery = useMovies<Movie>({
    tags: [TAGS.movie, TAGS.detail, TAGS.similar, id],
    mediaType: "movie",
    categoryType: "similar",
    staleTime: 0,
    movieId: Number(id),
  });

  return (
    <div>
      <div
        style={{
          ...(movie && {
            backgroundImage: `url("${getImageUrl(
              movie?.backdrop_path ?? "",
              "original"
            )}")`,
          }),
        }}
        className={`
          relative md:pt-32 py-12 px-4 md:pb-20 md:px-16 bg-center bg-cover bg-no-repeat z-0

        before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 before:h-1/2 before:bg-black before:-z-10

        after:content-[''] after:absolute after:top-0 after:left-0 after:right-0 after:h-1/2 after:bg-gradient-to-t after:from-black ${
          movieQuery.isLoading ? "after:to-black/60" : "after:to-transparent"
        }  after:-z-10
          `}
      >
        <div className="flex items-start max-h-fit -mx-4">
          {movieQuery.isLoading ? (
            <div>
              <div className="hidden md:block w-64 lg:w-96 mx-4 bg-gray-900 h-[528px] rounded-3xl"></div>
            </div>
          ) : (
            <div className="hidden md:block w-64 lg:w-96 px-4">
              <img
                src={getImageUrl(movie?.poster_path ?? "")}
                alt="image"
                className="rounded-3xl w-full"
              />
            </div>
          )}

          <div className="px-4 flex-1 flex flex-col text-white">
            {movieQuery.isLoading ? (
              <div className="animate-pulse transition-all duration-300">
                <div className="bg-gray-900 h-16 w-1/2 rounded-3xl"></div>
                <div className="py-4 flex gap-x-2 ">
                  <div className="bg-gray-900 h-9 w-16 rounded-full"></div>
                  <div className="bg-gray-900 h-9 w-16 rounded-full"></div>
                </div>
                <div className="bg-gray-900 h-16 w-full rounded-3xl"></div>
              </div>
            ) : (
              <>
                <h1 className="md:py-4 py-2 lg:text-7xl md:text-5xl text-3xl font-bold">
                  {movie?.original_title}
                </h1>
                <div className="py-4 gap-2 flex flex-wrap">
                  {movie?.genres.map((item: any) => (
                    <span
                      key={item.id}
                      className="text-sm bg-black px-4 border border-white py-1 rounded-full"
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
                <p className="text-base md:py-4 py-2">{movie?.overview}</p>
              </>
            )}

            <div className="md:py-4 py-2">
              {castsQuery.isLoading ? (
                <div className="animate-pulse transition-all duration-300">
                  <div className="bg-gray-900 h-6 w-10 rounded-3xl"></div>
                  <div className="flex flex-wrap gap-3">
                    <div className="w-28 h-[168px] mt-1 bg-gray-900 rounded-xl"></div>
                    <div className="w-28 h-[168px] mt-1 bg-gray-900 rounded-xl"></div>
                    <div className="w-28 h-[168px] mt-1 bg-gray-900 rounded-xl"></div>
                  </div>
                </div>
              ) : (
                <>
                  <h4 className="text-[20px]">Casts</h4>
                  <div className="flex flex-wrap -mx-2">
                    {casts?.cast.slice(0, 5).map((item: any) => (
                      <div
                        key={item.id}
                        className="w-28 px-2  mt-1 flex flex-col"
                      >
                        {item.profile_path && (
                          <img
                            src={getImageUrl(item.profile_path)}
                            alt={item.original_name}
                            className="rounded-xl"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black py-2 lg:px-16 md:px-8 px-4">
        {videosQuery.isLoading ? (
          <div className="mb-16 animate-pulse transition-all duration-300">
            <div className="bg-gray-900 h-6 w-24 mb-4 rounded-3xl"></div>
            <div className="bg-gray-900 h-[800px] w-full mb-4 rounded-3xl"></div>
          </div>
        ) : (
          <Suspense>
            {videosQuery.data?.results.slice(0, 5).map((item) => (
              <div className="mb-16">
                <h4 className="text-white text-base md:text-2xl font-semibold mb-4">
                  {item.name}
                </h4>
                <iframe
                  src={`https://www.youtube.com/embed/${item.key}`}
                  title="video"
                  width="100%"
                  height="800px"
                  loading="lazy"
                  allowFullScreen={false}
                />
              </div>
            ))}
          </Suspense>
        )}

        <div className="">
          <div className="mb-4">
            <h4 className="text-white text-base md:text-2xl font-semibold mb-4">
              Similar
            </h4>
            <Suspense>
              {similarQuery.isLoading ? (
                <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-4">
                  {new Array(6).fill(6).map((item, index) => (
                    <CardSkeleton key={item + index} />
                  ))}
                </div>
              ) : (
                similarQuery.data && (
                  <MovieSwiper data={similarQuery.data?.results} />
                )
              )}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
