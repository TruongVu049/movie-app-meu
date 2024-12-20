import { CardSkeleton } from "@/components/MovieCard";
import MovieSwiper from "@/components/MovieSwiper";
import { MovieCategoryItemProps } from "./lib/types";

const MovieCategoryItem = ({
  isSuccess,
  movieList,
}: MovieCategoryItemProps) => {
  return (
    <div className="mt-8">
      {!isSuccess ? (
        <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-4">
          {new Array(6).fill(6).map((item, index) => (
            <CardSkeleton key={item + index} />
          ))}
        </div>
      ) : (
        <MovieSwiper data={movieList} />
      )}
    </div>
  );
};
export default MovieCategoryItem;
