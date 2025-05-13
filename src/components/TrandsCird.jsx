import React from "react";
import CommonIcon from "./CommonIcon";

function TrandsCird({ item, index }) {
  return (
    <>
      <div
        className={`relative p-7.5 space-y-6 ll:p-12.5 xll:space-y-10 3xl:p-14.5 3xl:space-y-12.5 ${
          (index === 0 &&
            "border-b-2 border-dashed border-dark-15 ll:border-r-2") ||
          (index === 1 &&
            "border-b-2 border-dashed border-dark-15 xll:border-r-2") ||
          (index === 2 &&
            "border-b-2 border-dashed border-dark-15 ll:border-r-2 xll:border-r-0") ||
          (index === 3 &&
            "border-b-2 border-dashed border-dark-15 xll:border-r-2 xll:border-b-0") ||
          (index === 4 &&
            "border-b-2 border-dashed border-dark-15 ll:border-b-0 ll:border-r-2")
        }`}
      >
        <CommonIcon icon={item.icon} />
        <div className="space-y-2.5 xll:space-y-3 relative z-20 3xl:space-y-4 mb-0">
          <h3 className="text-white text-lg font-medium l-150 font-roboto xll:text-xl 3xl:text-2xl">
            {item.title}
          </h3>
          <p className="text-gray-50 pera font-roboto">{item.pera}</p>
        </div>
        <div>
          <img
            src={item.absuluteimg}
            alt="img"
            className="absolute top-0 right-0 h-[200px] w-[200px] z-10"
          />
        </div>
      </div>
    </>
  );
}

export default TrandsCird;
