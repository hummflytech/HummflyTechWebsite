import Image, { type StaticImageData } from "next/image";
import React from "react";

interface TestimonialProps {
  index: number;
  image: string | StaticImageData;
  title: string;
  description: string;
}

const TestimonialCard = ({ index, image, title, description }: TestimonialProps) => {
  const bgColor = index % 2 === 0 ? "bg-[#8ECCB963]" : "bg-white"; // Conditional background color

  return (
    <div
      className={`w-full sm:w-[90%] md:w-[75%] lg:w-[430px] h-[360px] ${bgColor} flex flex-col items-center gap-4 mt-4 p-4 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-[1.02]`}
    >
      <div className="flex justify-center mt-2">
        <Image
          src={image}
          alt={title}
          className="w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] lg:w-[100px] lg:h-[100px] rounded-full object-cover"
          width={100}
          height={100}
        />
      </div>
      <h2 className="text-[16px] sm:text-[18px] lg:text-[20px] font-semibold text-center">{title}</h2>
      <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-center px-2 sm:px-4">{description}</p>
    </div>
  );
};

export default TestimonialCard;
