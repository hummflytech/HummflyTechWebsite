"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import type React from "react";
import { useEffect, useState } from "react";
import { portfolioData } from "../data";

const PortfolioDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [dataIndex, setDataIndex] = useState(0);

  useEffect(() => {
    if (id) {
      setDataIndex(Number.parseInt(id, 10) - 1 || 0);
    }
  }, [id]);

  console.log(id, "dataaaa", portfolioData[dataIndex]);

  return (
    <div className="flex flex-col lg:flex-row items-center  gap-16 lg:gap-24 text-center lg:text-left px-6 p-5 md:pt-0 ">
      <div className="flex-1 text-center">
        <h1 className="text-[36px] md:text-[44px]  text-[#1A906B] font-bold">Portfolio</h1>
        <h1 className="text-[24px] sm:text-[30] md:text-[36px] text-[#FF4500] font-semibold mb-4">
          {portfolioData[dataIndex].title}
        </h1>
        <p className="text-lg sm:text-xl leading-relaxed text-gray-600">{portfolioData[dataIndex].description}</p>
      </div>

      {/* Left Section: Image */}

      {portfolioData[dataIndex].type === "mobile" ? (
        <div className="flex max-w-full justify-center shadow-sm bg-[#f6f8f9fb] py-5 flex-1 overflow-y-auto overflow-hidden lg:max-h-[600px] rounded-lg px-5 md:px-10 ">
          <div>
            {portfolioData[dataIndex].data.map((item) => (
              <div  key ={0} className="mb-8">
                <Image
                  src={item}
                  alt={`Portfolio image: ${portfolioData[dataIndex].title}`}
                  width={300}
                  height={300}
                  className="rounded-[30px] h-[500px]  max-w-full shadow-md hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  title={portfolioData[0].title}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex max-w-full justify-center shadow-sm bg-[#f6f8f9fb] py-5 flex-1 overflow-y-auto overflow-hidden lg:max-h-[600px] rounded-lg px-5 md:px-10 ">
          <div>
            {portfolioData[dataIndex].data.map((item) => (
              <div  key={0} className="mb-8">
                <Image
                  src={item}
                  alt={`Portfolio image: ${portfolioData[dataIndex].title}`}
                  width={300}
                  height={300}
                  className="rounded-[30px] h-[250px] w-[550px]  max-w-full shadow-md hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  title={portfolioData[0].title}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Right Section: Description */}
    </div>
  );
};

export default PortfolioDetail;
