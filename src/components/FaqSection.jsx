import React from "react";
import CommonTitle from "./CommonTitle";
import faqabs from "../assets/faqabs.png";
import FaqCard from "./FaqCard";

function FaqSection() {
  const faqData = [
    {
      question: "How can I place an order on StyleLoom?",
      answer:
        "Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.",
    },
    {
      question: "Can I modify or cancel my order after placing it?",
      answer:
        "Unfortunately, once an order is confirmed, modifications or cancellations may not be possible. Please review your order carefully before completing the purchase.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept a variety of payment methods, including credit/debit cards, net banking, and select digital wallets. Choose the option that suits you best during checkout.",
    },
    {
      question: "How do I initiate a return?",
      answer:
        "Visit our Returns page and follow the provided instructions. Ensure your item meets our return criteria, and our team will guide you through the process.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is dispatched, you'll receive a tracking number via email. Use this number to track your package in real-time on our website.",
    },
    {
      question: "Do you offer exchanges for products?",
      answer:
        "At this time, we don't offer direct product exchanges. If you'd like a different item, please initiate a return and place a new order.",
    },
  ];
  return (
    <>
      <section className="section">
        <div className="wrapper border-2 border-dashed border-dark-15 rounded-14 xll:rounded-2xl 3xl:rounded-20 overflow-hidden">
          <CommonTitle
            title="Have Questions? We Have Answers."
            pera="Ease into the world of StyleLoom with clarity. Our FAQs cover a spectrum of topics."
            img={faqabs}
          />
          <div className="grid grid-cols-1 ll:grid-cols-2">
            {faqData.map((item, index) => (
              <FaqCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default FaqSection;
