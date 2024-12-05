"use client";
import type React from "react";
import Slider, { type Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import im2 from "../../public/images/Back.png"; // Left Arrow Image
import im1 from "../../public/images/Forward.png"; // Right Arrow Image
import { PortFolio } from "./card";
import { mockData } from "./data";

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

const Portfolio: React.FC = () => {
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
    responsive: [
      {
        breakpoint: 1334, // Tablets and smaller desktops
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 908, // Mobile devices (medium screens)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480, // Small mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="mx-auto mt-16 mb-20 px-4 max-w-[1400px] lg:px-2">
      <h1 className="text-[40px] font-bold text-[#1A906B] text-center">Our Portfolio</h1>

      <p className="text-[24px] text-left mt-6 mb-10 max-w-[1200px] mx-auto">
        Explore some of our recent projects to see how we’ve helped businesses across various industries achieve their
        digital goals.
      </p>

      {["Website Development", "Mobile Application Development", "UI/UX Design"].map((sectionTitle, index) => (
        <div key={sectionTitle} className="mt-20 mb-10 w-full relative">
          <h1 className="text-[36px] font-bold text-[#1A906B] text-center mb-10 mx-auto">{sectionTitle}</h1>
          <div className="max-w-[1400px] md:max-w-[900px] lg:max-w-[1440px] mx-auto">
            <Slider {...settings}>
              {mockData.map((item) => (
                <PortFolio
                  key={item.id}
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
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
