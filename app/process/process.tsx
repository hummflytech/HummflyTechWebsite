import ProcessFlow from "@/components/process/processFlow";
import type React from "react";

const Process: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-10">
      <h1 className="text-center text-3xl font-bold mb-10">Our Process</h1>
      <ProcessFlow />
    </div>
  );
};

export default Process;
