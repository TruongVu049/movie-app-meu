import React from "react";
import ImgFooter from "@/assets/images/footer-bg-e4b3ddb4.jpg";
import Logo from "../logo/Logo";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer
      className="h-100 lg:h-[480px] px-8 py-12 bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${ImgFooter})`,
      }}
    >
      <div className="max-w-4xl mx-auto h-full flex flex-col justify-evenly">
        <div className="mx-auto">
          <Logo />
        </div>
        <div className="grid md:grid-cols-3 grid-cols-2  text-white font-semibold text-base md:text-2xl items-start justify-between flex-wrap -mx-2">
          <Link
            to="#"
            className="p-2 text-white font-medium md:text-2xl text-base hover:text-color-primary"
          >
            Home
          </Link>
          <Link
            to="#"
            className="p-2 text-white font-medium md:text-2xl text-base hover:text-color-primary"
          >
            Live
          </Link>
          <Link
            to="#"
            className="p-2 text-white font-medium md:text-2xl text-base hover:text-color-primary"
          >
            You must watch
          </Link>
          <Link
            to="#"
            className="p-2 text-white font-medium md:text-2xl text-base hover:text-color-primary"
          >
            Contact us
          </Link>
          <Link
            to="#"
            className="p-2 text-white font-medium md:text-2xl text-base hover:text-color-primary"
          >
            FAQ
          </Link>
          <Link
            to="#"
            className="p-2 text-white font-medium md:text-2xl text-base hover:text-color-primary"
          >
            Recent release
          </Link>
          <Link
            to="#"
            className="p-2 text-white font-medium md:text-2xl text-base hover:text-color-primary"
          >
            Term of services
          </Link>
          <Link
            to="#"
            className="p-2 text-white font-medium md:text-2xl text-base hover:text-color-primary"
          >
            Premium
          </Link>
          <Link
            to="#"
            className="p-2 text-white font-medium md:text-2xl text-base hover:text-color-primary"
          >
            Top IMDB
          </Link>
          <Link
            to="#"
            className="p-2 text-white font-medium md:text-2xl text-base hover:text-color-primary"
          >
            About us
          </Link>
          <Link
            to="#"
            className="p-2 text-white font-medium md:text-2xl text-base hover:text-color-primary"
          >
            Pravacy policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
