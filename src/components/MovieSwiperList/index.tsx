import {
  MovieCard,
  MovieCardImage,
  MovieCardTitle,
} from "@/components/MovieCard";
import Slider from "../Slider";
import { MovieSwiperListProps } from "./lib/types";
import { SwiperSlide } from "swiper/react";
import Button from "@/components/Button";
import MovieSkeletonList from "../SkeletonList";
import { isMovie } from "@/utils";

const MovieSwiperList = ({
  movies,
  isSuccess,
  error,
}: MovieSwiperListProps) => {
  if (error) console.log(error);

  return (
    <div className="mt-8">
      {!isSuccess ? (
        <MovieSkeletonList className="lg:grid-cols-6 md:grid-cols-4 grid-cols-2" />
      ) : (
        <Slider
          breakpoints={{
            0: {
              spaceBetween: 20,
              slidesPerView: 2,
            },
            768: {
              spaceBetween: 20,
              slidesPerView: 4,
            },
            1024: {
              spaceBetween: 20,
              slidesPerView: 6,
            },
          }}
          className="breakpoint"
        >
          {movies.map((movie) => {
            return !movie.backdrop_path ? null : (
              <SwiperSlide key={movie.id}>
                <MovieCard
                  to={`/${isMovie(movie) ? "movie" : "tv"}/${movie.id}`}
                >
                  <MovieCardImage url={movie.backdrop_path}>
                    <Button
                      variant="primary"
                      size="lg"
                      className="py-4 text-white group-hover/post:block transition ease-in-out z-[9] duration-300 hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    >
                      <svg
                        className="w-6 h-6 text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Button>
                  </MovieCardImage>
                  <MovieCardTitle
                    title={isMovie(movie) ? movie.title : movie.name}
                  />
                </MovieCard>
              </SwiperSlide>
            );
          })}
        </Slider>
      )}
    </div>
  );
};
export default MovieSwiperList;
