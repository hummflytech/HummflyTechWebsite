"use client";
import Button from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import aboutImg from "../../public/images/AboutUsSection.png";
import aboutWoman from "../../public/images/aboutuswoman.png";
import Link from "next/link";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col gap-16 md:gap-28 md:max-w-[1440px] mx-auto px-4 mb-14 pt-24 lg:pt-28"
    >
      {/* About Section */}
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 text-center lg:text-center">
        <div className="flex-1">
          <h1 className="text-[36px] md:text-[44px]  text-[#1A906B] font-bold">
            About Us
          </h1>
          <h2 className="text-[24px]  md:text-[30px]  font-semibold mt-4">
            <span className="text-[#FF4500]">Hummfly Tech</span> Providing the
            best digital solutions to companies around the globe.
          </h2>
          <p className="mt-6 text-lg sm:text-xl leading-relaxed text-gray-600">
          We are a dynamic digital enterprise dedicated to driving business success in the digital age. With a focus on innovation, user-centric design, and cutting-edge technology, we deliver tailored solutions that transform challenges into opportunities. Our team of experts collaborates closely with you to create scalable, efficient, and impactful results that propel your business forward.
          </p>
          <Link as="our_team" href="/our_team">
            <Button
              variant="primary"
              rounded="rounded-full"
              className="mt-8 px-6 py-3 sm:px-8 sm:py-4 shadow-lg hover:bg-[#1A906B]/90 text-base sm:text-lg md:text-xl"
            >
              Get to know The Team
              <ArrowRight size={20} />
            </Button>
          </Link>
        </div>
        <div className="flex-1 hidden lg:block">
          <Image
            src={aboutImg}
            alt="About Us"
            width={587}
            height={539}
            className="rounded-lg max-w-full"
            priority
          />
        </div>
      </div>

      {/* Mission and Vision Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 text-center lg:text-left">
        <div className="flex-1">
          <div className="bg-[#F2F2F2] rounded-lg p-4 w-full max-w-sm sm:max-w-md mx-auto lg:mx-0 ">
            <Image
              src={aboutWoman}
              alt="About Woman"
              width={450}
              height={450}
              className="rounded-lg max-w-full"
              priority
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-8 sm:gap-10">
          <div>
            <h1 className="text-[24px] sm:text-[30] md:text-[36px] text-[#FF4500] font-semibold mb-4">
              Our Mission
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed text-gray-600">
              To deliver innovative digital solutions that empower communities, drive progress, and create lasting impact across Ethiopia, East Africa, and beyond.
            </p>
          </div>
          <div>
            <h1 className="text-[24px] sm:text-[30] md:text-[36px] text-[#FF4500] font-semibold mb-4">
              Our Vision
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed text-gray-600">
            To establish Ethiopia as a global hub for innovation, where cutting-edge technology and exceptional talent drive progress, recognition, and lasting impact on the world stage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
