"use client";
import Image from "next/image";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    const YOUR_SERVICE_ID = "service_heks16s";
    const YOUR_TEMPLATE_ID = "template_trq93t4";
    const YOUR_PUBLIC_KEY = "9ltGQOMzE78qnrrhZ";

    emailjs
      .send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, formData, {
        publicKey: YOUR_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Email sent successfully!");
        },

        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send email Check your internet!");
        },
      );

    // Reset the form
    // setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div
      id="contactus"
      className="min-h-screen flex flex-col lg:flex-row p-6 bg-white shadow-lg shadow-[#919b99] mx-[50px] mb-20 ml-4 lg:ml-14 rounded"
    >
      <div className="text-center py-12 pb-4 w-full max-w-xs mx-auto lg:mx-0 lg:text-left lg:ml-8">
        <h1 className="text-left text-[41px] font-bold text-[#00B188]">
          Get In touch
        </h1>
        <h2 className="text-lg text-gray-700">
          We are here for you! How can we help?
        </h2>
        <form onSubmit={handleSubmit} className="mb-2 mt-4">
          <div className="mt-2">
            <label htmlFor="Name" className="block text-left">
              Name:
            </label>
            <input
              className="focus:outline-[#00B188] border-[#00B188] focus:shadow-outline border pl-2 border-black-300 rounded w-full lg:w-[310px] h-10"
              type="text"
              id="Name"
              name="name"
              placeholder="john"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>

          <div className="mt-4">
            <label htmlFor="Email" className="block text-left">
              Email:
            </label>
            <input
              className="focus:outline-[#00B188] border-[#00B188] focus:shadow-outline border pl-2 border-black-300 rounded w-full lg:w-[310px] h-10 mt-2"
              type="email"
              id="Email"
              name="email"
              placeholder="example@gmail.com"
              onChange={handleInputChange}
              value={formData.email}
              required
            />
          </div>

          <div className="mt-4">
            <label htmlFor="Message" className="block text-left pl-2">
              Message:
            </label>
            <textarea
              id="Message"
              className="w-full p-4 border resize-y focus:outline-[#00B188] border-[#00B188] rounded mt-2"
              rows={2}
              name="message"
              placeholder="Enter your text here..."
              value={formData.message}
              onChange={handleInputChange}
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
