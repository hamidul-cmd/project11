import React from "react";

function CommonIcon({ icon }) {
  return (
    <>
      <div className='p-2.5 border-2 border-dashed border-dark-15 rounded-full w-fit relative before:content-[""] before:absolute before:h-full before:w-[2px] before:bg-dark-15 before:left-1/2 before:top-0 before:-translate-x-1/2 before:z-10 after:content-[""] after:absolute after:h-[2px] after:w-full after:bg-dark-15 after:left-0 after:top-1/2 after:z-10 3xl:p-3.5 z-30'>
        <div className="p-3.5 bg-dark-10 rounded-full z-20 relative 3xl:p-4">
          {icon}
        </div>
      </div>
    </>
  );
}

export default CommonIcon;
