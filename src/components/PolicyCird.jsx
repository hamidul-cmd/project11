import React from "react";
import CommonIcon from "./CommonIcon";

function PolicyCird({ item, index }) {
  return (
    <>
      <div
        className={`py-10 px-5 flex gap-5 items-center text-white xll:py-12.5 xll:px-7.5 3xl:py-14.5 3xl:px-10 ${
          (index === 1 &&
            "border-b-2 border-dashed border-dark-15 ll:border-b-0 ll:border-r-2") ||
          (index === 0 &&
            "border-b-2 border-dashed border-dark-15 ll:border-b-0 ll:border-r-2")
        }`}
      >
        <div>
          <CommonIcon icon={item.icon} />
        </div>
        <div className="space-y-2.5 xll:space-y-3 3xl:space-y-4">
          <h3 className="text-lg font-medium text-white l-150 font-roboto xll:text-xl 3xl:text-2xl">
            {item.title}
          </h3>
          <p className="pera text-gray-50">{item.info}</p>
        </div>
      </div>
    </>
  );
}

export default PolicyCird;
