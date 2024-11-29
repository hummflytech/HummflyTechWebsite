import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // Adjust the path based on your project structure
import type { StaticImageData } from "next/image";
import React from "react";

interface PortFolioProps {
  image: string | StaticImageData;
  title: string;
  description: string;
  cardBackgroundColor?: string;
  titleTextColor?: string; // Add dynamic title color
  descriptionTextColor?: string; // Add dynamic description color
  buttonText?: string;
  buttonBackgroundColor?: string;
  buttonTextColor?: string;
}

export const PortFolio = ({
  image,
  title,
  description,
  cardBackgroundColor = "#20B486",
  titleTextColor = "white", // Default title color
  descriptionTextColor = "white", // Default description color
  buttonText = "Explore here",
  buttonBackgroundColor = "#FF4500",
  buttonTextColor = "white",
}: PortFolioProps) => {
  return (
    <Card
      className="w-[430px] h-[400px] border-2 border-gray-300 mt-5 ml-5 rounded-t-[22px] relative"
      style={{ backgroundColor: cardBackgroundColor }}
    >
      <CardHeader className="h-[230px] p-0">
        <img
          src={typeof image === "string" ? image : image.src}
          alt={title}
          className="w-full h-full object-cover rounded-t-[22px]"
        />
      </CardHeader>
      <CardContent className="flex flex-col mt-4 px-4">
        <CardTitle
          className={`text-[18px] text-center mb-2 text-${titleTextColor}`}
        >
          {title}
        </CardTitle>
        <CardDescription className={`text-[15px] text-${descriptionTextColor}`}>
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <button
          type="button"
          className="absolute bottom-2 right-4 px-4 py-1 rounded-[30px] text-[15px]"
          style={{
            backgroundColor: buttonBackgroundColor,
            color: buttonTextColor,
          }}
        >
          {buttonText}
        </button>
      </CardFooter>
    </Card>
  );
};
