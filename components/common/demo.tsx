"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-scroll";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation links
  const navigationLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "services", label: "Services" },
    { id: "process", label: "Process" },
    { id: "portfolio", label: "Portfolio" },
    { id: "testimonials", label: "Testimonials" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <Link to="home" smooth={true}>
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={180}
            height={32}
            className="cursor-pointer"
            
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-grow justify-center">


        <NavigationMenu>
            <NavigationMenuList className="flex items-center space-x-6 text-gray-700 font-bold text-sm">
              
                <NavigationMenuItem >
                  <Link
                    to={'about'}
                    smooth={true}
                    offset={-100}
                    className="hover:text-secondary focus:outline-none cursor-pointer"
                  > 
                  HOME                 
                  </Link>
                </NavigationMenuItem>
             
            </NavigationMenuList>
          </NavigationMenu>

          <NavigationMenu>
            <NavigationMenuList className="flex items-center space-x-6 text-gray-700 font-bold text-sm">
              {navigationLinks.map((link) => (
                <NavigationMenuItem key={link.id}>
                  <Link
                    to={link.id}
                    smooth={true}
                    offset={-100}
                    className="hover:text-secondary focus:outline-none cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Desktop Contact Link */}
        <div className="hidden lg:block">
          <Link
            to="contactus"
            smooth={true}
            offset={-100}
            className="px-3 py-1 text-sm rounded-full border border-gray-300 text-[#4AB181] hover:bg-gray-100 focus:outline-none cursor-pointer"
          >
            Get in Touch →
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col items-center space-y-4 text-gray-700 font-bold text-sm p-4">
              {navigationLinks.map((link) => (
                <NavigationMenuItem key={link.id}>
                  <Link
                    to={link.id}
                    smooth={true}
                    offset={-500}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-center px-4 py-2 rounded-lg hover:bg-gray-100 cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <Link
                  to="contactus"
                  smooth={true}
                  offset={-500}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center px-4 py-2 rounded-full border border-gray-300 text-[#4AB181] hover:bg-gray-100 cursor-pointer"
                >
                  Get in Touch →
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      )}
    </header>
  );
};

export default Header;

