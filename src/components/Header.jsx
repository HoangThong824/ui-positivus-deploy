import { useState } from "react"; 
import IconLogo from "./ui/IconLogo";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="mt-5 md:mt-[60px] px-4">
      {/* Container */}
      <div className="w-full max-w-[1240px] mx-auto flex items-center justify-between h-auto md:h-17">
        
        {/* Logo */}
        <div className="flex items-center gap-2 z-50">
          <IconLogo />
          <span className="text-2xl md:text-[30px] font-semibold">Positivus</span>
        </div>

        {/* Button for Mobile */}
        <button 
          className="md:hidden z-50 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={`w-6 h-0.5 bg-black transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-black my-1 ${isOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-black transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
        </button>

        {/* Menu & Button */}
        <div className={`
          fixed inset-0 bg-white flex flex-col items-center justify-center gap-8 transition-transform duration-300 z-40
          md:static md:flex-row md:bg-transparent md:translate-x-0 md:ml-auto md:gap-[40px]
          ${isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"}
        `}>
          <nav className="flex flex-col md:flex-row items-center gap-6 md:gap-[40px] text-xl md:text-[20px]">
            <a href="#" className="hover:text-black">About us</a>
            <a href="#" className="hover:text-black">Services</a>  
            <a href="#" className="hover:text-black">Use Cases</a>
            <a href="#" className="hover:text-black">Pricing</a>
            <a href="#" className="hover:text-black">Blog</a>
          </nav>

          <button className="px-8 py-4 md:py-5 border border-black rounded-[14px] text-xl md:text-[20px] hover:bg-black hover:text-white transition-colors">
            Request a quote
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;