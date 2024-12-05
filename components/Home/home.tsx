import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div
      id="home"
      className="min-h-screen bg-gradient-to-b from-teal-200 to-white flex items-center justify-center"
    >
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24 -mt-20">
        <div className="text-left max-w-lg w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-snug">
            Transforming <span className="text-orange-500">Ideas</span> into
            Impactful Digital Solutions
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-4">
            We are Hummfly Tech, a software development agency specializing in
            delivering innovative, high-quality, and scalable digital products
            tailored to your business needs.
          </p>
          <button className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition-all">
            Start your Project →
          </button>
        </div>

        <div className="relative w-full max-w-lg mt-6 md:mt-0 hidden md:block">
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
