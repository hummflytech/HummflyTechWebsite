import React from "react";
import { reasons } from "./reasons";
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <div
      className="relative bg-cover bg-center min-h-screen"
      style={{ backgroundImage: "url('/images/HummflyBirdBg.png')" }}
    >
      <div className="bg-white bg-opacity-80 min-h-screen flex flex-col items-center py-20 px-6">
        <h2 className="text-3xl font-bold mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-6 w-12 h-12 relative">
                <Image
                  src={reason.icon}
                  alt="Icon"
                  layout="fill" // Allows the image to fill the parent container
                  objectFit="contain" // Ensures the image is contained within the given dimensions
                />
              </div>
              <p className="text-gray-700">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
