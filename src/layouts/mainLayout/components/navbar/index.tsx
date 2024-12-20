import React from "react";
import { Link } from "react-router-dom"; // Đổi tên NavLink của React Router
import Logo from "../logo/Logo";
import { useLocation } from "react-router-dom";

const navLinks = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Movies",
    path: "/movie",
  },
  {
    id: 3,
    title: "TV Series",
    path: "/tv",
  },
];

const Navbar: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <nav className="max-w-screen-2xl w-full flex justify-between items-center">
      <div className="md:block hidden">
        <Logo />
      </div>
      <ul className="fixed md:bg-transparent bg-black  md:static md:text-2xl text-lg bottom-0 left-0 right-0 flex md:justify-between justify-evenly space-x-6 text-white md:p-4 md:py-4 py-2">
        {navLinks.map((item) => (
          <li key={item.id}>
            <Link
              to={item.path}
              className={`
                relative font-bold after:content-[''] after:absolute after:transition-all
                after:duration-300 after:ease-in-out after:bottom-[-0.25rem]
                after:left-1/2  after:h-[0.15rem] after:-translate-x-1/2 
                after:bg-color-primary hover:cursor-pointer hover:text-color-primary
                hover:after:w-full
                ${
                  item.path === pathname ||
                  pathname.substring(0, pathname.lastIndexOf("/")) === item.path
                    ? "after:w-full"
                    : "after:w-0"
                }`}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
