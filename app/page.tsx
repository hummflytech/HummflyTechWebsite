import SimpleCard from "@/components/ui/servicesCard";
import serviceButton from "@/components/ui/serviceButton";


export default function Services() {
  return (
    <div>
      {/* Main Header */}
      <div className=" text-center py-12 pb-4">
        {/* <h1 className="text-4xl font-bold">Our Services</h1> */}
        <h1 className="text-4xl font-poppins text-[#FF4500] font-semibold text-[40px]" >Our Services</h1>
        

        <p className="mt-4 text-xl font-semibold text-[40.00px] text-[#E141414]">Comprehensive Digital Solutions for Your  <br/><br/> Business Needs</p>
      </div>

      {/* Services Cards */}
      {/* <main className="min-h-screen bg-gray-100 flex items-center justify-center"> */}
        <div className=" bg-gray-10 items-center justify-center grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-6 py-4">
          <SimpleCard
            number = "01"
            title="Custom software development"
            description="Design, development, and deployment of be spoke software tailored to your business."
          />
          <SimpleCard
            number = "02"
            title="Mobile App Development"
            description="Native and cross-platform mobile apps for iOS and Android."
          />
          <SimpleCard
            number = "03"
            title="Web Development"
            description="web development for responsive, scalable, and robust web solutions."
          />
          <SimpleCard
            number = "04"
            title="UI/UX Design"
            description="User-centered design solutions that enhance usability and engagement."
          />
          <SimpleCard
            number = "05"
            title="Cloud Solutions"
            description="Cloud integration and migration services to optimize scalability and performance."
          />
          <SimpleCard
            number = "06"
            title="AI & Machine Leanrning"
            description="Data-driven insights and analytics solutions for informed decision-making."
          /> 
          
          <div className=" ml-auto mx-auto px-4 py-2   mt-auto flex justify-center"> <button 
        type="button"
        className="font-poppins  font-bold mt-auto ml-[450px]  px-[10px] py-4 w-[300px] bg-[#22B286] text-white rounded hover:bg-[#1b945b] transition-colors"
      >
        Explore Our Services
      </button>
</div>
        
         
        </div>
      {/* </main> */}
    </div>
  );
}
