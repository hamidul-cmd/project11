import React from "react";
import { Link } from "react-router-dom";

function ProductTitle({ title, link }) {
  return (
    <div className="flex justify-between items-center p-6 3xl:p-7.5 border-b-2 border-dashed border-dark-15">
      <h2 className="text-2xl l-150 text-white font-roboto font-medium xll:text-26 3xl:text-3xl uppercase">
        {title}
      </h2>
      {link && (
        <div className="hidden ll:block">
          <Link className="link">
            <span>View All</span>
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
      )}
    </div>
  );
}

export default ProductTitle;
