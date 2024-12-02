"use client";
import CustomButton from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import aboutImg from "../../public/images/AboutUsSection.png";
import aboutWoman from "../../public/images/aboutuswoman.png";
const Page = () => {
  return (
    <div className="flex flex-col gap-28 max-w-[1440px] mx-auto px-6 lg:px-16 mb-14 mt-16">
      {/* About Section */}
      <div className="flex flex-col lg:flex-row items-center gap-24 lg:gap-24 text-center lg:text-left">
        <div className="flex-1">
          <h1 className="text-[40px] text-[#1A906B] font-bold">About Us</h1>
          <h2 className="text-[36px] lg:text-[38px] font-semibold mt-4">
            <span className="text-[#FF4500]">Hummfly Tech</span> Providing The
            Best Software Solution To The Companies Around The Globe.
          </h2>
          <p className="mt-6 text-[18px] leading-relaxed text-gray-600">
            Forward-thinking software development agency dedicated to helping
            businesses thrive in the digital world. With a focus on technology
            innovation, user-centric design, and robust development practices,
            we bring unique digital experiences to life. Our team of seasoned
            developers, designers, and strategists work closely with you to turn
            complex challenges into efficient, scalable, and effective
            solutions.
          </p>
          <CustomButton
            as="a"
            href="about/our_team"
            variant="primary"
            rounded="rounded-full"
            className="mt-8 px-8 py-4 shadow-lg hover:bg-[#1A906B]/90"
          >
            Get to know The Team
            <ArrowRight size={20} />
          </CustomButton>
        </div>
        <div className="flex-1">
          <Image
            src={aboutImg}
            alt="About Us"
            width={587}
            height={539}
            className="rounded-lg"
            priority
          />
        </div>
      </div>

      {/* Mission and Vision Section */}
      <div className="flex flex-col lg:flex-row items-center gap-16 ml-10">
        <div className="flex-1">
          <div className="bg-[#F2F2F2] rounded-lg p-4 w-[494px]">
            <Image
              src={aboutWoman}
              alt="About Woman"
              width={450}
              height={450}
              className="rounded-lg"
              priority
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-10">
          <div>
            <h1 className="text-[30px] text-[#FF4500] font-semibold mb-4">
              Our Mission
            </h1>
            <p className="text-[18px] leading-relaxed text-gray-600">
              To empower businesses by creating tailored digital solutions that
              drive growth, efficiency, and innovation.
            </p>
          </div>
          <div>
            <h1 className="text-[30px] text-[#FF4500] font-semibold mb-4">
              Our Vision
            </h1>
            <p className="text-[18px] leading-relaxed text-gray-600">
              To empower businesses by creating tailored digital solutions that
              drive growth, efficiency, and innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
