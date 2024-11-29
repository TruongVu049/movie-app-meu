import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";

const Header: React.FC = () => {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    setScroll(window.scrollY > 150);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        scroll ? "md:py-4 bg-black" : "md:py-8 bg-transparent"
      }  flex justify-center px-8 py-0 fixed top-0 w-full z-50 transition-all duration-200 ease-in-out`}
    >
      <Navbar />
    </header>
  );
};

export default Header;
