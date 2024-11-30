"use client";
import React, { useRef, useState } from "react";
import { testimonials } from "./data"; // Assuming you have mock data
import TestimonialCard from "./card"; // Your TestimonialCard component
import "./styles.css"; // Import the CSS file

const TestimonialList = () => {
  const refContainer = useRef<HTMLDivElement | null>(null); // Use HTMLDivElement type for the ref
  const [index, setIndex] = useState(0); // Track the current index

  // Update the scroll position based on the current index
  const scrollToIndex = (index: number) => {
    if (refContainer.current) {
      const cardWidth = (refContainer.current.children[0] as HTMLElement).offsetWidth; // Cast to HTMLElement
      refContainer.current.scrollTo({
        left: index * cardWidth, // Scroll to the calculated position
        behavior: "smooth", // Smooth scroll transition
      });
    }
  };

  // Update the index based on the scroll position
  const updateIndex = () => {
    if (refContainer.current) {
      const scrollPosition = refContainer.current.scrollLeft;
      const containerWidth = refContainer.current.offsetWidth;
      const cardWidth = (refContainer.current.children[0] as HTMLElement).offsetWidth; // Cast to HTMLElement
      const newIndex = Math.floor((scrollPosition + containerWidth / 2) / cardWidth);
      setIndex(newIndex);
    }
  };

  // Handlers for next/prev buttons
  const goToNext = () => {
    setIndex((prevIndex) => Math.min(prevIndex + 1, testimonials.length - 1));
  };

  const goToPrev = () => {
    setIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  // Scroll to the correct position when the index changes
  React.useEffect(() => {
    scrollToIndex(index);
  }, [index]);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-2xl font-bold mb-6">What Our Clients Say</h2>

      {/* Testimonial Cards */}
      <div className="relative w-full">
        <div
          ref={refContainer}
          className="flex overflow-x-auto space-x-4 px-4 scrollbar-hide snap-x"
          onScroll={updateIndex} // Update index on scroll
          style={{ paddingBottom: "1rem" }}
        >
          {/* Render all testimonials */}
          {testimonials.map((testimonial, idx) => (
            <div className="snap-start shrink-0" key={idx}>
              <TestimonialCard
                image={testimonial.image}
                title={testimonial.title}
                description={testimonial.description}
                isMiddle={false} // Optional for the current design
              />
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
          onClick={goToPrev}
        >
          &#8592;
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
          onClick={goToNext}
        >
          &#8594;
        </button>
      </div>

      {/* Optional: Scroll indicator */}
      <div className="mt-4">
        <span>{index + 1} / {testimonials.length}</span>
      </div>
    </div>
  );
};

export default TestimonialList;
