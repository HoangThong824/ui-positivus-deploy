export default function SectionTitle({ title, description }) {
  return (
    <div className="w-full flex flex-wrap items-center gap-10">
      
      {/* Title box */}
      <div className=" bg-[#b9ff66] text-black px-[7px] py-1 rounded-lg font-medium text-[40px] whitespace-nowrap">
        {title}
      </div>

      {/* Description */}
      <p className="text-black text-lg max-w-[720px] leading-relaxed">
        {description}
      </p>

    </div>
  );
}
