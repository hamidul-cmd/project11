import React from "react";

function CommonTitle({ title, pera, img }) {
  return (
    <>
      <div className="px-5 py-7.5 space-y-5 xll:p-14.5 xll:space-y-6 3xl:p-20 3xl:space-y-7.5 border-b-2 border-dashed border-dark-15 relative overflow-hidden">
        <h2 className="text-28 leading-8.5 text-white font-roboto font-medium uppercase xll:text-38 xll:leading-10.5 3xl:text-48">
          {title}
        </h2>
        <p className="pera text-gray-40 font-roboto mb-0">{pera}</p>
        {img && (
          <div className="absolute top-0 right-0 hidden xll:block">
            <img src={img} alt="img" className="h-full block" />
          </div>
        )   }
      </div>
    </>
  );
}

export default CommonTitle;
