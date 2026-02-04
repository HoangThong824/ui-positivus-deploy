export default function SectionTitle({ title, description }) {
  return (
    <div className="w-full flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
      
      {/* Title box */}
      <div className=" bg-[#b9ff66] text-black px-[7px] py-1 rounded-lg font-medium 
                      text-2xl sm:text-3xl lg:text-[40px] w-fit md:whitespace-nowrap">
        {title}
      </div>

      {/* Description */}
      <p className="text-black text-sm sm:text-base lg:text-lg 
                    max-w-full md:max-w-[720px] leading-relaxed">
        {description}
      </p>

    </div>
  );
}
