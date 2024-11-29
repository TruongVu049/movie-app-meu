import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Button from "./Button";
import { MovieType, TvType } from "../types";
import { getImageUrl } from "../Helper/imageHelper";

export default function Banner({
  movieList,
}: {
  movieList: MovieType[] | TvType[];
}) {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      slidesPerView={1}
      loop={true} // Kích hoạt chế độ lặp
      autoplay={{ delay: 5000, disableOnInteraction: false }}
    >
      {movieList.map((movie) => (
        <SwiperSlide key={movie.id}>
          <div
            className='relative h-80 md:h-[36rem] lg:h-[52rem] px-4 md:px-12 py-12 md:py-32 
            flex justify-center bg-center bg-no-repeat bg-cover 
            before:content-[""] before:absolute before:top-0 before:bottom-0 before:left-0 
            before:right-0 before:bg-black/60 
            '
            style={{
              backgroundImage: `url("${getImageUrl(
                movie.backdrop_path ?? "",
                "original"
              )}")`,
            }}
          >
            <div className="max-w-screen-2xl w-full relative flex items-center justify-between ">
              <div className="lg:w-3/4 w-full px-4 text-white">
                <h2 className="lg:text-8xl sm:text-6xl text-4xl font-medium animate-fadeDown">
                  {movie.title}
                </h2>
                <p className="my-12 sm:text-[20px] text-[12px] font-medium animate-fadeDownDelay1">
                  {movie.overview}
                </p>
                <div className="mr-4 flex items-center animate-fadeDownDelay2">
                  <Button
                    variant="primary"
                    className="mr-2"
                    tagName="a"
                    href={`/movie/${movie.id}`}
                  >
                    Watch now
                  </Button>
                  <Button variant="secondary">Watch trailer</Button>
                </div>
              </div>
              <div className="hidden lg:block w-1/4 px-4">
                <img
                  className="w-96 rounded-3xl animate-scaleUp"
                  src={getImageUrl(movie.poster_path, "small")}
                  alt={movie.title}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
