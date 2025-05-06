import React from "react";

function TrandsCird({ item, index }) {
  return (
    <>
      <div
        className={`relative p-7.5 space-y-6 ll:p-12.5 xll:space-y-10 3xl:p-14.5 3xl:space-y-12.5 ${
          (index === 0 && "border-b-2 border-dashed border-dark-15 ll:border-r-2") ||
          (index === 1 && "border-b-2 border-dashed border-dark-15 xll:border-r-2") ||
          (index === 2 && "border-b-2 border-dashed border-dark-15 ll:border-r-2 xll:border-r-0") ||
          (index === 3 && "border-b-2 border-dashed border-dark-15 xll:border-r-2 xll:border-b-0") ||
          (index === 4 && "border-b-2 border-dashed border-dark-15 ll:border-b-0 ll:border-r-2")
        }`}
      >
        <div className='p-2.5 border-2 border-dashed border-dark-15 rounded-full w-fit relative before:content-[""] before:absolute before:h-full before:w-[2px] before:bg-dark-15 before:left-1/2 before:top-0 before:-translate-x-1/2 before:z-10 after:content-[""] after:absolute after:h-[2px] after:w-full after:bg-dark-15 after:left-0 after:top-1/2 after:z-10 3xl:p-3.5'>
          <div className="p-3.5 bg-dark-10 rounded-full z-20 relative 3xl:p-4">
            {item.icon}
          </div>
        </div>
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
