import Button from "@/components/Button";
import { MoviesSectionProps } from "./lib/types";

const MoviesSection = ({ title, href, children }: MoviesSectionProps) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <h4 className="text-white md:text-2xl text-lg font-medium">{title}</h4>
        <Button tagName="a" href={href} size="sm" variant="secondary">
          View more
        </Button>
      </div>
      {children}
    </>
  );
};
export default MoviesSection;
