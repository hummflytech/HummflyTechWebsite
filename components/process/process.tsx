import React from "react";
import { processSteps } from "./steps";

const Process = () => {
  return (
    <div id="process" className="relative min-h-screen bg-gray-50  px-4  pt-24 lg:pt-28 text-center">
      <div
        className="relative bg-cover bg-center min-h-screen"
        style={{ backgroundImage: "url('/images/HummflyBirdBg.png')" }}
      >
        <div className="max-w-6xl mx-auto ">
          <h2 className="text-[36px] md:text-[44px]  text-[#1A906B] font-bold mb-12">
            Our Process
          </h2>
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center space-x-6 p-2 md:p-4 lg:p-6 rounded-lg shadow-lg ${step.color}`}
              >
                <div className="text-4xl">{step.icon}</div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 pt-2 text-base md:text-lg ">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
