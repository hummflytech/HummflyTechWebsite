import Image from "next/image";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Button from "../ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50">
      <div className=" px-4 sm:px-6 lg:px-8 flex items-center py-4">
        <div>
          <Image src="/images/logo.png" alt="Logo" width={244} height={42} />
        </div>

        <div className="flex-grow flex justify-center">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center space-x-10 text-gray-700 font-bold">
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

        <div>
          <Button
            as="a"
            href="/contact"
            variant="outline"
            rounded="rounded-full"
            className="px-4 py-2"
          >
            Get in Touch→
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
