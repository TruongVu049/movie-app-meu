import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import MovieCard from "./MovieCard";
import { Movie, TV } from "../../types";

import "swiper/swiper-bundle.css";

export default function MovieSwiper({ data }: { data: Movie[] | TV[] }) {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      loop={true} // Kích hoạt chế độ lặp
      autoplay={{ delay: 5000, disableOnInteraction: false }}
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
      {data.length
        ? data.map((movie) => {
            if (!movie.backdrop_path) return null;
            return (
              <SwiperSlide key={movie.id}>
                <MovieCard data={movie} />
              </SwiperSlide>
            );
          })
        : null}
    </Swiper>
  );
}
