import Button from "@/components/Button";
import { MoviesSectionProps } from "./lib/types";
import { Link } from "react-router-dom";

const MoviesSection = ({ title, href, children }: MoviesSectionProps) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <h4 className="text-white md:text-2xl text-lg font-medium">{title}</h4>
        <Button
          className="text-white md:px-0 p-0"
          size="sm"
          variant="secondary"
        >
          <Link to={href} className="md:px-8 px-4">
            View more
          </Link>
        </Button>
      </div>
      {children}
    </>
  );
};
export default MoviesSection;
