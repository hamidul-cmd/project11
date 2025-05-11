import React, { useState } from "react";
import homeheroimg from "../assets/homeheroimg.png";
import { Link } from "react-router-dom";
import CustomScrollTrigger from "../components/CustomScrollTrigger";
import CountUp from "react-countup";
import CommonTitle from "../components/CommonTitle";
import absulute1 from "../assets/absulute1.png";
import absulute2 from "../assets/absulute2.png";
import absulute3 from "../assets/absulute3.png";
import absulute4 from "../assets/absulute4.png";
import absulute5 from "../assets/absulute5.png";
import absulute6 from "../assets/absulute6.png";
import TrandsCird from "../components/TrandsCird";
import journeyabs from "../assets/journeyabs.png";
import JourneyCird from "../components/JourneyCird";
import collectionabs from "../assets/collectionabs.png";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";
import ProductCird from "../components/ProductCird";
import TestimonialSection from "../components/TestimonialSection";
import FaqSection from "../components/FaqSection";
import ElevateSection from "../components/ElevateSection";

function Home() {
  const herocapsule = ["all", "mens", "womens", "kids"];
  const [counterstart, setcounterstart] = useState(false);
  const herocounter = [
    {
      title: "Fashion Products",
      count: 1500,
      sembol: "+",
    },
    {
      title: "New arrivals every month.",
      count: 50,
      sembol: "+",
    },
    {
      title: "OFF on select items.",
      count: 30,
      sembol: "%",
    },
    {
      title: "Customer Satisfaction Rate",
      count: 95,
      sembol: "%",
    },
  ];
  const trandsCirdData = [
    {
      absuluteimg: absulute1,
      title: "Passionate Craftsmanship",
      pera: "Every garment at StyleLoom is crafted with passion, reflecting our commitment to quality and innovation.",
      icon: (
        <svg
          className="h-6.7 w-6.7 3xl:h-8.5 3xl:w-8.5  "
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.967 7.66185C14.7614 4.44282 15.6587 2.83331 17 2.83331C18.3414 2.83331 19.2386 4.44282 21.0331 7.66184L21.4973 8.49464C22.0072 9.40939 22.2622 9.86676 22.6597 10.1685C23.0572 10.4703 23.5523 10.5823 24.5425 10.8064L25.444 11.0104C28.9286 11.7988 30.6709 12.193 31.0854 13.5259C31.4999 14.8589 30.3121 16.2478 27.9366 19.0257L27.322 19.7444C26.6469 20.5338 26.3094 20.9285 26.1576 21.4167C26.0057 21.905 26.0568 22.4316 26.1588 23.4848L26.2517 24.4437C26.6109 28.15 26.7905 30.0031 25.7052 30.827C24.62 31.6508 22.9888 30.8997 19.7262 29.3975L18.8821 29.0088C17.955 28.582 17.4914 28.3685 17 28.3685C16.5087 28.3685 16.0451 28.582 15.118 29.0088L14.2739 29.3975C11.0113 30.8997 9.38004 31.6508 8.29483 30.827C7.20963 30.0031 7.3892 28.15 7.74835 24.4437L7.84127 23.4848C7.94333 22.4316 7.99436 21.905 7.84251 21.4167C7.69067 20.9285 7.35314 20.5338 6.67809 19.7444L6.06351 19.0257C3.68798 16.2478 2.50021 14.8589 2.91472 13.5259C3.32923 12.193 5.0715 11.7988 8.55605 11.0104L9.45755 10.8064C10.4477 10.5823 10.9428 10.4703 11.3404 10.1685C11.7379 9.86676 11.9929 9.40939 12.5028 8.49464L12.967 7.66185Z"
            fill="#C2B4A3"
          />
        </svg>
      ),
    },
    {
      absuluteimg: absulute2,
      title: "Fashion Forward",
      pera: "We're more than a brand; we're trendsetters, curating styles that empower and inspire confidence.",
      icon: (
        <svg
          className="h-6.7 w-6.7 3xl:h-8.5 3xl:w-8.5  "
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.5 11.3333C25.5 16.0277 21.6944 19.8333 17 19.8333C12.3056 19.8333 8.5 16.0277 8.5 11.3333C8.5 6.63889 12.3056 2.83331 17 2.83331C21.6944 2.83331 25.5 6.63889 25.5 11.3333Z"
            fill="#C2B4A3"
          />
          <path
            d="M7.13082 15.2766C4.56402 16.7394 2.83337 19.5009 2.83337 22.6666C2.83337 27.3611 6.63895 31.1666 11.3334 31.1666C16.0278 31.1666 19.8334 27.3611 19.8334 22.6666C19.8334 22.3035 19.8106 21.9457 19.7664 21.5946C18.8844 21.8318 17.957 21.9583 17 21.9583C12.5253 21.9583 8.6967 19.1922 7.13082 15.2766Z"
            fill="#C2B4A3"
          />
          <path
            d="M21.7977 20.816C21.9033 21.417 21.9583 22.0354 21.9583 22.6667C21.9583 25.6284 20.7465 28.3071 18.7916 30.234C19.9536 30.8302 21.2708 31.1667 22.6667 31.1667C27.3611 31.1667 31.1667 27.3611 31.1667 22.6667C31.1667 19.501 29.436 16.7394 26.8693 15.2766C25.9075 17.6816 24.0921 19.6529 21.7977 20.816Z"
            fill="#C2B4A3"
          />
        </svg>
      ),
    },
    {
      absuluteimg: absulute3,
      title: "Customer-Centric Approach",
      pera: "At StyleLoom, our customers are at the heart of everything we do. Your satisfaction is our measure of success.",
      icon: (
        <svg
          className="h-6.7 w-6.7 3xl:h-8.5 3xl:w-8.5"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M29.75 16.86V9.10789C29.75 5.89332 29.75 4.28604 28.7481 3.40658C27.7461 2.52712 26.2147 2.79159 23.1517 3.32054L21.658 3.5785C19.3343 3.97978 18.1725 4.18043 17 4.18043C15.8275 4.18043 14.6657 3.97978 12.342 3.5785L10.8483 3.32054C7.78534 2.79159 6.25388 2.52712 5.25194 3.40658C4.25 4.28604 4.25 5.89332 4.25 9.10789V16.86C4.25 24.9192 10.2552 28.8302 14.023 30.4909C15.045 30.9414 15.556 31.1666 17 31.1666C18.444 31.1666 18.955 30.9414 19.977 30.4909C23.7448 28.8302 29.75 24.9192 29.75 16.86ZM10.1588 12.9484C10.3337 12.5857 10.9888 12.0893 12.0417 12.0893C13.0946 12.0893 13.7496 12.5857 13.9246 12.9484C14.1869 13.4923 14.825 13.7129 15.3499 13.4411C15.8749 13.1693 16.0877 12.5081 15.8254 11.9642C15.1755 10.6165 13.6049 9.88751 12.0417 9.88751C10.4784 9.88751 8.90782 10.6165 8.25789 11.9642C7.99559 12.5081 8.20848 13.1693 8.7334 13.4411C9.25831 13.7129 9.89648 13.4923 10.1588 12.9484ZM21.9583 12.0893C20.9054 12.0893 20.2504 12.5857 20.0754 12.9484C19.8131 13.4923 19.175 13.7129 18.6501 13.4411C18.1251 13.1693 17.9123 12.5081 18.1746 11.9642C18.8245 10.6165 20.3951 9.88751 21.9583 9.88751C23.5216 9.88751 25.0922 10.6165 25.7421 11.9642C26.0044 12.5081 25.7915 13.1693 25.2666 13.4411C24.7417 13.7129 24.1035 13.4923 23.8412 12.9484C23.6663 12.5857 23.0112 12.0893 21.9583 12.0893ZM11.3171 20.601C10.8922 20.1817 10.8676 19.4768 11.2723 19.0365C11.6736 18.5999 12.3588 18.5973 12.7843 19.006C12.8117 19.0281 12.8785 19.0812 12.9292 19.1172C13.0719 19.2186 13.3085 19.3678 13.6468 19.5219C14.3198 19.8284 15.4139 20.1628 17 20.1628C18.5861 20.1628 19.6802 19.8284 20.3532 19.5219C20.6915 19.3678 20.9281 19.2186 21.0708 19.1172C21.1422 19.0665 21.1902 19.0276 21.2157 19.006C21.2266 18.9968 21.2334 18.9908 21.2362 18.9883L21.2372 18.9873C21.6627 18.5796 22.3267 18.6002 22.7277 19.0365C23.1324 19.4768 23.116 20.1737 22.6911 20.593L22.6893 20.5948L22.6873 20.5967L22.6829 20.601L22.6724 20.6111L22.6443 20.6373C22.6225 20.6573 22.5942 20.6824 22.5595 20.7117C22.4901 20.7704 22.3948 20.8462 22.2726 20.9331C22.0279 21.107 21.6757 21.3247 21.2083 21.5376C20.2698 21.965 18.8848 22.3646 17 22.3646C15.1152 22.3646 13.7302 21.965 12.7917 21.5376C12.3243 21.3247 11.9721 21.107 11.7274 20.9331C11.6052 20.8462 11.5099 20.7704 11.4405 20.7117C11.4077 20.684 11.336 20.6187 11.3194 20.6032L11.3171 20.601Z"
            fill="#C2B4A3"
          />
        </svg>
      ),
    },
    {
      absuluteimg: absulute4,
      title: "Global Inspiration",
      pera: "Influenced by global trends, we bring you a diverse and dynamic collection, embodying the spirit of fashion from around the world.",
      icon: (
        <svg
          className="h-6.7 w-6.7 3xl:h-8.5 3xl:w-8.5"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.1666 11.5634L31.1666 11.6661C31.1666 12.8855 31.1666 13.4952 30.8731 13.994C30.5795 14.4928 30.0466 14.7889 28.9806 15.3811L27.8568 16.0055C28.6312 13.3873 28.8896 10.5742 28.9851 8.1685C28.9892 8.06535 28.9938 7.96093 28.9985 7.85541L29.0018 7.78149C29.9244 8.1019 30.4424 8.34077 30.7656 8.78916C31.1667 9.34568 31.1667 10.0849 31.1666 11.5634Z"
            fill="#C2B4A3"
          />
          <path
            d="M2.83337 11.5634L2.83338 11.6661C2.83341 12.8855 2.83343 13.4952 3.12695 13.994C3.42046 14.4928 3.95343 14.7889 5.01936 15.3811L6.14385 16.0059C5.36931 13.3876 5.11091 10.5743 5.0154 8.16851C5.0113 8.06535 5.00669 7.96094 5.00202 7.85541L4.99876 7.78132C4.0758 8.10181 3.55765 8.34069 3.23443 8.78916C2.83332 9.34568 2.83334 10.0849 2.83337 11.5634Z"
            fill="#C2B4A3"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.0003 2.83337C19.5269 2.83337 21.6086 3.05592 23.201 3.32459C24.8142 3.59678 25.6208 3.73287 26.2947 4.56289C26.9686 5.39291 26.933 6.29001 26.8618 8.08421C26.6172 14.2439 25.288 21.9375 18.0625 22.6181V27.625H20.0887C20.764 27.625 21.3454 28.1017 21.4778 28.7639L21.7459 30.1042H25.5C26.0868 30.1042 26.5625 30.5799 26.5625 31.1667C26.5625 31.7535 26.0868 32.2292 25.5 32.2292H8.50004C7.91324 32.2292 7.43754 31.7535 7.43754 31.1667C7.43754 30.5799 7.91324 30.1042 8.50004 30.1042H12.2542L12.5223 28.7639C12.6547 28.1017 13.2361 27.625 13.9114 27.625H15.9375V22.6181C8.71248 21.9372 7.38326 14.2437 7.13872 8.08421C7.06749 6.29001 7.03188 5.39291 7.70581 4.56289C8.37974 3.73287 9.18634 3.59678 10.7995 3.32459C12.392 3.05592 14.4736 2.83337 17.0003 2.83337ZM18.3492 8.78177L18.2099 8.53193C17.6716 7.56623 17.4025 7.08337 17 7.08337C16.5976 7.08337 16.3285 7.56623 15.7901 8.53193L15.6509 8.78177C15.4979 9.05619 15.4214 9.19341 15.3021 9.28394C15.1829 9.37448 15.0344 9.40808 14.7373 9.4753L14.4668 9.53649C13.4215 9.77301 12.8988 9.89127 12.7744 10.2912C12.6501 10.691 13.0064 11.1077 13.7191 11.9411L13.9035 12.1567C14.106 12.3935 14.2072 12.5119 14.2528 12.6584C14.2983 12.8049 14.283 12.9629 14.2524 13.2788L14.2245 13.5665C14.1168 14.6784 14.0629 15.2343 14.3885 15.4815C14.714 15.7286 15.2034 15.5033 16.1822 15.0526L16.4354 14.936C16.7136 14.808 16.8526 14.7439 17 14.7439C17.1475 14.7439 17.2865 14.808 17.5647 14.936L17.8179 15.0526C18.7966 15.5033 19.286 15.7286 19.6116 15.4815C19.9372 15.2343 19.8833 14.6784 19.7755 13.5665L19.7477 13.2788C19.7171 12.9629 19.7017 12.8049 19.7473 12.6584C19.7929 12.5119 19.8941 12.3935 20.0966 12.1567L20.281 11.9411C20.9937 11.1077 21.35 10.691 21.2256 10.2912C21.1013 9.89127 20.5786 9.77301 19.5332 9.53649L19.2628 9.4753C18.9657 9.40808 18.8172 9.37448 18.6979 9.28394C18.5787 9.19341 18.5022 9.0562 18.3492 8.78177Z"
            fill="#C2B4A3"
          />
        </svg>
      ),
    },
    {
      absuluteimg: absulute5,
      title: "Empowering Your Style",
      pera: "Beyond clothing, StyleLoom is a lifestyle. Join us on a journey of self-expression and empowerment through fashion.",
      icon: (
        <svg
          className="h-6.7 w-6.7 3xl:h-8.5 3xl:w-8.5"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.44641 5.44645C3.8512 7.04167 3.8512 9.62803 5.44641 11.2232L7.69571 13.4725C7.7126 13.453 7.73031 13.434 7.74886 13.4154L13.4155 7.74874C13.434 7.73025 13.453 7.71258 13.4725 7.69574L11.2232 5.44645C9.62799 3.85124 7.04163 3.85124 5.44641 5.44645Z"
            fill="#C2B4A3"
          />
          <path
            d="M14.9711 9.19438C14.9543 9.21385 14.9366 9.23285 14.9181 9.25134L9.25146 14.918C9.23292 14.9366 9.21385 14.9543 9.19432 14.9712L22.7768 28.5536C24.372 30.1488 26.9584 30.1488 28.5536 28.5536C30.1488 26.9584 30.1488 24.372 28.5536 22.7768L14.9711 9.19438Z"
            fill="#C2B4A3"
          />
          <path
            d="M22.8084 3.26856C23.0364 2.68831 23.8546 2.68831 24.0826 3.26856L24.6923 4.82021C24.7619 4.99736 24.9016 5.13759 25.0781 5.20746L26.624 5.81943C27.2021 6.04827 27.2021 6.86946 26.624 7.09831L25.0781 7.71027C24.9016 7.78014 24.7619 7.92037 24.6923 8.09752L24.0826 9.64918C23.8546 10.2294 23.0364 10.2294 22.8084 9.64918L22.1987 8.09752C22.1291 7.92037 21.9893 7.78014 21.8129 7.71027L20.2669 7.09831C19.6888 6.86946 19.6888 6.04827 20.2669 5.81943L21.8129 5.20746C21.9893 5.13759 22.1291 4.99736 22.1987 4.82021L22.8084 3.26856Z"
            fill="#C2B4A3"
          />
          <path
            d="M28.2868 12.9334C28.5148 12.3532 29.333 12.3532 29.561 12.9334L29.7833 13.4992C29.8529 13.6763 29.9926 13.8166 30.1691 13.8864L30.7328 14.1096C31.3109 14.3384 31.3109 15.1596 30.7328 15.3884L30.1691 15.6116C29.9926 15.6814 29.8529 15.8217 29.7833 15.9988L29.561 16.5645C29.333 17.1448 28.5148 17.1448 28.2868 16.5645L28.0645 15.9988C27.9949 15.8217 27.8552 15.6814 27.6787 15.6116L27.1151 15.3884C26.537 15.1596 26.537 14.3384 27.1151 14.1096L27.6787 13.8864C27.8552 13.8166 27.9949 13.6763 28.0645 13.4992L28.2868 12.9334Z"
            fill="#C2B4A3"
          />
          <path
            d="M7.27203 21.6852C7.50003 21.105 8.3182 21.105 8.5462 21.6852L8.7685 22.251C8.83811 22.4281 8.97783 22.5683 9.15433 22.6382L9.71798 22.8613C10.2961 23.0902 10.2961 23.9114 9.71798 24.1402L9.15433 24.3633C8.97783 24.4332 8.83811 24.5734 8.7685 24.7506L8.5462 25.3163C8.3182 25.8966 7.50003 25.8966 7.27203 25.3163L7.04973 24.7506C6.98012 24.5734 6.8404 24.4332 6.6639 24.3633L6.10025 24.1402C5.52214 23.9114 5.52214 23.0902 6.10025 22.8613L6.6639 22.6382C6.8404 22.5683 6.98012 22.4281 7.04973 22.251L7.27203 21.6852Z"
            fill="#C2B4A3"
          />
        </svg>
      ),
    },
    {
      absuluteimg: absulute6,
      title: "Sustainable Practices",
      pera: "StyleLoom is committed to sustainability, integrating eco-friendly practices into our production process.",
      icon: (
        <svg
          className="h-6.7 w-6.7 3xl:h-8.5 3xl:w-8.5"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.9376 9.99585C12.5296 10.5085 9.91675 13.4491 9.91675 17C9.91675 20.912 13.0881 24.0834 17.0001 24.0834C20.9121 24.0834 24.0834 20.912 24.0834 17C24.0834 13.4491 21.4706 10.5085 18.0626 9.99585V15.5834C18.0626 16.1702 17.5869 16.6459 17.0001 16.6459C16.4133 16.6459 15.9376 16.1702 15.9376 15.5834V9.99585Z"
            fill="#C2B4A3"
          />
          <path
            d="M18.4166 4.95829C18.4166 5.7407 17.7823 6.37496 16.9999 6.37496C16.2175 6.37496 15.5833 5.7407 15.5833 4.95829C15.5833 4.17589 16.2175 3.54163 16.9999 3.54163C17.7823 3.54163 18.4166 4.17589 18.4166 4.95829Z"
            fill="#C2B4A3"
          />
          <path
            d="M29.0417 18.4167C28.2593 18.4167 27.625 17.7824 27.625 17C27.625 16.2176 28.2593 15.5834 29.0417 15.5834C29.8241 15.5834 30.4583 16.2176 30.4583 17C30.4583 17.7824 29.8241 18.4167 29.0417 18.4167Z"
            fill="#C2B4A3"
          />
          <path
            d="M4.95841 18.4167C4.17601 18.4167 3.54175 17.7824 3.54175 17C3.54175 16.2176 4.17601 15.5834 4.95841 15.5834C5.74082 15.5834 6.37508 16.2176 6.37508 17C6.37508 17.7824 5.74082 18.4167 4.95841 18.4167Z"
            fill="#C2B4A3"
          />
          <path
            d="M9.487 7.48354C10.0402 8.03678 10.0402 8.93376 9.487 9.487C8.93376 10.0402 8.03678 10.0402 7.48354 9.487C6.93029 8.93376 6.93029 8.03678 7.48354 7.48354C8.03678 6.93029 8.93376 6.93029 9.487 7.48354Z"
            fill="#C2B4A3"
          />
          <path
            d="M26.5165 24.5131C27.0698 25.0663 27.0698 25.9633 26.5165 26.5165C25.9633 27.0698 25.0663 27.0698 24.5131 26.5165C23.9598 25.9633 23.9598 25.0663 24.5131 24.5131C25.0663 23.9598 25.9633 23.9598 26.5165 24.5131Z"
            fill="#C2B4A3"
          />
          <path
            d="M26.5165 9.487C25.9633 10.0402 25.0663 10.0402 24.5131 9.487C23.9598 8.93376 23.9598 8.03678 24.5131 7.48354C25.0663 6.93029 25.9633 6.93029 26.5165 7.48354C27.0698 8.03678 27.0698 8.93376 26.5165 9.487Z"
            fill="#C2B4A3"
          />
          <path
            d="M9.487 26.5164C8.93376 27.0697 8.03678 27.0697 7.48354 26.5164C6.93029 25.9632 6.93029 25.0662 7.48354 24.513C8.03678 23.9597 8.93376 23.9597 9.487 24.513C10.0402 25.0662 10.0402 25.9632 9.487 26.5164Z"
            fill="#C2B4A3"
          />
        </svg>
      ),
    },
  ];
  const journeyData = [
    {
      title: "Discover Trends",
      pera: "Explore our curated collection of over 1000 styles, spanning global fashion trends.",
    },
    {
      title: "Effortless Navigation",
      pera: "Intuitive filters and categories help you find the perfect pieces tailored to your style.",
    },
    {
      title: "Secure Checkout",
      pera: "Multiple payment options and encrypted transactions ensure a safe and hassle-free purchase.",
    },
    {
      title: "Unbox Happiness",
      pera: "Unbox a fashion-forward experience delivered right to your door, ready to elevate your style.",
    },
  ];
  const collectionData = [
    {
      capsule: "Womenswear",
      title: "Timeless A-line Evening Dress",
      fit: "Ankle-length",
      price: "109.99",
      img: product1,
    },
    {
      capsule: "Womenswear",
      title: "Floral Bloom Maxi Dress",
      fit: "Slim Fit",
      price: "54.99",
      img: product2,
    },
    {
      capsule: "Womenswear",
      title: "Elegant Evening Gown",
      fit: "Flowing skirt",
      price: "89.99",
      img: product3,
    },
    {
      capsule: "Womenswear",
      title: "Urban Chic Handbag",
      fit: "Spacious",
      price: "49.99",
      img: product4,
    },
    {
      capsule: "Womenswear",
      title: "Sophisticate Sun Hat",
      fit: "One size fits all",
      price: "24.99",
      img: product5,
    },
    {
      capsule: "Womenswear",
      title: "Boho Chic Printed Scarf",
      fit: "Lightweight",
      price: "19.99",
      img: product6,
    },
  ];
  return (
    <>
      {/* hero section code start */}
      <section className="section">
        <div className="relative">
          <div className="w-full h-[250px] ll:h-[350px] xll:h-[442px] 3xl:h-[624px] overflow-hidden rounded-t-[20px]">
            <img
              src={homeheroimg}
              alt="homeheroimg"
              className="block w-full h-full object-cover xll:object-none object-top hero__bg"
            />
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 p-2.5 bg-dark-6 rounded-10 translate-y-1/2 xll:p-4 3xl:p-5 3xl:rounded-[20px]">
            <Link
              to="/products"
              className="link hover:scale-105 transition-all duration-300"
            >
              <span>Shop Now</span>
              <span>
                <svg
                  className="w-5 h-5 3xl:w-6 3xl:h-6"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.875 3.125L16.25 3.125C16.4158 3.125 16.5747 3.19085 16.6919 3.30806C16.8092 3.42527 16.875 3.58424 16.875 3.75V13.125C16.875 13.4702 16.5952 13.75 16.25 13.75C15.9048 13.75 15.625 13.4702 15.625 13.125V5.25888L4.19194 16.6919C3.94786 16.936 3.55214 16.936 3.30806 16.6919C3.06398 16.4479 3.06398 16.0521 3.30806 15.8081L14.7411 4.375L6.875 4.375C6.52982 4.375 6.25 4.09518 6.25 3.75C6.25 3.40482 6.52982 3.125 6.875 3.125Z"
                    fill="white"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
        <div className="text-white border-2 border-t-0 border-dashed border-dark-15 rounded-xl ll:flex justify-between">
          <div className="pt-12.5 space-y-4 p-5 border-b-2 border-dashed border-dark-15 ll:w-1/2 ll:border-0 xll:p-14.5 xll:space-y-5 3xl:p-20 3xl:space-y-7.5">
            <div className="flex gap-2.5 3xl:gap-3.5">
              {herocapsule.map((item, i) => (
                <Link
                  to="/products"
                  key={i}
                  className="grow block py-2.5 border-2 border-dashed border-dark-20 text-center rounded-lg text-sm l-150 font-roboto-mono capitalize text-gray-70 ll:w-fit ll:grow-0 ll:px-4 xll:px-5 3xl:px-6 3xl:py-3.5 3xl:text-lg xll:text-base"
                >
                  <span>{item}</span>
                </Link>
              ))}
            </div>
            <h1 className="text-28 font-medium font-roboto uppercase text-white leading-120 xll:text-38 3xl:text-5xl">
              Elevate Your Style with StyleLoom
            </h1>
            <p className="pera text-gray-40">
              Explore a world of fashion at StyleLoom, where trends meet
              affordability. Immerse yourself in the latest styles and seize
              exclusive promotions.
            </p>
          </div>
          <CustomScrollTrigger
            onEnter={() => setcounterstart(true)}
            onExit={() => setcounterstart(false)}
          >
            <div className="grid grid-cols-2 ll:border-l-2 border-dashed border-dark-15 ll:h-full">
              {herocounter.map((item, i) => (
                <div
                  key={i}
                  className={`${
                    (i === 0 &&
                      "border-r-2 border-b-2 border-dashed border-dark-15") ||
                    (i === 1 && "border-b-2 border-dashed border-dark-15") ||
                    (i === 2 && "border-r-2 border-dashed border-dark-15")
                  } p-7.5 space-y-2.5 xll:p-12.5 xll:space-y-3`}
                >
                  <div className="text-3xl l-150 text-white font-roboto font-medium xll:text-34 3xl:text-50">
                    {counterstart && (
                      <CountUp
                        start={0}
                        end={item.count}
                        duration={i <= 1 ? 2 : 1.7}
                        delay={0}
                        separator=","
                        useEasing={true}
                        enableScrollSpy={true}
                        scrollSpyOnce={true}
                        scrollSpyDelay={200}
                        redraw={false}
                      />
                    )}
                    <span>{item.sembol}</span>
                  </div>
                  <p className="pera text-gray-50 font-roboto">{item.title}</p>
                </div>
              ))}
            </div>
          </CustomScrollTrigger>
        </div>
      </section>
      {/* hero section code end */}
      {/* trends section code start */}
      <section className="section">
        <div className="wrapper border-2 border-dashed border-dark-15 rounded-14 xll:rounded-2xl 3xl:rounded-20">
          <CommonTitle
            title="Crafting Trends, Inspiring Confidence"
            pera="Explore a world of fashion at StyleLoom, where trends meet affordability."
          />
          <div className="grid grid-cols-1 ll:grid-cols-2 xll:grid-cols-3">
            {trandsCirdData.map((item, i) => (
              <TrandsCird item={item} key={i} index={i} />
            ))}
          </div>
        </div>
      </section>
      {/* trends section code end */}
      {/* journey section code start */}
      <section className="section">
        <div className="wrapper border-2 border-dashed border-dark-15 rounded-14 xll:rounded-2xl 3xl:rounded-20 overflow-hidden">
          <CommonTitle
            title="Navigating the StyleLoom Fashion Journey."
            pera="At StyleLoom, we've designed a straightforward shopping experience to make fashion accessible."
            img={journeyabs}
          />
          <div className="grid grid-cols-1 ll:grid-cols-2 xll:grid-cols-4">
            {journeyData.map((item, i) => (
              <JourneyCird item={item} key={i} index={i} />
            ))}
          </div>
        </div>
      </section>
      {/* journey section code end */}
      {/* collection section code start */}
      <section className="section">
        <div className="wrapper border-2 border-dashed border-dark-15 rounded-14 xll:rounded-2xl 3xl:rounded-20">
          <CommonTitle
            title="Elevate Your Style with Our Latest Collection"
            pera="Each piece is crafted to enhance your fashion statement."
            img={collectionabs}
          />
          <div className="grid grid-cols-1 ll:grid-cols-3">
            {collectionData.map((item, i) => (
              <ProductCird item={item} key={i} index={i} />
            ))}
          </div>
        </div>
      </section>
      {/* collection section code end */}
      <TestimonialSection />
      <FaqSection />
      <ElevateSection />
    </>
  );
}

export default Home;
