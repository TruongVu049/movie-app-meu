import { CategoryType, CollectionType } from "../../types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import MovieCard from "./MovieCard";
import { useMovies } from "../../hooks/useMovies";

export default function MovieSwiper({
  collectionType,
  categoryType,
}: {
  collectionType: CollectionType;
  categoryType: CategoryType;
}) {
  const res = useMovies(collectionType, categoryType);

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
      {res.data?.results
        ? res.data?.results.map((movie) => {
            if (!movie.backdrop_path) return null;
            return (
              <SwiperSlide key={movie.id}>
                <MovieCard movie={movie} />
              </SwiperSlide>
            );
          })
        : null}
    </Swiper>
  );
}
