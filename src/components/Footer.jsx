import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";
import Container from "./ui/Container";
import IconLogo from "./ui/IconLogo";

const Footer = () => {
  return (
    <Container className="pt-20 md:pt-[140px]">
      <footer className="bg-[#0f1116] text-white rounded-t-[32px]">
        {/*Layout*/}
        <div className="w-full mx-auto px-6 md:px-[60px] py-12 md:py-16">

          {/* ===== TOP ROW ===== */}
          {/* Mobile | Desktop*/}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-14">
            {/* Logo */}
            <div className="flex items-center gap-2 font-semibold text-lg">
              <IconLogo color="text-white" size="24" />
              <span className="text-2xl">Positivus</span>
            </div>

            {/* Menu: Mobile col, Desktop row */}
            <nav className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm text-white">
              <a href="#" className="underline hover:text-[#B9FF66]">About us</a>
              <a href="#" className="underline hover:text-[#B9FF66]">Services</a>
              <a href="#" className="underline hover:text-[#B9FF66]">Use Cases</a>
              <a href="#" className="underline hover:text-[#B9FF66]">Pricing</a>
              <a href="#" className="underline hover:text-[#B9FF66]">Blog</a>
            </nav>

            {/* Social Icons*/}
            <div className="flex gap-4 text-lg">
              <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-[#B9FF66] transition-colors">
                <FaLinkedinIn className="text-black text-[20px]" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-[#B9FF66] transition-colors">
                <FaFacebookF className="text-black text-[20px]" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-[#B9FF66] transition-colors">
                <FaTwitter className="text-black text-[20px]" />
              </a>
            </div>
          </div>

          {/* ===== MIDDLE ROW ===== */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 md:gap-16">

            {/* Contact:*/}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <span className="inline-block bg-[#B9FF66] text-black px-4 py-1 rounded-md text-sm font-medium mb-4">
                Contact us:
              </span>
              <p className="text-white text-sm leading-7">
                Email: info@positivus.com <br />
                Phone: 555-567-8901 <br />
                Address: 1234 Main St <br />
                Moonstone City, Stardust State 12345
              </p>
            </div>

            {/* Subscribe Box*/}
            <div className="bg-[#1a1d23] p-6 md:p-8 rounded-2xl">
              <p className="mb-4 text-lg text-center md:text-left">Subscribe to our newsletter</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full flex-1 bg-transparent border border-white rounded-lg px-4 py-3 outline-none focus:border-[#B9FF66]"
                />
                <button className="w-full sm:w-auto bg-[#B9FF66] text-black px-8 py-3 rounded-lg font-medium hover:bg-white transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* ===== BOTTOM ===== */}
          <div className="border-t border-white my-10 md:my-12"></div>

          <div className="text-white text-sm">
            <p className="flex flex-col md:flex-row items-center gap-4 md:gap-5">
              <span>© 2023 Positivus. All Rights Reserved.</span>
              <a href="#" className="underline hover:text-[#B9FF66]">Privacy Policy</a>
            </p>
          </div>
        </div>
      </footer>
    </Container>
  );
}

export default Footer;