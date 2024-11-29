import React from "react";
import MovieCategory from "../components/movie/MovieCategory";
import MovieSwiper from "../components/movie/MovieSwiper";
const MovieDetailPage: React.FC = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage:
            "url('https://image.tmdb.org/t/p/original//v9acaWVVFdZT5yAU7J2QjwfhXyD.jpg')",
        }}
        className="relative md:pt-32 py-12 px-4 md:pb-20 md:px-16 bg-center bg-cover bg-no-repeat z-0
        before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 before:h-1/2 before:bg-black before:-z-10 
        after:content-[''] after:absolute after:top-0 after:left-0 after:right-0 after:h-1/2 after:bg-black/60 after:-z-10
        "
      >
        <div className="flex items-start max-h-fit -mx-4">
          <div className="hidden md:block w-64 lg:w-96 px-4">
            <img
              src="https://image.tmdb.org/t/p/w500//wTnV3PCVW5O92JMrFvvrRcV39RU.jpg"
              alt="image"
              className="rounded-3xl w-full"
            />
          </div>
          <div className="px-4 flex-1 flex flex-col text-white">
            <h1 className="md:py-4 py-2 lg:text-7xl md:text-5xl text-3xl font-bold">
              The Wild Robot
            </h1>
            <div className="py-4 space-x-2 ">
              <span className="text-sm px-4 border border-white py-1 rounded-full">
                Animation
              </span>
              <span className="text-sm px-4 border border-white py-1 rounded-full">
                Family
              </span>
            </div>
            <p className="text-base md:py-4 py-2">
              After a shipwreck, an intelligent robot called Roz is stranded on
              an uninhabited island. To survive the harsh environment, Roz bonds
              with the island's animals and cares for an orphaned baby goose.
            </p>
            <div className="md:py-4 py-2">
              <h4 className="text-[20px]">Casts</h4>
              <div className="flex flex-wrap -mx-2">
                <div className="w-28 px-2  mt-1 flex flex-col">
                  <img
                    src="https://image.tmdb.org/t/p/w500//y40Wu1T742kynOqtwXASc5Qgm49.jpg"
                    alt=""
                    className="rounded-xl"
                  />
                  <span className="text-xs md:text-sm">Lupita </span>
                </div>
                <div className="w-28 px-2  mt-1 flex flex-col">
                  <img
                    src="https://image.tmdb.org/t/p/w500//y40Wu1T742kynOqtwXASc5Qgm49.jpg"
                    alt=""
                    className="rounded-xl"
                  />
                  <span className="text-xs md:text-sm">Lupita </span>
                </div>
                <div className="w-28 px-2  mt-1 flex flex-col">
                  <img
                    src="https://image.tmdb.org/t/p/w500//y40Wu1T742kynOqtwXASc5Qgm49.jpg"
                    alt=""
                    className="rounded-xl"
                  />
                  <span className="text-xs md:text-sm">Lupita </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black py-2 lg:px-16 md:px-8 px-4">
        <div className="mb-16">
          <h4 className="text-white text-base md:text-2xl font-semibold mb-4">
            A Baby Hatches
          </h4>
          <iframe
            src="https://www.youtube.com/embed/e_vHEgbZ2V0"
            title="video"
            width="100%"
            height="800px"
            loading="lazy"
            allowFullScreen={false}
          />
        </div>
        <div className="">
          <div className="mb-4">
            <MovieCategory title="Similar" href="#">
              <span></span>
            </MovieCategory>
          </div>
          {/* <div className="mt-0 mb-16">
            <MovieSwiper movieList={movieList} />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
