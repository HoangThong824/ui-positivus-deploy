const TestimonialCard = ({ name, role , text, active }) => (
  <div>
    {/* Speech Bubble */}
    <div className="relative border border-[#B9FF66] rounded-[40px] p-8 mb-10">
      <p className="text-white text-[18px] font-light leading-relaxed">
        {text}
      </p>
      {/* Triangle Arrow */}
      <div className="absolute -bottom-4 left-16 w-8 h-8 bg-[#191A23] border-r border-b border-[#B9FF66] rotate-45 transform"></div>
    </div>
    
    {/* Info */}
    <div className="ml-16">
      <h4 className="text-[#B9FF66] font-bold text-xl">{name}</h4>
      <p className="text-white">{role}</p>
    </div>
  </div>
);
export default TestimonialCard;