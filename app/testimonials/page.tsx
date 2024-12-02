"use client";
import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import TestimonialCard from "./card";
import { testimonials } from "./data"; // Mock data for testimonials
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialList = () => {
  const sliderRef = useRef<Slider | null>(null); // Explicitly type the ref as Slider or null

  useEffect(() => {
    // Set up a timer to auto-advance slides every 5 seconds
    const interval = setInterval(() => {
      sliderRef.current?.slickNext(); // Move to the next slide
    }, 3000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    // Pass the ref to the Slider component
    <div className="max-w-[1440px] mx-auto">
      <h1 className="text-[36px] font-bold mt-16 text-[#1A906B] text-center my-10">
        Testimonials
      </h1>
      <Slider {...settings} ref={sliderRef}>
        {testimonials.map((testimonial, index) => (
          <div className="max-w-[1000px] ml-8" key={index}>
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
