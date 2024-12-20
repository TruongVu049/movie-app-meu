import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Button from "@/components/Button";
import { useRef, useState } from "react";
import TrailerModal from "../TrailerModal";
import config from "@/config";
import "swiper/swiper-bundle.css";
import { BannerProps } from "./lib/types";

const Banner = ({ movieList }: BannerProps) => {
  const [trailer, setTrailer] = useState({
    status: false,
    movieId: 0,
  });
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef<any>(null);

  function handleCloseTrailer() {
    setTrailer({
      movieId: 0,
      status: false,
    });
    swiperRef.current.swiper.autoplay.start();
  }

  function handleOpenTrailer(movieId: number) {
    setTrailer({
      movieId: movieId,
      status: true,
    });
    swiperRef.current.swiper.autoplay.stop();
  }

  return (
    <>
      <link
        rel="preload"
        as="image"
        href={config.backDropPath + movieList[0].backdrop_path}
      />
      <Swiper
        ref={swiperRef}
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          waitForTransition: true,
        }}
        onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)} // Cập nhật active slide
      >
        {movieList.map((movie, index) => (
          <SwiperSlide key={movie.id}>
            <div
              className='relative h-80 md:h-[36rem] lg:h-[52rem] px-4 md:px-12 py-12 md:py-32
            flex justify-center bg-center bg-no-repeat bg-cover
            before:content-[""] before:absolute before:top-0 before:bottom-0 before:left-0
            before:right-0 before:bg-black/60
            '
              style={{
                backgroundImage: `url("${
                  config.backDropPath + movie.backdrop_path
                }")`,
              }}
            >
              <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black to-transparent"></div>
              <div className="max-w-screen-2xl w-full relative flex items-center justify-between ">
                <div className="lg:w-3/4 w-full px-4 text-white">
                  <h2
                    className={`lg:text-8xl sm:text-6xl text-4xl font-medium  ${
                      activeSlide === index
                        ? "animate-fadeDown opacity-0 invisible"
                        : ""
                    } `}
                  >
                    {movie.title}
                  </h2>
                  <p
                    className={`my-12 sm:text-[20px] text-[12px] font-medium ${
                      activeSlide === index
                        ? " animate-fadeDownDelay1 opacity-0 invisible"
                        : ""
                    }`}
                  >
                    {movie.overview}
                  </p>
                  <div
                    className={`mr-4 flex items-center ${
                      activeSlide === index
                        ? "animate-fadeDownDelay2 opacity-0 invisible"
                        : ""
                    } `}
                  >
                    <Button
                      variant="primary"
                      className="mr-2"
                      tagName="a"
                      href={`/movie/${movie.id}`}
                    >
                      Watch now
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={() => handleOpenTrailer(movie.id)}
                    >
                      Watch trailer
                    </Button>
                  </div>
                </div>
                <div className="hidden lg:block w-1/4 px-4 ">
                  <img
                    className={`w-96 rounded-3xl ${
                      activeSlide === index ? "animate-scaleUp" : ""
                    } `}
                    src={config.backDropPath + movie.poster_path}
                    loading="lazy"
                    alt={movie.title}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {trailer.status && (
        <TrailerModal trailer={trailer} onChangeTrailer={handleCloseTrailer} />
      )}
    </>
  );
};

export default Banner;
