import config from "@/config";
import { isMovieDetail } from "@/helpers";
import { BannerProps } from "./lib/types";

const Banner = ({
  isSuccessMovie,
  isSuccessCredit,
  movie,
  credit,
}: BannerProps) => {
  return (
    <div
      style={{
        ...(isSuccessMovie && {
          backgroundImage: `url("${
            config.backDropPath + movie.backdrop_path
          }")`,
        }),
      }}
      className={`
          relative md:pt-32 py-12 px-4 md:pb-20 md:px-16 bg-center bg-cover bg-no-repeat z-0
  
          before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 before:h-1/2 before:bg-black before:-z-10
  
          after:content-[''] after:absolute after:top-0 after:left-0 after:right-0 after:h-1/2 after:bg-gradient-to-t after:from-black ${
            isSuccessMovie ? "after:to-black/60" : "after:to-transparent"
          }  after:-z-10
            `}
    >
      <div className="flex items-start max-h-fit -mx-4">
        {!isSuccessMovie ? (
          <div>
            <div className="hidden md:block w-64 lg:w-96 mx-4 bg-gray-900 h-[528px] rounded-3xl"></div>
          </div>
        ) : (
          <div className="hidden md:block w-64 lg:w-96 px-4">
            <img
              src={config.imgPath + movie.poster_path}
              alt="image"
              className="rounded-3xl w-full"
            />
          </div>
        )}

        <div className="px-4 flex-1 flex flex-col text-white">
          {!isSuccessMovie ? (
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
              {isMovieDetail(movie) && (
                <h1 className="md:py-4 py-2 lg:text-7xl md:text-5xl text-3xl font-bold">
                  {movie.original_title}
                </h1>
              )}

              <div className="py-4 gap-2 flex flex-wrap">
                {movie.genres.map((item) => (
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
            {!isSuccessCredit ? (
              <div className="animate-pulse transition-all duration-300">
                <div className="bg-gray-900 h-6 w-10 rounded-3xl"></div>
                <div className="flex flex-wrap gap-3">
                  <div className="w-24 h-[168px] mt-1 bg-gray-900 rounded-xl"></div>
                  <div className="w-24 h-[168px] mt-1 bg-gray-900 rounded-xl"></div>
                  <div className="w-24 h-[168px] mt-1 bg-gray-900 rounded-xl"></div>
                </div>
              </div>
            ) : (
              <>
                <h4 className="text-[20px]">Casts</h4>
                <div className="flex flex-wrap -mx-2">
                  {credit.cast.slice(0, 5).map((item) =>
                    item.profile_path ? (
                      <div
                        key={item.id}
                        className="w-28 px-2  mt-1 flex flex-col"
                      >
                        <img
                          src={config.imgPath + item.profile_path}
                          alt={item.original_name}
                          className="rounded-xl"
                        />
                      </div>
                    ) : null
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
