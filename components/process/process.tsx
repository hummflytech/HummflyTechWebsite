import React from "react";
import { processSteps } from "./steps";

const Process = () => {
  return (
    <div className="relative min-h-screen bg-gray-50">
      <div
        className="relative bg-cover bg-center min-h-screen"
        style={{ backgroundImage: "url('/images/HummflyBirdBg.png')" }}
      >
        <div className="max-w-6xl mx-auto p-8">
          <h2 className="text-4xl font-bold text-center text-primary mb-12">
            Our Process
          </h2>
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center space-x-6 p-6 rounded-lg shadow-lg ${step.color}`}
              >
                <div className="text-4xl">{step.icon}</div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
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
