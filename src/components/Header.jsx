import React, { useState } from "react";
import logodesktop from "../assets/logopc.png";
import logolaptop from "../assets/logolaptop.png";
import logomobile from "../assets/logophone.png";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navlinks = [
    {
      name: "home",
      path: "/",
    },
    {
      name: "products",
      path: "/products",
    },
    {
      name: "contact",
      path: "/contact",
    },
  ];
  return (
    <header className="mb-7.5 xll:mb-10 3xl:mb-14.5 relative px-4 xll:px-20 3xl:px-36.6 max-w-wrapper m-auto">
      <div className="pt-10 pb-5 flex justify-between items-center bg-dark-6 z-[500] relative xll:py-6 border-b-2 border-dashed border-dark-15 3xl:py-7.5">
        <ul
          className={`absolute top-full left-0 w-full flex flex-col gap-5 justify-center items-center z-[20] transition-all duration-300 ease-linear ${
            isOpen ? "translate-x-0" : "translate-x-[-100%] ll:translate-x-0"
          } ll:relative ll:flex-row ll:items-center ll:w-fit ll:gap-2.5 3xl:gap-3.5 py-5`}
        >
          {navlinks.map((link, index) => (
            <li
              key={index}
              className={`${index === navlinks.length - 1 ? "ll:hidden" : ""}`}
              onClick={() => setIsOpen(false)}
            >
              <NavLink
                to={link.path}
                className="w-fit py-3 px-6 border-2 border-dashed border-dark-15 text-white block rounded-lg capitalize font-roboto-mono 3xl:py-4 3xl:text-lg l-150"
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <Link to="/">
          <picture>
            <source srcSet={logodesktop} media="(min-width: 1920px)" />
            <source srcSet={logolaptop} media="(min-width: 1440px)" />
            <img src={logomobile} alt="logo" />
          </picture>
        </Link>
        <div className="hidden ll:flex gap-2.5 3xl:gap-3.5 items-center">
          <Link className="block p-3.5 bg-dark-10 rounded-lg 3xl:p-4.8 3xl:rounded-xl">
            <svg
              className="h-5 w-5 3xl:h-6 3xl:w-6"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.875 2.375C1.52982 2.375 1.25 2.65482 1.25 3C1.25 3.34518 1.52982 3.625 1.875 3.625H3.02974C3.17132 3.625 3.29521 3.72019 3.33169 3.85698L5.46313 11.8499C4.11815 12.1988 3.125 13.4209 3.125 14.875C3.125 15.2202 3.40482 15.5 3.75 15.5H16.875C17.2202 15.5 17.5 15.2202 17.5 14.875C17.5 14.5298 17.2202 14.25 16.875 14.25H4.48169C4.73909 13.5218 5.43361 13 6.25 13H15.5985C15.8376 13 16.0557 12.8637 16.1604 12.6488C17.1064 10.7075 17.9319 8.69669 18.6273 6.62605C18.6826 6.46131 18.6668 6.28097 18.5837 6.12833C18.5007 5.97569 18.3578 5.86452 18.1894 5.82152C14.1712 4.79535 9.96135 4.25 5.625 4.25C5.32681 4.25 5.02921 4.25258 4.73223 4.25772L4.53948 3.5349C4.35708 2.85091 3.73762 2.375 3.02974 2.375H1.875Z"
                fill="white"
              />
              <path
                d="M3.125 17.375C3.125 16.6846 3.68464 16.125 4.375 16.125C5.06536 16.125 5.625 16.6846 5.625 17.375C5.625 18.0654 5.06536 18.625 4.375 18.625C3.68464 18.625 3.125 18.0654 3.125 17.375Z"
                fill="white"
              />
              <path
                d="M13.75 17.375C13.75 16.6846 14.3096 16.125 15 16.125C15.6904 16.125 16.25 16.6846 16.25 17.375C16.25 18.0654 15.6904 18.625 15 18.625C14.3096 18.625 13.75 18.0654 13.75 17.375Z"
                fill="white"
              />
            </svg>
          </Link>
          <Link
            to="/contact"
            className="block py-3.5 px-7.5 bg-brown-60 rounded-lg text-sm font-medium l-150 font-roboto-mono capitalize text-dark-6 3xl:py-4.8 3xl:rounded-xl 3xl:text-lg"
          >
            contact
          </Link>
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="ll:hidden bg-brown-70 p-3.5 rounded-10"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.5 7.875C3.5 7.39175 3.89175 7 4.375 7H23.625C24.1082 7 24.5 7.39175 24.5 7.875C24.5 8.35825 24.1082 8.75 23.625 8.75H4.375C3.89175 8.75 3.5 8.35825 3.5 7.875ZM3.5 14C3.5 13.5168 3.89175 13.125 4.375 13.125H23.625C24.1082 13.125 24.5 13.5168 24.5 14C24.5 14.4832 24.1082 14.875 23.625 14.875H4.375C3.89175 14.875 3.5 14.4832 3.5 14ZM13.125 20.125C13.125 19.6418 13.5168 19.25 14 19.25H23.625C24.1082 19.25 24.5 19.6418 24.5 20.125C24.5 20.6082 24.1082 21 23.625 21H14C13.5168 21 13.125 20.6082 13.125 20.125Z"
              fill="#1A1A1A"
            />
          </svg>
        </div>
      </div>
    </header>
  );
}

export default Header;
