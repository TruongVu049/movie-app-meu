import { Movie, TV } from "../../types";
import { Link } from "react-router-dom";
import { getImageUrl } from "../../Helper/imageHelper";

import Button from "../Button";

export default function MediaCard({ data }: { data: Movie | TV }) {
  const isMovie = (movie: Movie | TV): movie is Movie =>
    (movie as Movie).title !== undefined;

  return (
    <Link
      to={`/${isMovie(data) ? "movie" : "tv"}/${data.id}`}
      className={"hover:cursor-pointer group/card z-10"}
    >
      <div
        className="relative h-72 2xl:h-80 bg-center bg-no-repeat bg-cover rounded-3xl
              group/post after:content-[''] after:absolute after:top-0 after:bottom-0 after:right-0 
              after:left-0 after:rounded-3xl hover:after:bg-black/50 after:transition after:ease-in-out after:duration-300        
              "
        style={{
          backgroundImage: `url("${getImageUrl(
            data.backdrop_path ?? "",
            "original"
          )}")`,
        }}
      >
        <Button
          tagName="button"
          variant="primary"
          className="py-4 group-hover/post:block transition ease-in-out z-[9] duration-300 hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
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
      </div>
      <h4 className="font-medium overflow-hidden group-hover/card:text-color-primary text-white text-sm md:text-lg mt-4 transition duration-300 ease-in-out">
        {isMovie(data) ? data.title : data.name}
      </h4>
    </Link>
  );
}

export function CardSkeleton() {
  return (
    <div className={"animate-pulse"}>
      <div className="h-72 2xl:h-80 bg-gray-600 rounded-3xl"></div>
      <div className="font-medium h-4 mt-2 bg-gray-600 rounded-full"></div>
    </div>
  );
}
