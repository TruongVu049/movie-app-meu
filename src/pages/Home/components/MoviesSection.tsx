import React from "react";
import Button from "@/components/Button";

const MoviesSection = ({
  title,
  href,
  children,
}: {
  title: string;
  href: string;
  children?: React.ReactNode;
}) => {
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
