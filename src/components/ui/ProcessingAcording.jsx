import { useState } from "react";

const steps = [
  {
    id: 1,
    title: "Consultation",
    content: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  { id: 2, title: "Research and Strategy Development", content: "..." },
  { id: 3, title: "Implementation", content: "..." },
  { id: 4, title: "Monitoring and Optimization", content: "..." },
  { id: 5, title: "Reporting and Communication", content: "..." },
  { id: 6, title: "Continual Improvement", content: "..." },
];

export default function ProcessAccordion() {
  const [active, setActive] = useState(1);

  return (
    <div className="pt-[80px] w-full mx-auto space-y-6 p-4">
      {steps.map((item) => {
        const isActive = active === item.id;
        return (
          <div
            key={item.id}
            // shadow-[0_5px_0_0_rgba(0,0,0,1)]
            className={`rounded-[40px] border-2 border-black transition-all duration-300 shadow-[0_5px_0_0_rgba(0,0,0,1)] ${
              isActive ? "bg-[#B9FF66]" : "bg-[#F3F3F3]"
            }`}
          >
            {/* Header */}
            <button
              onClick={() => setActive(isActive ? null : item.id)}
              className="w-full flex items-center justify-between px-8 py-8 md:px-12"
            >
              <div className="flex items-center gap-6">
                <span className="text-3xl md:text-5xl font-bold">
                  {String(item.id).padStart(2, "0")}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-left">{item.title}</h3>
              </div>

              {/* Icon */}
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border-2 border-black bg-[#F3F3F3] text-2xl font-bold">
                {isActive ? "−" : "+"}
              </div>
            </button>

            {/* Content & Divider */}
            {isActive && (
              <div className="px-12 pb-10">
                {/* Border when active */}
                <div className="border-t-2 border-black mb-6"></div>
                <p className="text-base md:text-lg text-black leading-relaxed">
                  {item.content}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}