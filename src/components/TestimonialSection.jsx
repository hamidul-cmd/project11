import React from "react";
import testimonialabs from "../assets/testimonialabs.png";
import CommonTitle from "./CommonTitle";
import test1 from "../assets/test1.png";
import test2 from "../assets/test2.png";
import test3 from "../assets/test3.png";
import test4 from "../assets/test4.png";
import test5 from "../assets/test5.png";
import test6 from "../assets/test6.png";
import TestimonialCird from "./TestimonialCird";

function TestimonialSection() {
  const testimonialData = [
    {
      name: "Sarah Thompson",
      address: "New York, USA",
      rating: 5,
      twitter: "https://x.com/mdmaruf17204871",
      image: test1,
      text: "StyleLoom exceeded my expectations. The gown's quality and design made me feel like a queen. Fast shipping, too!",
    },
    {
      name: "Rajesh Patel",
      address: "Mumbai, India",
      rating: 4,
      twitter: "https://x.com/mdmaruf17204871",
      image: test2,
      text: "Absolutely love the style and warmth of the jacket. A perfect blend of fashion and functionality!",
    },
    {
      name: "Emily Walker",
      address: "London, UK",
      rating: 5,
      twitter: "https://x.com/mdmaruf17204871",
      image: test3,
      text: "Adorable and comfortable! My daughter loves her new outfit. Thank you, StyleLoom, for dressing our little fashionista.",
    },
    {
      name: "Alejandro Martinez",
      address: "Barcelona, Spain",
      rating: 4,
      twitter: "https://x.com/mdmaruf17204871",
      image: test4,
      text: "Impressed by the quality and style. These shoes turned heads at every event. StyleLoom, you've gained a loyal customer!",
    },
    {
      name: "Priya Sharma",
      address: "Delhi, India",
      rating: 5,
      twitter: "https://x.com/mdmaruf17204871",
      image: test5,
      text: "Perfect fit and exceptional quality. These jeans have become my go-to for casual and chic outings.",
    },
    {
      name: "Maria Rodriguez",
      address: "Mexico City, Mexico",
      rating: 4,
      twitter: "https://x.com/mdmaruf17204871",
      image: test6,
      text: "Stylish sneakers that don't compromise on comfort. StyleLoom knows how to balance fashion and functionality.",
    },
  ];
  return (
    <>
      <section className="section">
        <div className="wrapper border-2 border-dashed border-dark-15 rounded-14 xll:rounded-2xl 3xl:rounded-20">
          <CommonTitle
            title="The StyleLoom Testimonial Collection."
            pera="At StyleLoom, our customers are the heartbeat of our brand."
            img={testimonialabs}
          />
          <div className="grid grid-cols-1 ll:grid-cols-2 xll:grid-cols-3">
            {testimonialData.map((item, index) => (
              <TestimonialCird key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default TestimonialSection;
