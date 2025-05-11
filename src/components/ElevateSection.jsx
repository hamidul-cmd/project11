import React from "react";
import { Link } from "react-router-dom";
import elevatabs from "../assets/elevatabs.png";

function ElevateSection() {
  return (
    <>
      <section className="section">
        <div className=" bg-brown-70 rounded-14 xll:rounded-2xl 3xl:rounded-20 overflow-hidden px-7.5 py-12.5 xll:p-20 xll:pr-[120px] 3xl:p-24.5 3xl:pr-[142px] relative flex flex-wrap gap-7.5 items-center justify-between">
          <div className="max-w-[600px] xll:max-w-[800px] 3xl:max-w-[1033px] relative z-30 space-y-3 3xl:space-y-4">
            <h1 className="l-120 text-38 font-medium font-roboto text-dark-6 uppercase xll:text-5xl 3xl:text-58">elevate your wardrobe</h1>
            <p className="pera font-roboto text-dark-12">
              Don't miss out – experience the epitome of fashion by clicking
              'Buy Now' and embrace a world of chic elegance delivered to your
              doorstep. Your style journey begins here.
            </p>
          </div>
          <Link className=" relative z-30 py-3.5 px-5 bg-dark-12 rounded-lg flex gap-0.5 w-full justify-center text-white items-center pera font-roboto ll:w-fit ll:h-fit 3xl:py-4.8 3xl:px-6 3xl:gap-1 3xl:rounded-xl">
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
          <img src={elevatabs} alt="" className="block h-[300px] w-[300px] xll:h-[520px] xll:w-[520px] 3xl:h-[620px] 3xl:w-[620px] absolute top-0 right-0 -translate-y-1/2 translate-x-[30%] xll:translate-x-[20%] z-10" />
        </div>
      </section>
    </>
  );
}

export default ElevateSection;
