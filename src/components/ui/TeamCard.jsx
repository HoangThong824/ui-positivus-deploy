import { FaLinkedinIn } from "react-icons/fa";

export default function TeamCard({ name, role, desc, img }) {
  return (
    <div className="bg-white rounded-[32px] border border-black/10 p-6 hover:shadow-lg transition">
      
      {/* HEADER */}
      <div className="flex items-start justify-between">
        
        {/* Avatar + Info */}
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div className="relative w-[100px] h-[100px]">
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
            <p className="text-sm text-gray-600">
              {role}
            </p>
          </div>
        </div>

        {/* Linkedin */}
        <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
          <FaLinkedinIn className="text-[#B9FF66] text-sm" />
        </div>
      </div>

      {/* Divider */}
      <hr className="my-5 w-full border-black/20" />

      {/* Description */}
      <p className="text-sm text-black leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
