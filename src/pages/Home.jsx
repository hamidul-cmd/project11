import React from "react";
import homeheroimg from "../assets/homeheroimg.png";
import { Link } from "react-router-dom";

function Home() {
  const herocapsule = ["all", "mens", "womens", "kids"];
  return (
    <>
      <section className="section">
        <div className="relative">
          <div className="w-full h-[250px] ll:h-[350px] xll:h-[442px] 3xl:h-[624px] overflow-hidden rounded-t-[20px]">
            <img
              src={homeheroimg}
              alt="homeheroimg"
              className="block w-full h-full object-cover xll:object-none object-top hero__bg"
            />
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 p-2.5 bg-dark-6 rounded-10 translate-y-1/2 xll:p-4 3xl:p-5 3xl:rounded-[20px]">
            <Link to="/products" className="link">
              <span>Shop Now</span>
              <span>
                <svg
                  className="w-5 h-5 3xl:w-6 3xl:h-6"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    d="M6.875 3.125L16.25 3.125C16.4158 3.125 16.5747 3.19085 16.6919 3.30806C16.8092 3.42527 16.875 3.58424 16.875 3.75V13.125C16.875 13.4702 16.5952 13.75 16.25 13.75C15.9048 13.75 15.625 13.4702 15.625 13.125V5.25888L4.19194 16.6919C3.94786 16.936 3.55214 16.936 3.30806 16.6919C3.06398 16.4479 3.06398 16.0521 3.30806 15.8081L14.7411 4.375L6.875 4.375C6.52982 4.375 6.25 4.09518 6.25 3.75C6.25 3.40482 6.52982 3.125 6.875 3.125Z"
                    fill="white"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
        <div className="text-white border-2 border-t-0 border-dashed border-dark-15 rounded-xl">
          <div className="pt-12.5 space-y-4 p-5">
            <div className="flex gap-2.5">
              {herocapsule.map((item, i) => (
                <Link
                  to="/products"
                  key={i}
                  className="grow block py-2.5 border-2 border-dashed border-dark-20 text-center rounded-lg text-sm l-150 font-roboto-mono capitalize text-gray-70"
                >
                  <span>{item}</span>
                </Link>
              ))}
            </div>
            <h1 className="text-28 font-medium font-roboto uppercase text-white leading-120">
              Elevate Your Style with StyleLoom
            </h1>
            <p className="pera">
              Explore a world of fashion at StyleLoom, where trends meet
              affordability. Immerse yourself in the latest styles and seize
              exclusive promotions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
