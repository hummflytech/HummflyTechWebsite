"use client";
import Image from "next/image";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { LuInstagram } from "react-icons/lu";
import { FaTelegram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

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
          alert("Failed to send email. Check your internet!");
        },
      );

    // Reset the form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div id="contactus" className="px-4 mb-14 pt-24 lg:pt-28 bg-gray-50">
      <div className="min-h-screen flex flex-col lg:flex-row bg-white shadow-lg shadow-[#919b99]  lg:mx-20 mb-10 rounded-2xl pt-6 px-2 lg:px-12">         
        <div className="flex-1 p-4 lg:p-10">
          <h1 className="text-left text-[32px] lg:text-[45px] font-bold text-[#00B188] pb-6">
            Get In Touch
          </h1>
          <h2 className="text-lg text-gray-700 mb-8">
            Leave us a message, and we’ll get back to you as soon as possible.
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="Name" className="block text-left text-gray-600 mb-2">
                Name:
              </label>
              <input
                className="focus:outline-[#00B188] border-[#00B188] focus:shadow-outline border pl-4 rounded-xl w-full sm:max-w-[80%] lg:max-w-full  h-12"
                type="text"
                id="Name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label htmlFor="Email" className="block text-left text-gray-600 mb-2">
                Email:
              </label>
              <input
                className="focus:outline-[#00B188] border-[#00B188] focus:shadow-outline border pl-4 rounded-xl w-full sm:max-w-[80%] lg:max-w-full  h-12"
                type="email"
                id="Email"
                name="email"
                placeholder="example@gmail.com"
                onChange={handleInputChange}
                value={formData.email}
                required
              />
            </div>

            <div>
              <label htmlFor="Message" className="block text-left text-gray-600 mb-2">
                Message:
              </label>
              <textarea
                id="Message"
                className="w-full sm:max-w-[80%] lg:max-w-full  p-4 border focus:outline-[#00B188] border-[#00B188] rounded-xl resize-y"
                rows={4}
                name="message"
                placeholder="Enter your message here..."
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>

            <button
              className="font-poppins py-3 w-full sm:max-w-[80%] lg:max-w-full  bg-[#22B286] text-white rounded-xl hover:bg-[#1b945b] transition-colors shadow-lg"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="relative max-w-full mt-8 lg:mt-0 lg:ml-20 flex-1 p-4 lg:p-10">
          <Image
            src="/images/contactUs.png"
            alt="Contact Us Illustration"
            width={400}
            height={400}
            className="mx-auto w-full lg:mx-0 rounded-xl"
          />
          <div className="mt-8 space-y-6">
            {/* Address Section */}
            <a
              href="http://maps.app.goo.gl/9rRaCtewwvDsJZ646"
              target="_blank"
              className="flex items-start space-x-4 hover:bg-gray-100 p-2 rounded-xl transition"
            >
              <Image
                src="/images/location.png"
                alt="Location Icon"
                width={30}
                height={30}
              />
              <h3 className="text-gray-700">4 Kilo, Addis Ababa, Ethiopia</h3>
            </a>

            {/* Phone Section */}
            <a href="tel:+251938594992" className="flex items-center space-x-4 hover:bg-gray-100 p-2 rounded-xl transition">
              <Image
                src="/images/call.png"
                alt="Call Icon"
                width={30}
                height={30}
              />
              <h3 className="text-gray-700">+251938594992</h3>
            </a>

            {/* Email Section */}
            <a
              href="mailto:contactus@hummflytech.com"
              className="flex items-center space-x-4 hover:bg-gray-100 p-2 rounded-xl transition"
            >
              <Image
                src="/images/mail.png"
                alt="Mail Icon"
                width={30}
                height={30}
              />
              <h3 className="text-gray-700">contactus@hummflytech.com</h3>
            </a>

            {/* Social Media Section */}
            <h1 className="text-left text-[18px] lg:text-[26px] font-bold text-[#00B188] pt-6">
              Follow Us:
            </h1>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/hummflytech/"
                className="p-3 bg-white rounded-xl shadow-md hover:shadow-lg hover:bg-gray-100 transition"
                target="_blank"
              >
                <LuInstagram size={30} color="#0B8F70" />
              </a>
              <a
                href="https://t.me/hummflytech"
                className="p-3 bg-white rounded-xl shadow-md hover:shadow-lg hover:bg-gray-100 transition"
                target="_blank"
              >
                <FaTelegram size={30} color="#0B8F70" />
              </a>
              <a
                href="https://www.linkedin.com/company/hummflytech/posts/?feedView=all"
                className="p-3 bg-white rounded-xl shadow-md hover:shadow-lg hover:bg-gray-100 transition"
                target="_blank"
              >
                <FaLinkedin size={30} color="#0B8F70" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
