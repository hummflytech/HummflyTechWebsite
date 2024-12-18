"use client";
import { LuInstagram } from "react-icons/lu";
import { FaTelegram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

import React, { useState } from "react";
import { usePathname } from "next/navigation";

// Define the expected response type
interface Response {
  success: boolean;
}

const Subscribe: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!email) {
      alert('Please enter a valid email address.');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbxgnGZgplF3DUjx1etwnEQy7Sns4zOUq5INYUYFTM8E37aUMfA7V9si75vhawZ6GNhNqw/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        console.error('Error response:', response);
        throw new Error('Network response was not ok');
      }

      // Specify the response type here
      const result: Response = await response.json();

      if (result.success) {
        alert('Thank you for subscribing!');
        setEmail('');
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error: unknown) {
      // Narrow down the type of error
      if (error instanceof Error) {
        console.error('Error submitting email:', error.message);
      }
      setError('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex">
      <input
        type="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-grow px-4 py-2 rounded-l-[10px] border border-gray-400 focus:outline-none text-stone-950"
      />
      <button
        onClick={handleSubmit}
        className="bg-teal-600 text-white px-4 py-2 rounded-r-[10px] hover:bg-teal-600"
        disabled={isLoading}
      >
        {isLoading ? 'Subscribing...' : 'Subscribe'}
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

const Footer: React.FC = () => {
  const pathname = usePathname(); // Get the current route

  // Smoothly scroll to section if on the same page
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle navigation for both same-page and cross-route
  const handleNavigation = (id: string) => {
    if (pathname === "/") {
      // If already on the Home page, scroll smoothly
      scrollToSection(id);
    } else {
      // Navigate to Home page and let smooth scrolling occur there
      window.location.href = `/#${id}`;
    }
  };

  return (
    <div className="min-h-auto bg-teal-600 text-white flex flex-col items-center text-center justify-evenly">
      <div className="bg-black p-8 rounded-br-[10%] md:rounded-br-[15%] lg:rounded-br-[20%] rounded-bl-[10%] w-full">
        <div className="mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* <div className="w-[400px] mr-[300px]">
            <h3 className="text-lg font-semibold mb-4">
              Subscribe to receive the latest updates, new insights, and new services.
            </h3>
            <Subscribe /> 
          </div> */}

          {/* Other Sections */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavigation("home")}
                  className="hover:text-secondary focus:outline-none"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("about")}
                  className="hover:text-secondary focus:outline-none"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("whyus")}
                  className="hover:text-secondary focus:outline-none"
                >
                  Why HummflyTech
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("services")}
                  className="hover:text-secondary focus:outline-none"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("portfolio")}
                  className="hover:text-secondary focus:outline-none"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("testimonials")}
                  className="hover:text-secondary focus:outline-none"
                >
                  Testimonials
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>Phone: +123-456-7890</p>
            <p>E-mail: contact@hummflytech.com</p>
          </div>
          <div className="">
          <h3 className="text-lg font-semibold mb-4 text-center">Social Medias</h3>
          <div className="flex flex-row justify-evenly">
          <a href="https://www.instagram.com/hummflytech/" className="px-3 py-2 bg-white rounded-[6px]" target="_blank">
            <LuInstagram size={30} color="#0B8F70" />
          </a>
          <a href="https://t.me/hummflytech" className="px-3 py-2 bg-white rounded-[6px]" target="_blank">
            <FaTelegram size={30} color="#0B8F70" />
          </a>
          <a href="https://www.linkedin.com/company/hummflytech/posts/?feedView=all" className="px-3 py-2 bg-white rounded-[6px]" target="_blank">
            <FaLinkedin size={30} color="#0B8F70" />
          </a></div>
        </div>
        </div>

        {/* Divider and Bottom Bar */}
        <div className="border-t border-gray-700 py-4">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm">
              Copyright © 2024 Hummfly Tech.  All Rights Reserved.
            </p>
            <div className="flex space-x-4">
            <p className="text-sm">
                Terms of Service
              </p>
              <span>|</span>
              <p className="text-sm">
                Privacy Policy
             </p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="py-5">
        
      </div>
    </div>
  );
};

export default Footer;
