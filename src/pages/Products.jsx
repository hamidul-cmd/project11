import React from "react";
import CommonTitle from "../components/CommonTitle";
import testimonialabs from "../assets/testimonialabs.png";
import ProductTitle from "../components/ProductTitle";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";
import ProdactCird2 from "../components/ProdactCird2";
import TestimonialSection from "../components/TestimonialSection";
import FaqSection from "../components/FaqSection";
import ElevateSection from "../components/ElevateSection";

function Products() {
  const dressCollection = [
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
  ];
  const accessoriesCollection = [
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
  const handbagCollection = [
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
  ];

  return (
    <>
      <section className="section ">
        <div className="wrapper border-2 border-dashed border-dark-15 rounded-14 xll:rounded-2xl 3xl:rounded-20">
          <CommonTitle
            title="Explore the Latest Trends and Timeless Classics"
            pera="Dive into the world of fashion excellence at StyleLoom. Our curated selection brings together the latest trends and timeless classics"
            img={testimonialabs}
          />
          <ProductTitle title="Dress Collection" link={true} />
          <div className="grid grid-cols-1 ll:grid-cols-3 border-b-2 border-dashed border-dark-15">
            {dressCollection.map((item, index) => (
              <ProdactCird2 key={index} item={item} index={index} />
            ))}
          </div>
          <ProductTitle title="Accessories" link={true} />
          <div className="grid grid-cols-1 ll:grid-cols-3 border-b-2 border-dashed border-dark-15">
            {accessoriesCollection.map((item, index) => (
              <ProdactCird2 key={index} item={item} index={index} />
            ))}
          </div>
          <ProductTitle title="Bags and HandBags" link={true} />
          <div className="grid grid-cols-1 ll:grid-cols-3">
            {handbagCollection.map((item, index) => (
              <ProdactCird2 key={index} item={item} index={index} />
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

export default Products;
