import { FaLinkedinIn } from "react-icons/fa";

export default function TeamCard({ name, role, desc, img, linkedinLink }) {
  return (
    <div className="bg-white rounded-[32px] border border-black px-[35px] py-[40px] 
                    transition-all duration-300 shadow-[0_5px_0_0_rgba(0,0,0,1)] hover:shadow-lg transition">
      
      {/* HEADER */}
      <div className="flex items-start justify-between">
        
        {/* Avatar + Info */}
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div className="relative w-[102px] h-[102px]">
            <img
              src={img}
              alt={name}
              className="relative z-10 w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Name + Role */}
          <div className="mt-auto">
            <h3 className="text-lg font-semibold leading-tight">
              {name}
            </h3>
            <p className="text-sm text-black">
              {role}
            </p>
          </div>
        </div>

        {/* Linkedin */}
        <a
          href={linkedinLink}
          className="group w-[34px] h-[34px] rounded-full bg-black flex items-center justify-center transition-all duration-300 hover:bg-[#B9FF66]"
        >
          <FaLinkedinIn className="text-[#B9FF66] text-[17px] group-hover:text-black" />
        </a>

      </div>

      {/* Divider */}
      <hr className="my-5 w-full border-black" />

      {/* Description */}
      <p className="text-sm text-black leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
