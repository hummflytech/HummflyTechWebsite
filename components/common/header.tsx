"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Button from "../ui/button";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        <div>
          <Image src="/images/logo.png" alt="Logo" width={244} height={42} />
        </div>

        <div className="hidden md:flex flex-grow justify-center">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center space-x-8 text-gray-700 font-bold">
              <NavigationMenuItem>
                <NavigationMenuLink href="/" className="hover:text-secondary">
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/about"
                  className="hover:text-secondary"
                >
                  About Us
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/services"
                  className="hover:text-secondary"
                >
                  Services
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/portfolio"
                  className="hover:text-secondary"
                >
                  Portfolio
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/testimonials"
                  className="hover:text-secondary"
                >
                  Testimonials
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden md:block">
          <Button
            as="a"
            href="/contact"
            variant="outline"
            rounded="rounded-full"
            className="px-4 py-2"
          >
            Get in Touch →
          </Button>
        </div>

        <div className="md:hidden">
          <button
            className="text-gray-700 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col items-center space-y-4 text-gray-700 font-bold p-4">
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/"
                  className="block w-full text-center px-4 py-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 focus:bg-gray-200"
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/about"
                  className="block w-full text-center px-4 py-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 focus:bg-gray-200"
                >
                  About Us
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/services"
                  className="block w-full text-center px-4 py-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 focus:bg-gray-200"
                >
                  Services
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/portfolio"
                  className="block w-full text-center px-4 py-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 focus:bg-gray-200"
                >
                  Portfolio
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/testimonials"
                  className="block w-full text-center px-4 py-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 focus:bg-gray-200"
                >
                  Testimonials
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button
                  as="a"
                  href="/contact"
                  variant="outline"
                  rounded="rounded-full"
                  className="px-4 py-2 w-full text-center"
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
