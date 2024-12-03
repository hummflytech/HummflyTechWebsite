import React from "react";

interface ProcessStepProps {
  title: string;
  description: string;
  isLeft: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  title,
  description,
  isLeft,
}) => {
  return (
    <div
      className={`flex items-center ${isLeft ? "flex-row" : "flex-row-reverse"} mb-10`}
    >
      <div className="flex-1 px-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="w-8 h-8 bg-orange-500 rounded-full border-4 border-white shadow-lg"></div>
    </div>
  );
};

export default ProcessStep;
