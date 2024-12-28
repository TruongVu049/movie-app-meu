import { SwiperRef, SwiperSlide } from "swiper/react";
import Button from "@/components/Button";
import { useRef, useState } from "react";
import TrailerModal from "../TrailerModal";
import config from "@/config";
import "swiper/swiper-bundle.css";
import { BannerProps } from "./lib/types";
import { Link } from "react-router-dom";
import MovieSwiper from "@/components/Slider";

const Banner = ({ movieList }: BannerProps) => {
  const [trailer, setTrailer] = useState({
    isOpen: false,
    movieId: 0,
  });

  const swiperRef = useRef<SwiperRef | null>(null);

  function handleCloseTrailer() {
    setTrailer({
      movieId: 0,
      isOpen: false,
    });
    swiperRef.current?.swiper.autoplay.start();
  }

  function handleOpenTrailer(movieId: number) {
    setTrailer({
      movieId: movieId,
      isOpen: true,
    });
    swiperRef.current?.swiper.autoplay.stop();
  }

  return (
    <>
      <link
        rel="preload"
        as="image"
        href={config.backDropPath + movieList[0].backdrop_path}
      />
      <MovieSwiper
        ref={swiperRef}
        slidesPerView={1}
        autoplay={{
          pauseOnMouseEnter: true,
          waitForTransition: true,
        }}
        // autoplay={
        //   trailer.isOpen
        //     ? false
        //     : {
        //         pauseOnMouseEnter: true,
        //         waitForTransition: true,
        //       }
        // }
      >
        {movieList.map((movie) => (
          <SwiperSlide key={movie.id}>
            {({ isActive }) => (
              <div
                className='relative h-80 md:h-[36rem] lg:h-[52rem] px-4 md:px-12 py-12 md:py-32
                flex justify-center bg-center bg-no-repeat bg-cover
                before:content-[""] before:absolute before:top-0 before:bottom-0 before:left-0
                before:right-0 before:bg-black/60'
                style={{
                  backgroundImage: `url("${
                    config.backDropPath + movie.backdrop_path
                  }")`,
                }}
              >
                <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black to-transparent"></div>
                <div className="max-w-screen-2xl w-full relative flex items-center justify-between">
                  <div className="lg:w-3/4 w-full px-4 text-white">
                    <h2
                      className={`lg:text-8xl sm:text-6xl text-4xl font-medium ${
                        isActive ? "animate-fadeDown opacity-0 invisible" : ""
                      }`}
                    >
                      {movie.title}
                    </h2>
                    <p
                      className={`my-12 sm:text-[20px] text-[12px] font-medium ${
                        isActive
                          ? " animate-fadeDownDelay1 opacity-0 invisible"
                          : ""
                      }`}
                    >
                      {movie.overview}
                    </p>
                    <div
                      className={`mr-4 flex items-center ${
                        isActive
                          ? "animate-fadeDownDelay2 opacity-0 invisible"
                          : ""
                      }`}
                    >
                      <Button
                        variant="primary"
                        className="mr-2 text-white md:px-0 p-0"
                      >
                        <Link
                          to={`/movie/${movie.id}`}
                          className="block py-2 md:px-8 px-4"
                        >
                          Watch now
                        </Link>
                      </Button>
                      <Button
                        variant="secondary"
                        onClick={() => handleOpenTrailer(movie.id)}
                      >
                        Watch trailer
                      </Button>
                    </div>
                  </div>
                  <div className="hidden lg:block w-1/4 px-4">
                    <img
                      className={`w-96 rounded-3xl ${
                        isActive ? "animate-scaleUp" : ""
                      }`}
                      src={config.backDropPath + movie.poster_path}
                      loading="lazy"
                      alt={movie.title}
                    />
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </MovieSwiper>
      {trailer.isOpen && (
        <TrailerModal trailer={trailer} onChangeTrailer={handleCloseTrailer} />
      )}
    </>
  );
};

export default Banner;
