import MovieSwiper from "@/components/MovieSwiper";
import { SimilarListProps } from "./lib/types";

const SimilarList = ({ movieList }: SimilarListProps) => {
  return (
    <div className="mb-4">
      <h4 className="text-white text-base md:text-2xl font-semibold mb-4">
        Similar
      </h4>
      <MovieSwiper data={movieList} />
    </div>
  );
};

export default SimilarList;
