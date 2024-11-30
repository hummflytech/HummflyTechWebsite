import React from "react";
import TeamCard from "./card";
import {teamData} from "./data";

const TeamPage = () => {
  return (
    <div className="bg-[#2CCA9A] min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-[36px] font-bold mt-16 text-white">Meet Our Team</h1>
      <p className="text-[20px] mb-10 mt-6 text-center text-white">Get to know the passionate and talented individuals who drive our mission forward.</p>
      <div className="flex flex-wrap gap-8 justify-center max-w-7xl mx-auto p-2 mb-10">
        {teamData.map((member) => (
          <TeamCard
            key={member.id}
            name={member.name}
            role={member.role}
            description={member.description}
            image={member.image}
            socialLinks={member.socialLinks}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
