import MovieSwiperList from "@/components/MovieSwiperList";
import { SimilarMovieProps } from "./lib/types";

const SimilarMovie = ({ movies, isSuccess, error }: SimilarMovieProps) => {
  return (
    <div className="mb-4">
      <h4 className="text-white text-base md:text-2xl font-semibold mb-4">
        Similar
      </h4>
      <MovieSwiperList movies={movies} isSuccess={isSuccess} error={error} />
    </div>
  );
};

export default SimilarMovie;
