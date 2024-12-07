"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Button from "@/components/ui/button";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current route

  // Smoothly scroll to section if on the same page
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false); // Close mobile menu after click
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
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-2">
        {/* Logo */}
        <div>
          <Link href="/">
            <Image src="/images/logo.png" alt="Logo" width={180} height={32} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-grow justify-center">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center space-x-6 text-gray-700 font-bold text-sm">
              <NavigationMenuItem>
                <button
                  onClick={() => handleNavigation("home")}
                  className="hover:text-secondary focus:outline-none"
                >
                  Home
                </button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <button
                  onClick={() => handleNavigation("about")}
                  className="hover:text-secondary focus:outline-none"
                >
                  About Us
                </button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <button
                  onClick={() => handleNavigation("services")}
                  className="hover:text-secondary focus:outline-none"
                >
                  Services
                </button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <button
                  onClick={() => handleNavigation("process")}
                  className="hover:text-secondary focus:outline-none"
                >
                  Process
                </button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <button
                  onClick={() => handleNavigation("portfolio")}
                  className="hover:text-secondary focus:outline-none"
                >
                  Portfolio
                </button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <button
                  onClick={() => handleNavigation("testimonials")}
                  className="hover:text-secondary focus:outline-none"
                >
                  Testimonials
                </button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Button
            onClick={() => handleNavigation("contactus")}
            variant="outline"
            rounded="rounded-full"
            className="px-3 py-1 text-sm"
          >
            Get in Touch →
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-gray-700 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col items-center space-y-4 text-gray-700 font-bold text-sm p-4">
              <NavigationMenuItem>
                <button
                  onClick={() => handleNavigation("home")}
                  className="block w-full text-center px-4 py-2 rounded-lg hover:bg-gray-100"
                >
                  Home
                </button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <button
                  onClick={() => handleNavigation("about")}
                  className="block w-full text-center px-4 py-2 rounded-lg hover:bg-gray-100"
                >
                  About Us
                </button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <button
                  onClick={() => handleNavigation("services")}
                  className="block w-full text-center px-4 py-2 rounded-lg hover:bg-gray-100"
                >
                  Services
                </button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <button
                  onClick={() => handleNavigation("portfolio")}
                  className="block w-full text-center px-4 py-2 rounded-lg hover:bg-gray-100"
                >
                  Portfolio
                </button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button
                  onClick={() => handleNavigation("contactus")}
                  variant="outline"
                  rounded="rounded-full"
                  className="px-3 py-1 w-full text-center text-sm"
                >
                  Get in Touch →
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      )}
    </header>
  );
};

export default Header;
