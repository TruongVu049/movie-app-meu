import React from "react";
import Imglogo from "../assets/images/tmovie-55621206.png";
const Logo: React.FC = () => {
  return (
    <a
      href="/"
      className={`flex items-center hover:cursor-pointer gap-4 group`}
    >
      <img src={Imglogo} alt={"logo"} className="w-4 md:w-8" />
      <span className="text-white md:text-4xl text-2xl  group-hover:text-color-primary group-hover:transition-all">
        theMovies
      </span>
    </a>
  );
};

export default Logo;
