"use client";
import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import TestimonialCard from "./card";
import { testimonials } from "./data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialList = () => {
  const sliderRef = useRef<Slider | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      sliderRef.current?.slickNext();
    }, 3000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For small tablets
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div
      id="testimonials"
      className="max-w-[1440px] mx-auto  sm:px-6 lg:px-8 overflow-x-hidden  h-[700px] pt-24 lg:pt-36 text-center px-4"
    >
      <h1 className="text-[36px] md:text-[44px]  text-[#1A906B] font-bold pb-5">
        Testimonials
      </h1>
      <Slider {...settings} ref={sliderRef}>
        {testimonials.map((testimonial, index) => (
          <div className="px-4" key={testimonial.id}>
            <TestimonialCard
              index={index}
              image={testimonial.image}
              title={testimonial.title}
              description={testimonial.description}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialList;
