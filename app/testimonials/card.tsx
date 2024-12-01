import React from "react";
import Image, { StaticImageData } from "next/image";

interface TestimonialProps {
  index: number;
  image: string | StaticImageData;
  title: string;
  description: string;
}

const TestimonialCard = ({
  index,
  image,
  title,
  description,
}: TestimonialProps) => {
  const bgColor = index % 2 === 0 ? "bg-[#8ECCB963]" : "bg-white"; // Conditional background color

  return (
    <div
      className={`w-[430px] h-[350px] ${bgColor} flex flex-col items-center gap-4 mt-4 p-4`}
    >
      <div className="flex justify-center mt-2">
        <Image
          src={image}
          alt={title}
          className="w-[100px] h-[100px] rounded-full"
          width={300} // Replace with your actual image width
          height={200} // Replace with your actual image height
        />
      </div>
      <h2 className="text-[20px] font-semibold">{title}</h2>
      <p className="text-[18px] text-center">{description}</p>
    </div>
  );
};

export default TestimonialCard;
