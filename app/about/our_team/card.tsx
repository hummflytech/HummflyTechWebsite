import React from "react";
import { Mail, Phone, Linkedin, Facebook } from "lucide-react";
import Image from "next/image";

interface TeamCardProps {
  name: string;
  role: string;
  description: string;
  image: string;
  socialLinks: {
    mail: string;
    phone: string;
    linkedin: string;
    facebook: string;
  };
}
const TeamCard = ({
  name,
  role,
  description,
  image,
  socialLinks,
}: TeamCardProps) => {
  return (
    <div className="w-[280px] h-[320px] bg-[#2CCA9A] flex flex-col items-center gap-2 border-2 border-white text-white relative overflow-hidden group rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <Image
        src={image}
        alt={name}
        className="w-[220px] mt-4 transition-transform duration-500 group-hover:scale-110"
        width={300} // Replace with your actual image width
        height={200} // Replace with your actual image height
      />
      <p className="text-[18px] font-semibold">{name}</p>
      <p className="text-[13px] mt-[-8px] mb-4">{role}</p>

      {/* Hover description */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-4 z-10">
        <h1 className="text-[18px] font-semibold mb-4">{name}</h1>
        <p className="text-center text-[12px]">{description}</p>
      </div>

      {/* Social icons */}
      <ul className="flex gap-6 z-20 mt-4">
        <li>
          <a
            href={socialLinks.mail}
            className="transition-transform duration-300 hover:scale-125"
          >
            <Mail size={20} />
          </a>
        </li>
        <li>
          <a
            href={socialLinks.phone}
            className="transition-transform duration-300 hover:scale-125"
          >
            <Phone size={20} />
          </a>
        </li>
        <li>
          <a
            href={socialLinks.linkedin}
            className="transition-transform duration-300 hover:scale-125"
          >
            <Linkedin size={20} />
          </a>
        </li>
        <li>
          <a
            href={socialLinks.facebook}
            className="transition-transform duration-300 hover:scale-125"
          >
            <Facebook size={20} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TeamCard;
