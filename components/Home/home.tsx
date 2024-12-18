// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const Home = () => {
//   return (
//     <div
//       id="home"
//       className="min-h-screen bg-gradient-to-b from-teal-200 to-white flex items-center justify-center"
//     >
//       <div className="container mx-4 sm:mx-8 md:mx-16 lg:mx-32 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24 -mt-20">
//         {/* Text Section */}
//         <div className="text-left max-w-lg w-full mx-auto sm:text-center">
//           <h1 className="text-[34px] sm:text-[38px] md:text-[38px] font-bold text-gray-800 leading-snug text-center md:text-left">
//             Transforming <span className="text-orange-500">Ideas</span> into
//             Impactful Digital Solutions
//           </h1>
//           <p className="sm:text-lg md:text-xl text-gray-600 mt-4">
//             We are Hummfly Tech, a software development agency specializing in
//             delivering innovative, high-quality, and scalable digital products
//             tailored to your business needs.
//           </p>
//           <Link href="/form">
//             <button className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition-all">
//               Start Your Project →
//             </button>
//           </Link>
//         </div>

//         {/* Image Section */}
//         <div className="relative w-full max-w-lg mt-6 md:mt-0 hidden lg:block">
//           <Image
//             src="/images/illustration.png"
//             alt="Team Illustration"
//             width={500}
//             height={500}
//             className="mx-auto"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div
      id="home"
      className=" min-h-screen bg-gradient-to-b from-teal-200 to-white flex  items-center justify-center pt-10  pb-10 lg:pb-0 px-4"
    >
      <div className="  md:mx-0 lg:mx-32 flex flex-col  lg:flex-row  items-center justify-between gap-12 md:gap-4 ">
        <div className="text-center max-w-lg w-full mx-auto sm:text-center">
          <div>
            <p className="text-[32px] lg:text-[45px] font-bold text-[#00B188] pb-5">
              {" "}
              Well Come to <span className="text-orange-500 ">
                {" "}
                Hummfly
              </span>{" "}
              Tech
            </p>
          </div>
          <h1 className="text-[24px] md:text-[36px] font-bold text-gray-800 leading-snug text-center  md:text-center">
            Transforming <span className="text-orange-500">Ideas</span> into
            Impactful Digital Solutions
          </h1>
          <p className=" text-lg sm:text-xl text-gray-600 mt-4 ">
            We are Hummfly Tech, a vibrant digital company dedicated to crafting
            innovative, top-quality, and scalable digital solutions designed to
            meet your unique business requirements.
          </p>
          <Link href="/form">
            <button className="mt-6 px-6 p-3   bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition-all text-base sm:text-lg md:text-xl ">
              Start your Project →
            </button>
          </Link>
        </div>

        <div className="relative h-200 lg:w-full lg:h-auto block mt-6 md:mt-0">
          <Image
            src="/images/illustration.png"
            alt="Team Illustration"
            width={500}
            height={500}
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
