import { useState } from "react"; 
import IconLogo from "./ui/IconLogo";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="mt-5 md:mt-[60px]">
      <div className="w-full max-w-[1240px] mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <IconLogo />
          <span className="text-2xl md:text-[30px] font-semibold">Positivus</span>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative lg:flex lg:items-center lg:gap-[40px]">
          
          {/*Button for mobile */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className={`w-6 h-0.5 bg-black transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-black my-1 ${isOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-black transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
          </button>

          {/* Menu mobile */}
          {isOpen && (
            <div
              className="
                absolute right-0 top-full mt-4
                flex items-center
                w-56 bg-white border border-black
                rounded-xl shadow-lg
                flex flex-col gap-4
                p-6 z-50
                lg:hidden
              "
            >
              <a href="#">About us</a>
              <a href="#">Services</a>
              <a href="#">Use Cases</a>
              <a href="#">Pricing</a>
              <a href="#">Blog</a>

              <button className="mt-2 px-2 py-2 border border-black rounded-lg hover:bg-black hover:text-white transition">
                Request a quote
              </button>
            </div>
          )}

          {/* Menu desktop */}
          <nav className="hidden lg:flex items-center gap-[40px] text-[20px]">
            <a href="#">About us</a>
            <a href="#">Services</a>
            <a href="#">Use Cases</a>
            <a href="#">Pricing</a>
            <a href="#">Blog</a>
          </nav>

          <button className="hidden lg:block px-8 py-5 border border-black rounded-[14px] text-[20px] hover:bg-black hover:text-white transition">
            Request a quote
          </button>

        </div>
      </div>
    </header>
  );
};

export default Header;
