import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import { NavLinkData } from "../../constants";
import { useLocation } from "react-router-dom";
const Navbar: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <nav className="max-w-screen-2xl w-full flex justify-between items-center">
      <div className="md:block hidden">
        <Logo />
      </div>
      <ul className="fixed md:bg-transparent bg-black  md:static md:text-2xl text-lg bottom-0 left-0 right-0 flex md:justify-between justify-evenly space-x-6 text-white md:p-4 md:py-4 py-2">
        {NavLinkData
          ? NavLinkData.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className={`nav-item ${
                    item.path === pathname ? "after:w-full" : ""
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))
          : null}
      </ul>
    </nav>
  );
};

export default Navbar;
