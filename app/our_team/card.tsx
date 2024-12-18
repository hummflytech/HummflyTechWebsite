import { Facebook, Linkedin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

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
const TeamCard = ({ name, role, description, image, socialLinks }: TeamCardProps) => {
  return (
<div className="w-[280px] h-[350px] flex flex-col items-center gap-2 border-2 border-white relative overflow-hidden group rounded-[20px] shadow-xl hover:shadow-2xl transition-shadow duration-300 ">
<Image
        src={image}
        alt={name}
        width={500} // Replace with your actual image width
        height={400} // Replace with your actual image height
        className="w-[200px] h-[200px] rounded-full mt-4 transition-transform duration-500 group-hover:scale-110"

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
          <a href={socialLinks.mail} className="transition-transform duration-300 hover:scale-125 bg-[#2CCA9A]">
            <Mail size={20} color="#2CCA9A" />
          </a>
        </li>
        <li>
          <a href={socialLinks.phone} className="bg-[#2CCA9A] transition-transform duration-300 hover:scale-125">
            <Phone size={20} color="#2CCA9A" />
          </a>
        </li>
        <li>
          <a href={socialLinks.linkedin} className="bg-[#2CCA9A] transition-transform duration-300 hover:scale-125">
            <Linkedin size={20} color="#2CCA9A" />
          </a>
        </li>
        <li>
          <a href={socialLinks.facebook} className="bg-[#2CCA9A] transition-transform duration-300 hover:scale-125">
            <Facebook size={20} color="#2CCA9A" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TeamCard;
