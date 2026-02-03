import React, { useState } from "react";
import SectionTitle from "./ui/SectionTitle";
import TestimonialCard from "./ui/TestimonialCard";
import Container from "./ui/Container";

const testimonials = [
  {
    name: "John Smith 1",
    role: "Marketing Director at XYZ Corp",
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
  },
  {
    name: "John Smith 2",
    role: "Marketing Director at XYZ Corp",
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
  },
  {
    name: "John Smith 3",
    role: "Marketing Director at XYZ Corp",
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
  },
  {
    name: "John Smith 4",
    role: "Marketing Director at XYZ Corp",
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
  },
  {
    name: "John Smith 5",
    role: "Marketing Director at XYZ Corp",
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const prevIndex = current === 0 ? total - 1 : current - 1;
  const nextIndex = current === total - 1 ? 0 : current + 1;

  return (
    <Container className="mt-[140px]">
      <section className="bg-white font-sans">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
          <SectionTitle
            title="Testimonials"
            description={
              <>
                Hear from Our Satisfied Clients: Read Our Testimonials <br />
                to Learn More about Our Digital Marketing Services
              </>
            }
          />
        </div>

        {/* Main Slider Container */}
        <div className="bg-[#191A23] rounded-[45px] py-20 relative overflow-hidden">

          {/* Cards */}
          <div className="flex justify-center items-center gap-6 transition-all duration-500">

            {/* Left */}
            <div className="hidden lg:block lg:min-w-[600px] opacity-40 scale-90">
              <TestimonialCard {...testimonials[prevIndex]} />
            </div>

            {/* Center */}
            <div className="lg:min-w-[600px] min-h-[315px] mx-10 z-10">
              <TestimonialCard
                {...testimonials[current]}
                active
              />
            </div>

            {/* Right */}
            <div className="hidden lg:block lg:min-w-[600px] opacity-40 scale-90">
              <TestimonialCard {...testimonials[nextIndex]} />
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-16 flex justify-center items-center gap-10 md:gap-20">

            {/* Arrow Left */}
            <button
              onClick={prevSlide}
              className="text-white hover:text-[#B9FF66] transition-all"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-5">
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="cursor-pointer"
                >
                  <StarIcon active={i === current} />
                </span>
              ))}
            </div>

            {/* Arrow Right */}
            <button
              onClick={nextSlide}
              className="text-white hover:text-[#B9FF66] transition-all"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>

          </div>
        </div>
      </section>
    </Container>
  );
};

// Star icon
const StarIcon = ({ active = false }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill={active ? "#B9FF66" : "white"}
  >
    <path d="M7 0L8.89008 5.10992L14 7L8.89008 8.89008L7 14L5.10992 8.89008L0 7L5.10992 5.10992L7 0Z" />
  </svg>
);

export default Testimonials;
