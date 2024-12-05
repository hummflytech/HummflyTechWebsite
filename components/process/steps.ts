type Step = {
  title: string;
  description: string;
  icon: string;
  color: string;
};

export const processSteps: Step[] = [
  {
    title: "Discovery & Strategy",
    description:
      "We work with you to understand your vision, objectives, and requirements, setting a clear project strategy.",
    icon: "🔍",
    color: "bg-orange-100",
  },
  {
    title: "Design & Prototype",
    description:
      "Our designers create an intuitive and visually appealing interface, focusing on user experience.",
    icon: "🎨",
    color: "bg-green-100",
  },
  {
    title: "Development",
    description:
      "Our developers bring the design to life with robust and scalable code, using industry best practices.",
    icon: "💻",
    color: "bg-gray-100",
  },
  {
    title: "Testing & QA",
    description:
      "We perform rigorous testing to ensure your product is secure, efficient, and ready for launch.",
    icon: "🔧",
    color: "bg-green-100",
  },
  {
    title: "Deployment & Support",
    description:
      "We ensure a smooth launch and provide ongoing support and maintenance as your business grows.",
    icon: "🚀",
    color: "bg-orange-100",
  },
];
