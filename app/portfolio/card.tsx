import React from "react";
import Image, { StaticImageData } from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface PortFolioProps {
  image: string | StaticImageData;
  title: string;
  description: string;
  cardBackgroundColor?: string;
  titleTextColor?: string;
  descriptionTextColor?: string;
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
  buttonBackgroundColor = "white",
  buttonTextColor = "#FF4500",
}: PortFolioProps) => {
  return (
    <Card
      className="w-[430px] h-[400px] border-[1px] border-[#CAFFEF] mt-5 ml-5 rounded-t-[22px] relative transition-transform duration-300 ease-in-out hover:scale-[1.01] hover:shadow-lg"
      style={{ backgroundColor: cardBackgroundColor }}
    >
      <CardHeader className="h-[230px] p-0">
        <Image
          src={typeof image === "string" ? image : image.src}
          alt={title}
          className="w-full h-full object-cover rounded-t-[22px] "
          width={300} // Replace with your actual image width
          height={200} // Replace with your actual image height
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
          className="absolute bottom-2 right-4 px-4 py-1 rounded-[30px] text-[15px] transition-colors duration-200 ease-in-out hover:bg-opacity-80"
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
