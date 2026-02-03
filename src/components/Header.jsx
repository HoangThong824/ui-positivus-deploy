import IconLogo from "./ui/IconLogo";

const Header = () => {
  return (
    <header className="mt-[60px]">
      {/* Container */}
      <div className="w-full max-w-[1240px] mx-auto h-17 flex flex-wrap items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <IconLogo />
          <span className="text-[30px] font-semibold">Positivus</span>
        </div>

        {/* Menu */}
        <div className="ml-auto flex items-center gap-[40px]">
          <nav className="flex flex-wrap gap-[40px] text-[20px]">
            <a href="#">About us</a>
            <a href="#">Services</a>  
            <a href="#">Use Cases</a>
            <a href="#">Pricing</a>
            <a href="#">Blog</a>
          </nav>

          <button className="px-8 py-5 border border-black rounded-[14px] text-[20px]">
            Request a quote
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;