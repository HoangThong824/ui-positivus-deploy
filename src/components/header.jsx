//import logo from "../assets/logo.svg";
import IconLogo from "./ui/iconlogo";
const Header = () => {
  return (
    <header className="w-full mt-15">
      {/* Container */}
      <div className="mx-auto w-full h-17 flex items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <IconLogo />
          <span className="text-[30px] font-semibold">Positivus</span>
        </div>

        {/* Menu */}
        <div className="ml-auto flex items-center gap-10">
          <nav className="flex gap-8 text-[20px]">
            <a href="#">About us</a>
            <a href="#">Services</a>  
            <a href="#">Use Cases</a>
            <a href="#">Pricing</a>
            <a href="#">Blog</a>
          </nav>

          <button className="px-6 py-3 border border-black rounded-lg text-[20px]">
            Request a quote
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;