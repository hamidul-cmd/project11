import React from "react";
import AbstractDesign from "../assets/AbstractDesign.svg";
import footerlogopc from "../assets/footerlogopc.png";
import footerlogolaptop from "../assets/footerlogolaptop.png";
import footerlogophone from "../assets/footerlogophone.png";
import { Link } from "react-router-dom";

function Footer() {
  const footerslider = [
    "T-Shirt",
    "Long-Sleeve T-Shir",
    "Dresses",
    "Raglan Sleeve Shirt",
    "Accessories",
    "Sale",
    "Crop Top",
    "V-Neck Shirt",
    "Muscle Shirt",
    "Tank Top",
  ];
  const footersliderpc = [
    "T-Shirt",
    "Long-Sleeve T-Shir",
    "Dresses",
    "Raglan Sleeve Shirt",
    "Accessories",
    "Sale",
    "Crop Top",
    "V-Neck Shirt",
    "Muscle Shirt",
    "Tank Top",
  ];
  const socialmedia = [
    {
      icon: (
        <svg
          className="w-6 h-6 xll:w-7 xll:h-7 3xl:w-8.5 3xl:h-8.5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.89941V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2156 5.90625C15.3097 5.90625 16.4541 6.10156 16.4541 6.10156V8.5625H15.1931C13.9509 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z"></path>
        </svg>
      ),
      path: "https://www.facebook.com/hamidulislam.maruf.5",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 xll:w-7 xll:h-7 3xl:w-8.5 3xl:h-8.5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path>
        </svg>
      ),
      path: "https://www.instagram.com/marufhamidulislam/",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 xll:w-7 xll:h-7 3xl:w-8.5 3xl:h-8.5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M22.2125 5.65605C21.4491 5.99375 20.6395 6.21555 19.8106 6.31411C20.6839 5.79132 21.3374 4.9689 21.6493 4.00005C20.8287 4.48761 19.9305 4.83077 18.9938 5.01461C18.2031 4.17106 17.098 3.69303 15.9418 3.69434C13.6326 3.69434 11.7597 5.56661 11.7597 7.87683C11.7597 8.20458 11.7973 8.52242 11.8676 8.82909C8.39047 8.65404 5.31007 6.99005 3.24678 4.45941C2.87529 5.09767 2.68005 5.82318 2.68104 6.56167C2.68104 8.01259 3.4196 9.29324 4.54149 10.043C3.87737 10.022 3.22788 9.84264 2.64718 9.51973C2.64654 9.5373 2.64654 9.55487 2.64654 9.57148C2.64654 11.5984 4.08819 13.2892 6.00199 13.6731C5.6428 13.7703 5.27232 13.8194 4.90022 13.8191C4.62997 13.8191 4.36771 13.7942 4.11279 13.7453C4.64531 15.4065 6.18886 16.6159 8.0196 16.6491C6.53813 17.8118 4.70869 18.4426 2.82543 18.4399C2.49212 18.4402 2.15909 18.4205 1.82812 18.3811C3.74004 19.6102 5.96552 20.2625 8.23842 20.2601C15.9316 20.2601 20.138 13.8875 20.138 8.36111C20.138 8.1803 20.1336 7.99886 20.1256 7.81997C20.9443 7.22845 21.651 6.49567 22.2125 5.65605Z"></path>
        </svg>
      ),
      path: "https://x.com/mdmaruf17204871",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 xll:w-7 xll:h-7 3xl:w-8.5 3xl:h-8.5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path>
        </svg>
      ),
      path: "https://github.com/hamidul-cmd",
    },
  ];
  const gotop = () => {
    window.scrollTo({ top: 0, left: 0 });
  };
  return (
    <>
      <footer>
        <div className="relative h-[130px] overflow-hidden xll:h-[135px] 3xl:h-[165px] border-y-2 border-dashed border-dark-25">
          <div className="flex items-center gap-20 py-7.5 absolute top-0 left-0 footerinfinitescroll xll:py-10 3xl:py-12.5">
            {footerslider.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-xl l-120 font-roboto uppercase w-fit flex-nowrap"
              >
                <h3 className="text-dark-20 whitespace-nowrap xll:text-2xl">
                  {item}
                </h3>
                <img src={AbstractDesign} alt="" className="block" />
              </div>
            ))}
            {window.innerWidth >= 1920 &&
              footersliderpc.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-xl l-120 font-roboto uppercase w-fit flex-nowrap"
                >
                  <h3 className="text-dark-20 whitespace-nowrap xll:text-2xl">
                    {item}
                  </h3>
                  <img src={AbstractDesign} alt="" className="block" />
                </div>
              ))}
          </div>
        </div>
        <div className="px-4 py-12.5 flex flex-wrap gap-7.5 justify-between xll:p-20 3xl:py-24.5 3xl:px-36.6 border-b-2 border-dashed border-dark-25">
          <Link to="/" className="w-fit" onClick={gotop}>
            <picture>
              <source srcSet={footerlogopc} media="(min-width: 1920px)" />
              <source srcSet={footerlogolaptop} media="(min-width: 1440px)" />
              <img src={footerlogophone} alt="logo" />
            </picture>
          </Link>
          <div className="flex items-center gap-4">
            {socialmedia.map((item, index) => (
              <a
                href={item.path}
                target="_blank"
                key={index}
                className="p-3 rounded-lg bg-brown-80 cursor-pointer hover:scale-90 transition-all duration-100 ease-linear"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="px-4 py-7.5 flex flex-wrap gap-5 justify-between xll:py-10 xll:px-20 3xl:py-12.5 3xl:px-36.6">
          <p className="pera font-roboto-mono text-gray-50">
            © 2024 StyleLoom. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="" className="pera font-roboto-mono text-gray-50">
              Privacy Policy
            </a>
            <a href="" className="pera font-roboto-mono text-gray-50">
              Terms & Conditions
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
