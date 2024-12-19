// components/SimpleCard.tsx
interface SimpleCardProps {
  title: string;
  description: string;
  number: string;
}

const servicesCard: React.FC<SimpleCardProps> = ({
  number,
  title,
  description,
}) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md hover:bg-[#22B286] transition-shadow">
      <h1 className="text-[#22B286] hover:text-orange-500 group-hover:text-white font-medium text-2xl">
        {number}
      </h1>
      <h3 className="text-xl font-medium text-[#141414] mb-2">{title}</h3>
      <p className="text-[#141414] font-poppins font-regular font-poppins">
        {description}
      </p>
    </div>
  );
};

export default servicesCard;
