import React from "react";
import ProcessStep from "./processStep";
import ProcessConnector from "./processConnector";

const ProcessFlow: React.FC = () => {
  const steps = [
    {
      title: "Discovery & Strategy",
      description:
        "We work with you to understand your vision, objectives, and requirements, setting a clear project strategy.",
      isLeft: true,
    },
    {
      title: "Design & Prototype",
      description:
        "Our designers create an intuitive and visually appealing interface, focusing on user experience.",
      isLeft: false,
    },
    {
      title: "Development",
      description:
        "Our developers bring the design to life with robust and scalable code, using industry best practices.",
      isLeft: true,
    },
    {
      title: "Testing & QA",
      description:
        "We perform rigorous testing to ensure your product is secure, efficient, and ready for launch.",
      isLeft: false,
    },
    {
      title: "Deployment & Support",
      description:
        "We ensure a smooth launch and provide ongoing support and maintenance as your business grows.",
      isLeft: true,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto relative">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <ProcessStep
            title={step.title}
            description={step.description}
            isLeft={step.isLeft}
          />
          {index < steps.length - 1 && <ProcessConnector />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProcessFlow;
