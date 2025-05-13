import React from "react";
import CommonIcon from "./CommonIcon";

function ContactCird({ item, index }) {
  return (
    <div
      className={`p-7.5 xll:p-12.5 3xl:p-14.5 space-y-6 xll:space-y-10 3xl:space-y-12.5 text-white flex flex-col items-center relative ${
        (index === 0 &&
          "border-b-2 border-dashed border-dark-15 ll:border-b-0 ll:border-r-2") ||
        (index === 1 &&
          "border-b-2 border-dashed border-dark-15 ll:border-b-0 ll:border-r-2 ")
      }`}
    >
      <CommonIcon icon={item.icon} />
      <div className="w-full space-y-2.5 xll:space-y-3 3xl:space-y-4 relative z-30">
        <h3 className="text-lg font-medium font-roboto text-white text-center l-150 xll:text-xl 3xl:text-2xl">
          {item.title}
        </h3>
        <div className="w-full py-3.5 bg-dark-12 rounded-lg text-center border-2 border-dashed border-dark-15 text-sm l-150 text-white font-roboto 3xl:py-4.8 3xl:rounded-xl 3xl:text-lg">
          <p>{item.info}</p>
        </div>
      </div>
      <img
        src={item.img}
        alt="abs img"
        className="block h-[120px] w-[120px] xll:h-[200px] xll:w-[200px] absolute top-0 right-0 z-10"
      />
    </div>
  );
}

export default ContactCird;
