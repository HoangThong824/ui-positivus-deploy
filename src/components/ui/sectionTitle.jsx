export default function SectionTitle({ title, description }) {
  return (
    <div className="w-full flex items-center gap-10 py-6">
      
      {/* Title box */}
      <div className=" bg-[#b9ff66] text-black px-[7px] py-1 rounded-lg font-semibold text-[40px] whitespace-nowrap">
        {title}
      </div>

      {/* Description */}
      <p className="text-black text-lg max-w-[720px] leading-relaxed">
        {description}
      </p>

    </div>
  );
}
