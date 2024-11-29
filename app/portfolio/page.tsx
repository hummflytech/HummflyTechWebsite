"use client";

import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { PortFolio } from "./card";
import { mockData } from "./data";

const PortfolioList = () => {
  const websiteRef = useRef<HTMLDivElement>(null);
  const mobileAppRef = useRef<HTMLDivElement>(null);
  const uiuxRef = useRef<HTMLDivElement>(null);

  const [websiteIndex, setWebsiteIndex] = useState(0);
  const [mobileAppIndex, setMobileAppIndex] = useState(0);
  const [uiuxIndex, setUiuxIndex] = useState(0);

  const itemsPerView = 3;

  // Function to update the indicator based on scroll position
  const updateIndicator = (
    ref: React.RefObject<HTMLDivElement>,
    setIndex: React.Dispatch<React.SetStateAction<number>>,
  ) => {
    if (ref.current) {
      const scrollPosition = ref.current.scrollLeft;
      const sectionWidth = ref.current.clientWidth;
      const newIndex = Math.round(scrollPosition / sectionWidth);
      setIndex(newIndex);
    }
  };

  const scrollLeft = (
    ref: React.RefObject<HTMLDivElement>,
    setIndex: React.Dispatch<React.SetStateAction<number>>,
  ) => {
    if (ref.current) {
      const sectionWidth = ref.current.clientWidth;
      ref.current.scrollBy({ left: -sectionWidth, behavior: "smooth" });
      updateIndicator(ref, setIndex); // Update the index after scrolling
    }
  };

  const scrollRight = (
    ref: React.RefObject<HTMLDivElement>,
    setIndex: React.Dispatch<React.SetStateAction<number>>,
  ) => {
    if (ref.current) {
      const sectionWidth = ref.current.clientWidth;
      ref.current.scrollBy({ left: sectionWidth, behavior: "smooth" });
      updateIndicator(ref, setIndex); // Update the index after scrolling
    }
  };

  // Update scroll position when index changes
  useEffect(() => {
    const refArray = [websiteRef, mobileAppRef, uiuxRef];
    const indexArray = [websiteIndex, mobileAppIndex, uiuxIndex];
    const currentRef = refArray[indexArray.indexOf(websiteIndex)];

    if (currentRef?.current) {
      const sectionWidth = currentRef.current.clientWidth;
      currentRef.current.scrollLeft = sectionWidth * websiteIndex;
    }
  }, [websiteIndex, mobileAppIndex, uiuxIndex]);

  useEffect(() => {
    const refArray = [websiteRef, mobileAppRef, uiuxRef];
    const indexArray = [websiteIndex, mobileAppIndex, uiuxIndex];
    const currentRef = refArray[indexArray.indexOf(mobileAppIndex)];

    if (currentRef?.current) {
      const sectionWidth = currentRef.current.clientWidth;
      currentRef.current.scrollLeft = sectionWidth * mobileAppIndex;
    }
  }, [websiteIndex, mobileAppIndex, uiuxIndex]);

  useEffect(() => {
    const refArray = [websiteRef, mobileAppRef, uiuxRef];
    const indexArray = [websiteIndex, mobileAppIndex, uiuxIndex];
    const currentRef = refArray[indexArray.indexOf(uiuxIndex)];

    if (currentRef?.current) {
      const sectionWidth = currentRef.current.clientWidth;
      currentRef.current.scrollLeft = sectionWidth * uiuxIndex;
    }
  }, [websiteIndex, mobileAppIndex, uiuxIndex]);

  const Section = ({
    title,
    refContainer,
    dataIndex,
    setIndex,
    buttonBackgroundColor,
    buttonTextColor,
    cardBackgroundColor,
    titleTextColor,
    descriptionTextColor,
  }: {
    title: string;
    refContainer: React.RefObject<HTMLDivElement>;
    dataIndex: number;
    setIndex: React.Dispatch<React.SetStateAction<number>>;
    buttonBackgroundColor?: string;
    buttonTextColor?: string;
    cardBackgroundColor?: string;
    titleTextColor?: string;
    descriptionTextColor?: string;
  }) => (
    <div>
      <h2 className="text-center p-4 text-[35px] my-6">{title}</h2>
      <div className="relative">
        <div
          ref={refContainer}
          className="flex overflow-x-auto space-x-4 px-4 scrollbar-hide snap-x"
          onScroll={() => updateIndicator(refContainer, setIndex)} // Update indicator when manually scrolling
        >
          {mockData.map((item) => (
            <div className="snap-start shrink-0" key={item.id}>
              <PortFolio
                image={item.image}
                title={item.title}
                description={item.description}
                buttonBackgroundColor={buttonBackgroundColor}
                buttonTextColor={buttonTextColor}
                cardBackgroundColor={cardBackgroundColor}
                titleTextColor={titleTextColor}
                descriptionTextColor={descriptionTextColor}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-4 items-center space-x-2">
          <button
            type="button"
            onClick={() => scrollLeft(refContainer, setIndex)} // Adjust scrollLeft with the right index
          >
            <CircleChevronLeft size={25} color="#20B486" strokeWidth={2} />
          </button>

          {mockData
            .slice(0, Math.ceil(mockData.length / itemsPerView))
            .map((_, index) => (
              <div
                key={mockData[index]?.id || `indicator-${index}`} // Use `id` if available, fallback to a prefixed index
                className={`w-3 h-3 m-6 rounded-full flex gap-4 ${index === dataIndex ? "bg-[#20B486]" : "bg-gray-300"}`}
              />
            ))}

          <button
            type="button"
            onClick={() => scrollRight(refContainer, setIndex)}
          >
            <CircleChevronRight size={25} color="#20B486" strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <main>
      <h1 className="text-[40px] text-[#20B486] font-bold text-center my-4">
        Our Portfolio
      </h1>
      <p className="max-w-[1040px] text-[20px] mx-auto text-center">
        Explore some of our recent projects to see how we’ve helped businesses
        across various industries achieve their digital goals.
      </p>

      {/* Website Development Section */}
      <Section
        title="Website Development"
        refContainer={websiteRef}
        dataIndex={websiteIndex}
        setIndex={setWebsiteIndex}
        buttonTextColor="#FF6347"
        buttonBackgroundColor="white"
      />

      {/* Mobile Application Development Section */}
      <Section
        title="Mobile Application Development"
        refContainer={mobileAppRef}
        dataIndex={mobileAppIndex}
        setIndex={setMobileAppIndex}
        cardBackgroundColor="white"
        descriptionTextColor="black"
        titleTextColor="black"
        buttonBackgroundColor="#20B486"
        buttonTextColor="white"
      />

      {/* UI/UX Design Section */}
      <Section
        title="UI/UX Design"
        refContainer={uiuxRef}
        dataIndex={uiuxIndex}
        setIndex={setUiuxIndex}
        buttonTextColor="#FF6347"
        buttonBackgroundColor="white"
      />
    </main>
  );
};

export default PortfolioList;
