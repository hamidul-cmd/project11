import React from "react";

function JourneyCird({ item, index }) {
  return (
    <>
      <div
        className={`p-7.5 border-dashed border-dark-15 xll:p-10 3xl:p-12.5 ${
          (index === 0 && "border-b-2 ll:border-r-2") ||
          (index === 1 && "border-b-2 xll:border-r-2 xll:border-b-0") ||
          (index === 2 && "border-b-2 ll:border-b-0 ll:border-r-2")
        }`}
      >
        <div className="text-gray-40 mb-5 text-base font-roboto-mono l-150 capitalize xll:text-lg xll:mb-6 3xl:text-xl 3xl:mb-7.5">
          step 0{index + 1}
        </div>
        <h3 className="text-white mb-2.5 text-xl font-medium font-roboto l-150 xll:text-22 xll:mb-3 3xl:text-28 3xl:mb-4">
          {item.title}
        </h3>
        <p className="text-gray-50 pera font-roboto xll:text-lg">
          {item.pera}
        </p>
      </div>
    </>
  );
}

export default JourneyCird;
