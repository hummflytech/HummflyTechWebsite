import React from 'react';
import Image from 'next/image';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-200 to-white flex items-center justify-center">
      <div className="mx-32 flex items-center justify-between gap-24 -mt-20">
        {/* Text Section */}
        <div className="text-left max-w-lg ">
          <h1 className="text-5xl font-bold text-gray-800 leading-snug">
            Transforming <span className="text-orange-500">Ideas</span> into
            Impactful Digital Solutions
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            We are Hummfly Tech, a software development agency specializing in
            delivering innovative, high-quality, and scalable digital products
            tailored to your business needs.
          </p>
          <button className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition-all">
            Start your Project →
          </button>
        </div>

        {/* Illustration Section */}
        <div className="relative w-full max-w-lg ml-12">
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
