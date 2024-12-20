import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface PortFolioProps {
  id?: number;
  data?: Array<string>;
  image?: string | StaticImageData;
  title?: string;
  description?: string;
  cardBackgroundColor?: string;
  titleTextColor?: string;
  descriptionTextColor?: string;
  buttonText?: string;
  buttonBackgroundColor?: string;
  buttonTextColor?: string;
}

export const PortFolio = ({
  id,
  image,
  title,
  description,
  cardBackgroundColor = "#20B486",
  titleTextColor = "white", // Default title color
  descriptionTextColor = "white", // Default description color
  buttonText = "Read More",
  buttonBackgroundColor = "white",
  buttonTextColor = "#FF4500",
}: PortFolioProps) => {
  return (
    <Card
      className=" sm:w-[70%] md:w-[95%] lg:max-w-[430px] h-[510px] md:h-[450px] border-[1px] border-[#CAFFEF] mt-5 mx-auto sm:mx-3 rounded-t-[22px] relative transition-transform duration-300 ease-in-out hover:scale-[1.05] hover:shadow-lg pb-5"
      style={{ backgroundColor: cardBackgroundColor }}
    >
      <CardHeader className="h-[250px] p-0">
      <Image
        src={typeof image === "string" ? image : image.src}
        alt={title}
        width={300} // Match CSS width
        height={300} // Match CSS height
        className="min-w-full h-[250px] object-fill rounded-t-[22px]"
      />

      </CardHeader>
      <CardContent className="flex flex-col mt-4 px-4">
        <CardTitle
          className="text-[18px] text-center mb-2"
          style={{ color: titleTextColor }}
        >
          {title}
        </CardTitle>
        <CardDescription
          className={"text-[15px]"}
          style={{ color: descriptionTextColor }}
        >
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter>
      <Link href={`/portfolios/${id}`}>
  <div className="absolute bottom-2 right-4 p-2">
    <button
      type="button"
      className="px-4 py-1 rounded-[30px] text-[15px] transition-colors duration-200 ease-in-out hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2"
      style={{
        backgroundColor: buttonBackgroundColor,
        color: buttonTextColor,
      }}
      aria-label={`View portfolio: ${buttonText}`}
    >
      {buttonText}
    </button>
  </div>
</Link>

      </CardFooter>
    </Card>
  );
};
