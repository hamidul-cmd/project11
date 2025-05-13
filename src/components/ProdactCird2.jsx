import React from "react";
import { Link } from "react-router-dom";
function ProdactCird2({ item, index }) {
  return (
    <>
      <div
        className={`p-5 pb-7.5 space-y-5 3xl:p-7.5 3xl:space-y-7.5 text-white ${
          (index === 0 &&
            "border-b-2 border-dashed border-dark-15 ll:border-r-2 ll:border-b-0") ||
          (index === 1 &&
            "border-b-2 border-dashed border-dark-15 ll:border-r-2 ll:border-b-0") ||
          (index === 2 && "border-dashed border-dark-15 ll:border-r-0")
        }`}
      >
        <img
          src={item.img}
          alt=""
          className="block w-full h-[220px] ll:h-[290px] xll:h-[290px] 3xl:h-[286px] rounded-t-[20px] xll:rounded-t-[30px] 3xl:rounded-t-[50px]"
        />
        <div>
          <div className="flex justify-between items-center mb-5">
            <div className="capsule px-3 py-2 bg-dark-10 rounded-full text-sm l-150 text-gray-70 font-roboto 3xl:py-2.5 3xl:px-4">
              {item.capsule}
            </div>
            <div className="hidden ll:block">
              <Link className="link hidden">
                <span>Shop Now</span>
                <svg
                  className="h-5 w-5 3xl:h-6 3xl:w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.25 3.75L19.5 3.75C19.6989 3.75 19.8897 3.82902 20.0303 3.96967C20.171 4.11032 20.25 4.30109 20.25 4.5V15.75C20.25 16.1642 19.9142 16.5 19.5 16.5C19.0858 16.5 18.75 16.1642 18.75 15.75V6.31066L5.03033 20.0303C4.73744 20.3232 4.26256 20.3232 3.96967 20.0303C3.67678 19.7374 3.67678 19.2626 3.96967 18.9697L17.6893 5.25L8.25 5.25C7.83579 5.25 7.5 4.91421 7.5 4.5C7.5 4.08579 7.83579 3.75 8.25 3.75Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <h3 className="text-lg font-medium l-150 font-roboto-mono mb-2.5 3xl:text-2xl 3xl:mb-3.5">
            {item.title}
          </h3>
          <div className="flex gap-2.5 mb-5">
            <div className="flex items-center gap-1.5 text-sm font-roboto-mono l-150 3xl:gap-2">
              <span className="capitalize text-gray-50 3xl:text-lg">fit</span>
              <span className="block h-1 w-1 bg-dark-30 rounded-full"></span>
              <span className="font-medium text-gray-80 3xl:text-xl">
                {item.fit}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-sm font-roboto-mono l-150 xll:text-base 3xl:gap-2">
              <span className="capitalize text-gray-50 3xl:text-lg">price</span>
              <span className="block h-1 w-1 bg-dark-30 rounded-full"></span>
              <span className="font-medium text-gray-80 3xl:text-xl">
                ${item.price}
              </span>
            </div>
          </div>
          <div className="ll:hidden">
            <Link className="link justify-center">
              <span>Shop Now</span>
              <svg
                className="h-5 w-5 3xl:h-6 3xl:w-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.25 3.75L19.5 3.75C19.6989 3.75 19.8897 3.82902 20.0303 3.96967C20.171 4.11032 20.25 4.30109 20.25 4.5V15.75C20.25 16.1642 19.9142 16.5 19.5 16.5C19.0858 16.5 18.75 16.1642 18.75 15.75V6.31066L5.03033 20.0303C4.73744 20.3232 4.26256 20.3232 3.96967 20.0303C3.67678 19.7374 3.67678 19.2626 3.96967 18.9697L17.6893 5.25L8.25 5.25C7.83579 5.25 7.5 4.91421 7.5 4.5C7.5 4.08579 7.83579 3.75 8.25 3.75Z"
                  fill="white"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProdactCird2;
