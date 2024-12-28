import ImgLogo from "@/assets/images/tmovie-55621206.png";
import { Link } from "react-router-dom";
const Logo: React.FC = () => {
  return (
    <Link
      to="/"
      className={`flex items-center hover:cursor-pointer gap-4 group`}
    >
      <img src={ImgLogo} alt={"logo"} className="w-4 md:w-8" />
      <span className="text-white md:text-4xl text-2xl  group-hover:text-color-primary group-hover:transition-all">
        theMovies
      </span>
    </Link>
  );
};

export default Logo;
