import Arrow from "./Arrow";

const LearnMore = ({ dark = false, href = "#" }) => {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-3 group cursor-pointer"
    >
      {/* Circle */}
      <div
        className={`
          w-10 h-10 rounded-full
          flex items-center justify-center
          transition-all duration-300
          ${dark ? "bg-white" : "bg-black"}
          group-hover:scale-110
        `}
      >
        {/* Arrow SVG */}
        <Arrow color={dark ? "black" : "#b9ff66"} size={25} />
      </div>

      {/* Text */}
      <span
        className={`font-['Space_Grotesk'] text-[20px] font-medium ${
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
        w-[600px] h-[310px]
        rounded-[45px]
        px-[50px] py-[50px]
        flex justify-between items-center
        ${select_theme.bg}
        transition-all duration-300 shadow-[0_5px_0_0_rgba(0,0,0,1)]
      `}
    >
      {/* LEFT */}
      <div className="inline-block flex justify-between flex-col h-full ">
        {/* Title */}
        <span
          className={`inline-flex 
                    rounded-md 
                    font-medium 
                    text-[30px]
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
                    text-[30px]
                    leading-tight
                    ${select_theme.tag}`}
        >
          {title2}
        </span>

        {/* Button */}
        <div className="mt-25">
          <LearnMore dark={theme === "dark"} />
        </div>
      </div>

      {/* IMAGE */}
      <div className="w-[210px] h-[190px] flex items-center justify-center">
        {image}
      </div>
    </div>
  );
}
