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
    // Set up a timer to auto-advance slides every 3 seconds
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
        breakpoint: 480, // For mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, // Hide arrows on smaller screens
        },
      },
    ],
  };

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden overflow-y-hidden">
      <h1 className="text-[32px] sm:text-[36px] font-bold mt-16 text-[#1A906B] text-center mb-10">
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
