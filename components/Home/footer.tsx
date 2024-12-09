import { LuInstagram } from "react-icons/lu";
import { FaTelegram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

import React from "react";

const Footer = () => {
  return (
    <div className="min-h-auto bg-teal-600  text-white flex flex-col items-center justify-center">
      <div className="bg-black p-8 rounded-br-[150px] rounded-bl-[150px]">
        <div className=" mx-auto px-6 py-8 grid  grid-cols-1 md:grid-cols-3 gap-8">
          {/* Subscription Section */}
          <div className="w-[400px] mr-[300px]">
            <h3 className="text-lg font-semibold mb-4">
              Subscribe to receive the latest updates, new insights, and new
              services.
            </h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="flex-grow px-4 py-2 rounded-l-[10px] border border-gray-400 focus:outline-none text-stone-950"
              />
              <button className="bg-teal-600 text-white px-4 py-2 rounded-r-[10px] hover:bg-teal-600">
                Subscribe
              </button>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-teal-600">
                  Footer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-600">
                  Why HummflyTech
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-600">
                  Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-600">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-600">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>Phone: +123-456-7890</p>
            <p>E-mail: contact@hummflytech.com</p>
          </div>
        </div>

        {/* Divider and Bottom Bar */}
        <div className="border-t border-gray-700 py-4">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm">
              Copyright © 2024 Hummfly Tech. All Rights Reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-teal-600">
                Terms of Service
              </a>
              <span>|</span>
              <a href="#" className="hover:text-teal-600">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="py-7">
        <div className="max-w-7xl mx-auto px-4 flex justify-center items-center space-x-6">
          <a href="#" className="text-white text-[20px]">
            <i className="fab fa-instagram"></i> Social Medias
          </a>
          <a href="#" className="px-3 py-2 bg-white rounded-[6px]">
            <i className="fab fa-instagram"></i>{" "}
            <LuInstagram size={30} color="#0B8F70" />
          </a>
          <a href="#" className=" px-3 py-2 bg-white rounded-[6px]">
            <i className="fab fa-facebook"></i>{" "}
            <FaTelegram size={30} color="#0B8F70" />
          </a>
          <a href="#" className="px-3 py-2 bg-white rounded-[6px]">
            <i className="fab fa-twitter"></i>{" "}
            <FaLinkedin size={30} color="#0B8F70" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
