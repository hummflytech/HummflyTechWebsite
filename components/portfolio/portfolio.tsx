"use client";
import React, { useState, useRef } from "react";
import Slider, { type Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import im2 from "../../public/images/Back.png";
import im1 from "../../public/images/Forward.png";
import { PortFolio } from "./card";
import { mockData } from "./data";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

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
  const [expanded, setExpanded] = useState(false);
  const webDevRef = useRef<HTMLDivElement | null>(null);

  const handleExpand = () => setExpanded(true);
  const handleShrink = () => {
    setExpanded(false);
    webDevRef.current?.scrollIntoView({ behavior: "smooth" });
  };

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
        <ul className="flex align-middle justify-center mt-8 space-x-2">{dots}</ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1334,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 908,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
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
    <div
      id="portfolio"
      className="mx-auto  mb-20 px-4 md:px-6 lg:px-10 max-w-[1400px] overflow-hidden pt-24 lg:pt-36 text-center"
    >
      <h1 className="text-[36px] md:text-[44px]  text-[#1A906B] font-bold">
      Our Team Members Portfolio
      </h1>

      <p className="text-lg sm:text-xl text-gray-600 p-2 sm:p-10 md:px-20 lg:px-40">
        Explore some of our recent projects to see how we’ve helped businesses
        across various industries achieve their digital goals.
      </p>

      <div ref={webDevRef} className="mt-20 mb-10 w-full justify-center">
        {/* <h1 className="text-[24px] sm:text-[30] md:text-[36px] text-[#FF4500] font-semibold">
          Website Development
        </h1> */}
        <div className="w-full max-w-[1400px] mx-auto px-auto justify-center items-center">
          <Slider {...settings}>
            {mockData.map((item) => (
              <PortFolio
                key={item.id}
                id= {item.id}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            ))}
          </Slider>
        </div>
      </div>

      {!expanded && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleExpand}
            className="bg-[#1A906B] text-white rounded-full p-4 shadow-lg hover:bg-[#20B486] transition-all duration-300"
          >
            <FaChevronDown className="text-2xl" />
          </button>
        </div>
      )}

      {expanded && (
        <div className="mt-10">
          <div className="mt-20 mb-10 w-full">
            <h1 className="text-[24px] sm:text-[30] md:text-[36px] text-[#FF4500] font-semibold">
              Mobile Application Development
            </h1>
            <div className="w-full max-w-[1400px] mx-auto">
              <Slider {...settings}>
                {mockData.map((item) => (
                  <PortFolio
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </Slider>
            </div>
          </div>

          <div className="mt-20 mb-10 w-full">
            <h1 className="text-[24px] sm:text-[30] md:text-[36px] text-[#FF4500] font-semibold">
              UI/UX Design
            </h1>
            <div className="w-full max-w-[1400px] mx-auto">
              <Slider {...settings}>
                {mockData.map((item) => (
                  <PortFolio
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </Slider>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button
              onClick={handleShrink}
              className="bg-[#1A906B] text-white rounded-full p-4 shadow-lg hover:bg-[#20B486] transition-all duration-300"
            >
              <FaChevronUp className="text-2xl" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
