"use client";
import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { mockData } from "./data";
import { PortFolio } from "./card";
import Image from "next/image";
import im1 from "../../public/images/Forward.png"; // Right Arrow Image
import im2 from "../../public/images/Back.png"; // Left Arrow Image

// Define the props type for the custom arrow components
interface ArrowProps {
  onClick?: () => void;
  className?: string;
}

const SlickArrowLeft: React.FC<ArrowProps> = ({ onClick }) => (
  <Image
    src={im2}
    alt="prevArrow"
    width={24}
    height={24}
    className="absolute top-1/2 left-[-20px] transform -translate-y-1/2 z-10 cursor-pointer"
    onClick={onClick}
  />
);

const SlickArrowRight: React.FC<ArrowProps> = ({ onClick }) => (
  <Image
    src={im1}
    alt="nextArrow"
    width={24}
    height={24}
    className="absolute top-1/2 right-[-20px] transform -translate-y-1/2 z-10 cursor-pointer"
    onClick={onClick}
  />
);

const Page: React.FC = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    appendDots: (dots) => (
      <div className="relative">
        <ul className="flex justify-center mt-8 space-x-2">{dots}</ul>
      </div>
    ),
  };

  return (
    <div className="mx-auto mt-16 mb-20">
      <h1 className="text-[40px] font-bold text-[#1A906B] text-center">
        Our Portfolio
      </h1>

      <p className="text-[24px] text-center mt-6 mb-10 max-w-[1400px] mx-auto">
        Explore some of our recent projects to see how we’ve helped businesses
        across various industries achieve their digital goals.
      </p>

      {[
        "Website Development",
        "Mobile Application Development",
        "UI/UX Design",
      ].map((sectionTitle, index) => (
        <div key={index} className="mt-20 mb-10 w-[1400px] mx-auto relative">
          <h1 className="text-[36px] font-bold text-[#1A906B] text-center mb-10">
            {sectionTitle}
          </h1>
          <Slider {...settings}>
            {mockData.map((item, idx) => (
              <PortFolio
                key={idx}
                image={item.image}
                title={item.title}
                description={item.description}
                cardBackgroundColor={index === 1 ? "white" : undefined}
                descriptionTextColor={index === 1 ? "black" : undefined}
                titleTextColor={index === 1 ? "black" : undefined}
                buttonBackgroundColor={index === 1 ? "#20B486" : undefined}
                buttonTextColor={index === 1 ? "white" : undefined}
              />
            ))}
          </Slider>
        </div>
      ))}
    </div>
  );
};

export default Page;
