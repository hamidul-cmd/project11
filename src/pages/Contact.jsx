import React from "react";
import CommonTitle from "../components/CommonTitle";
import testimonialabs from "../assets/testimonialabs.png";
import ProductTitle from "../components/ProductTitle";
import ContactCird from "../components/ContactCird";
import callabs from "../assets/callabs.png";
import mailabs from "../assets/mailabs.png";
import locabs from "../assets/locabs.png";
import ElevateSection from "../components/ElevateSection";
import FaqSection from "../components/FaqSection";
import TestimonialSection from "../components/TestimonialSection";
function Contact() {
  const contactInfo = [
    {
      icon: (
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.49371 7.32639C2.83398 8.98612 2.83398 11.6574 2.83398 17C2.83398 22.3426 2.83398 25.0139 4.49371 26.6736C6.15344 28.3333 8.82473 28.3333 14.1673 28.3333H19.834C25.1766 28.3333 27.8479 28.3333 29.5076 26.6736C31.1673 25.0139 31.1673 22.3426 31.1673 17C31.1673 11.6574 31.1673 8.98612 29.5076 7.32639C27.8479 5.66666 25.1766 5.66666 19.834 5.66666H14.1673C8.82473 5.66666 6.15344 5.66666 4.49371 7.32639ZM26.3169 10.6531C26.6925 11.1039 26.6316 11.7739 26.1808 12.1496L23.0692 14.7426C21.8135 15.7891 20.7957 16.6372 19.8975 17.2149C18.9618 17.8167 18.0505 18.1969 17.0007 18.1969C15.9508 18.1969 15.0395 17.8167 14.1038 17.2149C13.2056 16.6372 12.1878 15.7891 10.9322 14.7426L7.82046 12.1496C7.36966 11.7739 7.30875 11.1039 7.68442 10.6531C8.06008 10.2023 8.73005 10.1414 9.18085 10.5171L12.2393 13.0658C13.561 14.1672 14.4786 14.9294 15.2533 15.4277C16.0032 15.91 16.5118 16.0719 17.0007 16.0719C17.4895 16.0719 17.9981 15.91 18.748 15.4277C19.5227 14.9294 20.4403 14.1672 21.762 13.0658L24.8205 10.5171C25.2712 10.1414 25.9412 10.2023 26.3169 10.6531Z"
            fill="#C2B4A3"
          />
        </svg>
      ),
      title: "email",
      info: "support@StyleLoom.com",
      img: mailabs,
    },
    {
      icon: (
        <svg
          width="34"
          height="37"
          viewBox="0 0 34 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_146_3211)">
            <path
              d="M14.2193 7.53124L15.1387 9.17872C15.9684 10.6655 15.6354 12.6159 14.3285 13.9227C14.3285 13.9227 14.3285 13.9227 14.3285 13.9227C14.3284 13.9228 12.7435 15.508 15.6174 18.3819C18.4907 21.2552 20.0758 19.6716 20.0766 19.6708C20.0767 19.6708 20.0766 19.6708 20.0767 19.6708C21.3835 18.364 23.3339 18.0309 24.8206 18.8606L26.4681 19.7801C28.7131 21.033 28.9783 24.1814 27.0049 26.1548C25.8192 27.3405 24.3666 28.2632 22.7608 28.324C20.0576 28.4265 15.4669 27.7424 10.8619 23.1374C6.25695 18.5324 5.57282 13.9417 5.6753 11.2385C5.73617 9.63276 6.65882 8.18016 7.84457 6.99441C9.81792 5.02106 12.9663 5.2862 14.2193 7.53124Z"
              fill="#C2B4A3"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_146_3211"
              x="-4"
              y="0"
              width="42"
              height="42"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_146_3211"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_146_3211"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      ),
      title: "Phone",
      info: "+1 (555) 123-4567",
      img: callabs,
    },
    {
      icon: (
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.9993 2.83334C10.7401 2.83334 5.66602 8.50366 5.66602 14.875C5.66602 21.1964 9.28322 28.0676 14.9269 30.7055C16.2425 31.3204 17.7562 31.3204 19.0718 30.7055C24.7155 28.0676 28.3327 21.1964 28.3327 14.875C28.3327 8.50366 23.2586 2.83334 16.9993 2.83334ZM16.9993 17C18.5642 17 19.8327 15.7315 19.8327 14.1667C19.8327 12.6019 18.5642 11.3333 16.9993 11.3333C15.4345 11.3333 14.166 12.6019 14.166 14.1667C14.166 15.7315 15.4345 17 16.9993 17Z"
            fill="#C2B4A3"
          />
        </svg>
      ),
      title: "location",
      info: "Get Direction",
      img: locabs,
    },
  ];
  return (
    <>
      <section className="section">
        <div className="wrapper border-2 border-dashed border-dark-15 rounded-14 xll:rounded-2xl 3xl:rounded-20">
          <CommonTitle
            title="Your Partner in Every Step of Your Fashion Journey."
            pera="24/7 Assistance for Seamless Shopping and Unmatched Customer Satisfaction."
            img={testimonialabs}
          />
          <ProductTitle title="Contact Information" link={false} />
          <div className="grid grid-cols-1 ll:grid-cols-3">
            {contactInfo.map((item, index) => (
              <ContactCird key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>
      <TestimonialSection />
      <FaqSection />
      <ElevateSection />
    </>
  );
}

export default Contact;
