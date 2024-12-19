import React from "react";
import Image from "next/image";
import { GetStaticProps, GetStaticPaths } from "next";
import {portfolioData} from "./[id]/data";

interface PortfolioDetailProps {
  portfolio: {
    id: string;
    title: string;
    image: string;
    description: string;
    details: string;
  };
}

const PortfolioDetail: React.FC<PortfolioDetailProps> = ({ portfolio }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 text-center lg:text-left px-6 py-12">
      {/* Left Section: Image */}
      <div className="flex-1">
        <Image
          src={portfolio.image}
          alt={portfolio.title}
          width={587}
          height={539}
          className="rounded-lg max-w-full shadow-md"
          priority
        />
      </div>

      {/* Right Section: Description */}
      <div className="flex-1">
        <h1 className="text-[36px] md:text-[44px] text-[#1A906B] font-bold">
          {portfolio.title}
        </h1>
        <p className="mt-6 leading-relaxed text-gray-600 text-[15px]">
          {portfolio.description}
        </p>
        <p className="mt-4 leading-relaxed text-gray-600 text-[15px]">
          {portfolio.details}
        </p>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = portfolioData.map((item) => ({
    params: { id: item.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params!;
  const portfolio = portfolioData.find((item) => item.id === id);

  return {
    props: { portfolio },
  };
};

export default PortfolioDetail;
