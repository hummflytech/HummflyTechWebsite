interface SimpleCardProps {
    title: string;
    description: string;
    number: string;
    content: string;
  } 

  
  const serviceButton: React.FC<SimpleCardProps> = ({ number, title, description, content}) => {
    return (
      <div className="p-6 bg-white rounded-lg shadow-md hover:bg-[#22B286] transition-shadow">
        <h1 className="text-[#22B286] group-hover:text-white font-medium text-2xl">{number}</h1> 
        <h3 className="text-xl font-medium text-[#141414] mb-2">{title}</h3>
        <p className="text-[#141414] font-regular font-poppins">{description}</p>
        <button type="button">here</button>
      </div>
    );
  }; 


  
  export default serviceButton;
