import Arrow from "./Arrow";

const LearnMore = ({ dark = false, href = "#" }) => {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-3 group"
    >
      {/* Circle */}
      <div
        className={`
          w-9 h-9
          sm:w-10 sm:h-10 rounded-full
          flex items-center justify-center
          transition-all duration-300
          ${dark ? "bg-white" : "bg-black"}
          group-hover:scale-110
        `}
      >
        {/* Arrow SVG */}
        <Arrow color={dark ? "black" : "#b9ff66"} size={22} />
      </div>

      {/* Text */}
      <span
        className={`text-base lg:text-[20px] font-medium ${
          dark ? "text-white" : "text-black"
        }`}
      >
        Learn more
      </span>
    </a>
  );
};

export default function ServiceCard({
  title1,
  title2,
  image,
  theme = "gray", // green | dark | gray
}) {
  const themes = {
    green: {
      bg: "bg-[#b9ff66]",
      tag: "bg-white text-black",
      btn: "bg-black text-white",
    },
    dark: {
      bg: "bg-[#191a23]",
      tag: "bg-white text-black",
      btn: "bg-white text-black",
    },
    gray: {
      bg: "bg-[#f3f3f3]",
      tag: "bg-[#b9ff66] text-black",
      btn: "bg-black text-white",
    },
  };

  const select_theme = themes[theme];

  return (
    <div
      className={`
        relative
        w-full
        min-h-[260px] lg:min-h-[310px]
        rounded-[32px] lg:rounded-[45px]
        p-6 sm:p-8 lg:p-10
        flex justify-between items-center
        gap-6
        ${select_theme.bg}
        transition-all duration-300 shadow-[0_5px_0_0_rgba(0,0,0,1)]
      `}
    >
      {/* LEFT */}
      <div className="inline-block flex flex-col justify-between h-full ">
        {/* Title */}
        <span
          className={`inline-flex 
                    rounded-md 
                    font-medium 
                    text-2xl lg:text-[30px]
                    leading-tight
                     ${select_theme.tag}`}
        >
          {title1}
        </span>
        <br />
        <span
          className={`inline-flex  
                    rounded-md 
                    font-medium 
                    text-2xl lg:text-[30px]
                    leading-tight
                    ${select_theme.tag}`}
        >
          {title2}
        </span>

        {/* Button */}
        <div className="absolute left-6 bottom-6 lg:left-10 lg:bottom-10">
          <LearnMore dark={theme === "dark"} />
        </div>
      </div>

      {/* IMAGE */}
      <div className="max-w-[150px] sm:max-w-[150px] lg:max-w-[170px] xl:max-w-[210px] flex-shrink-0">
        {image}
      </div>
    </div>
  );
}
