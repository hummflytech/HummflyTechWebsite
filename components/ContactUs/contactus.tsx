"use client";
import Image from "next/image";

export default function Page() {
  const handleInputChange = (): void => {
    console.log("clicked");
  };

  return (
    <div
      id="contactus"
      className="min-h-screen flex flex-col lg:flex-row p-6 bg-white shadow-lg shadow-[#919b99] mx-[50px] mb-20 ml-4 lg:ml-[100px] rounded"
    >
      <div className="text-center py-12 pb-4 w-full max-w-xs mx-auto lg:mx-0 lg:text-left">
        <h1 className="text-left text-[41px] font-bold text-[#00B188]">
          Get In touch
        </h1>
        <h2 className="text-lg text-gray-700">
          We are here for you! How can we help?
        </h2>
        <form className="mb-2 mt-4">
          <div className="mt-2">
            <label htmlFor="Name" className="block text-left">
              Name:
            </label>
            <input
              className="focus:outline-[#00B188] border-[#00B188] focus:shadow-outline border border-black-300 rounded w-full lg:w-[310px] h-10"
              type="text"
              id="Name"
              placeholder=""
              onChange={handleInputChange}
            />
          </div>

          <div className="mt-4">
            <label htmlFor="Email" className="block text-left">
              Email:
            </label>
            <input
              className="focus:outline-[#00B188] border-[#00B188] focus:shadow-outline border border-black-300 rounded w-full lg:w-[310px] h-10 mt-2"
              type="email"
              id="Email"
              placeholder=""
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mt-4">
            <label htmlFor="Message" className="block text-left">
              Message:
            </label>
            <textarea
              id="Message"
              className="w-full p-4 border resize-y focus:outline-[#00B188] border-[#00B188] rounded mt-2"
              rows={2}
              placeholder="Enter your text here..."
            />
          </div>

          <button
            className="font-poppins py-2 w-full lg:w-[300px] bg-[#22B286] text-white rounded-full hover:bg-[#1b945b] transition-colors mt-6"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="relative w-full max-w-lg mt-12 lg:mt-0 lg:ml-[200px]">
        <Image
          src="/images/contactUs.png"
          alt="External Image"
          width={400}
          height={300}
          className="mx-auto lg:mx-0"
        />
        <div className="mt-6 space-y-4">
          {/* Address Section */}
          <a
            href="http://maps.app.goo.gl/9rRaCtewwvDsJZ646"
            target="_blank"
            className="flex items-start space-x-2"
          >
            <Image
              src="/images/location.png"
              alt="location icon"
              width={25}
              height={30}
            />
            <h3 className="text-gray-700">4 Kilo Addis Ababa, Ethiopia</h3>
          </a>

          {/* Phone Section */}
          <a href="tel:+1234567890" className="flex items-center space-x-2">
            <Image
              src="/images/call.png"
              alt="call icon"
              width={25}
              height={30}
            />
            <h3 className="text-gray-700">+251938594992</h3>
          </a>

          {/* Email Section */}
          <a
            href="mailto:contactus@hummflytech.com"
            className="flex items-center space-x-2"
          >
            <Image
              src="/images/mail.png"
              alt="mail icon"
              width={30}
              height={30}
            />
            <h3 className="text-gray-700">contact@hummflytech.com</h3>
          </a>
        </div>
      </div>
    </div>
  );
}
