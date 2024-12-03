const CurvedConnector: React.FC = () => {
  return (
    <svg
      className="absolute left-1/2 -translate-x-1/2"
      width="150"
      height="80"
      viewBox="0 0 150 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0 C75 80, 75 80, 150 0"
        stroke="#FF6600"
        strokeWidth="2"
        strokeDasharray="5,5"
        fill="transparent"
      />
    </svg>
  );
};

export default CurvedConnector;
