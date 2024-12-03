import { TAGS } from "../constants";
import { useMovies } from "../hooks/useMovies";
import { Video } from "../types";

export default function TrailerModal({
  trailer,
  onChangeTrailer,
}: {
  trailer: {
    status: boolean;
    movieId: number;
  };
  onChangeTrailer: () => void;
}) {
  const videos = useMovies<Video>({
    tags: [TAGS.movie, TAGS.video],
    mediaType: "movie",
    categoryType: "video",
    movieId: trailer.movieId,
  });

  return (
    <div className={`fixed inset-0 bg-black/30 py-16 z-50 `}>
      <div className="relative p-8 mx-auto bg-black max-w-screen-lg rounded-md h-full animate-scaleUp_md">
        {videos.isLoading ? (
          <div className="animate-pulse bg-gray-900  p-8 mx-auto max-w-screen-lg rounded-md h-full "></div>
        ) : (
          <>
            <button
              onClick={onChangeTrailer}
              className="group absolute top-0 right-0 p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 text-white group-hover:text-color-primary"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${videos.data?.results[0].key}`}
              className="w-full h-full"
            />
          </>
        )}
      </div>
    </div>
  );
}
