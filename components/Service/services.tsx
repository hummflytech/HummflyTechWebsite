import SimpleCard from "@/components/Service/servicesCard";

export default function Services() {
  return (
    <div id="services" className="pt-24 lg:pt-28 text-center px-4">
      {/* Header Section */}
      <div className="text-center ">
        <h1 className="text-[36px] md:text-[44px]  text-[#1A906B] font-bold">
          Our Services
        </h1>
        <p className="mt-4 text-[24px]  md:text-[30px]  font-semibold">
          Comprehensive{" "}
          <span className="text-orange-500"> Digital Solutions </span> for Your{" "}
          <br className="hidden md:block" />
          Business Needs
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-2 pt-8">
        <SimpleCard
          number="01"
          title="Custom Software Development"
          description="Design, development, and deployment of software tailored to your business."
        />
        <SimpleCard
          number="02"
          title="Mobile App Development"
          description="Native and cross-platform mobile apps for iOS and Android."
        />
        <SimpleCard
          number="03"
          title="Web Development"
          description="Responsive, scalable, and robust web solutions."
        />
        <SimpleCard
          number="04"
          title="Graphic Design"
          description="Creative visuals that communicate your brand and captivate audiences."
        />
        <SimpleCard
          number="05"
          title="Cloud Solutions"
          description="Cloud integration and migration services to optimize scalability and performance."
        />
        <SimpleCard
          number="06"
          title="AI & Machine Learning"
          description="Data-driven insights and analytics solutions for informed decision-making."
        />
      </div>

      {/* Button Section */}
      <div className="flex justify-center mt-6">
        <button
          type="button"
          className="font-poppins font-bold px-6 py-3 w-full sm:w-auto lg:w-[300px] bg-[#22B286] text-white rounded-full hover:bg-[#1b945b] transition-colors text-base sm:text-g md:text-xl "
        >
          Explore Our Services →
        </button>
      </div>
    </div>
  );
}
