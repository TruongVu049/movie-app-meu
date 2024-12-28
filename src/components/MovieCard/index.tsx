import config from "@/config";
import {
  MovieCardImageProps,
  MovieCardProps,
  MovieCardTitleProps,
} from "./lib/type";
import { cn } from "@/utils";
import { Link } from "react-router-dom";

const MovieCard = ({ className, ...props }: MovieCardProps) => {
  return (
    <Link
      {...props}
      className={cn("hover:cursor-pointer group/card z-10", className)}
    />
  );
};

const MovieCardTitle = ({
  className,
  title,
  ...props
}: MovieCardTitleProps) => (
  <h4
    className={cn(
      "font-medium overflow-hidden group-hover/card:text-color-primary text-white text-sm md:text-lg mt-4 transition duration-300 ease-in-out",
      className
    )}
    {...props}
  >
    {title}
  </h4>
);

const MovieCardImage = ({ className, url, ...props }: MovieCardImageProps) => (
  <div
    className={cn(
      'relative h-72 2xl:h-80 bg-center bg-no-repeat bg-cover rounded-3xl group/post after:content-[""] after:absolute after:top-0 after:bottom-0 after:right-0 after:left-0 after:rounded-3xl hover:after:bg-black/50 after:transition after:ease-in-out after:duration-300',
      className
    )}
    style={{
      backgroundImage: `url("${config.backDropPath + url}")`,
    }}
    {...props}
  />
);

export { MovieCard, MovieCardTitle, MovieCardImage };
