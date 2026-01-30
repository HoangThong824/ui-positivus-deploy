import React from 'react';
import SectionTitle from './ui/sectionTitle';
import TestimonialCard from './ui/testimonialCard';
import Container from './ui/container';
const Testimonials = () => {
  return (
    <Container className="pt-[140px] pb-[100px]">
      <section className="bg-white font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
        <SectionTitle 
          title="Testimonials"
          description={<>
            Hear from Our Satisfied Clients: Read Our Testimonials <br/> to Learn More about Our Digital Marketing Services
          </>}
        />
        
      </div>

      {/* Main Slider Container */}
      <div className="bg-[#191A23] rounded-[45px] py-20 px-6 md:px-12 relative overflow-hidden">
        
        {/* Carousel Content (Mockup for multiple cards) */}
        <div className="flex justify-center items-start gap-10 overflow-hidden">
          
          {/* Side Card (Left - Partial) */}
          <div className="hidden lg:block opacity-40 min-w-[600px] transform -translate-x-1/2">
             <TestimonialCard />
          </div>

          {/* Center Card (Active) */}
          <div className="min-w-full md:min-w-[600px]">
            <TestimonialCard 
              name="John Smith" 
              role="Marketing Director at XYZ Corp"
              active={true}
            />
          </div>

          {/* Side Card (Right - Partial) */}
          <div className="hidden lg:block opacity-40 min-w-[600px] transform translate-x-1/2">
             <TestimonialCard />
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="mt-16 flex justify-center items-center gap-10 md:gap-20">
          {/* Arrow Left */}
          <button className="text-white hover:text-[#B9FF66] transition-all">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          </button>

          {/* Pagination Dots */}
          <div className="flex gap-4">
            <StarIcon active={true} />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>

          {/* Arrow Right */}
          <button className="text-white hover:text-[#B9FF66] transition-all">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </section>
    </Container>
  );
};


// star icon component
const StarIcon = ({ active = false }) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill={active ? "#B9FF66" : "white"}>
    <path d="M7 0L8.89008 5.10992L14 7L8.89008 8.89008L7 14L5.10992 8.89008L0 7L5.10992 5.10992L7 0Z" />
  </svg>
);

export default Testimonials;