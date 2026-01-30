import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";
import Container from "./ui/container";
import IconLogo from "./ui/iconlogo";
const Footer = () => {
  return (

    <Container className="pt-[140px]">
    <footer className="bg-[#0f1116] text-white rounded-t-[32px]">
      <div className="w-full mx-auto px-[60px] py-16">

        {/* ===== TOP ROW ===== */}
        <div className="flex items-center justify-between mb-14">
          {/* Logo */}
          <div className="flex items-center gap-2 font-semibold text-lg">
            <IconLogo color="text-white" size="24" />
            Positivus
          </div>

          {/* Menu */}
          <nav className="flex gap-8 text-sm text-white">
            <a href="#" className="underline">About us</a>
            <a href="#" className="underline">Services</a>
            <a href="#" className="underline">Use Cases</a>
            <a href="#" className="underline">Pricing</a>
            <a href="#" className="underline">Blog</a>
          </nav>

          {/* Social */}
          <div className="flex gap-4 text-lg ">
            {/* LinkedIn */}
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-[#B9FF66] transition-colors">
              <FaLinkedinIn className="text-black text-[20px]" />
            </div>

            {/* Facebook */}
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-[#B9FF66] transition-colors">
              <FaFacebookF className="text-black text-[20px]" />
            </div>

            {/* Twitter */}
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-[#B9FF66] transition-colors">
              <FaTwitter className="text-black text-[20px]" />
            </div>
          </div>
        </div>

        {/* ===== MIDDLE ROW ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16">

          {/* Contact */}
          <div>
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

          {/* Subscribe */}
          <div className="bg-[#1a1d23] p-8 rounded-2xl">
            <p className="mb-4 text-lg">Subscribe to our newsletter</p>

            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 bg-transparent border border-white rounded-lg px-4 py-3 outline-none"
              />
              <button className="bg-[#B9FF66] text-black px-6 rounded-lg font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* ===== BOTTOM ===== */}
        <div className="border-t border-white my-12"></div>

        <div className="text-white text-sm">
          <p className="flex flex-wrap gap-5">
              <span>© 2023 Positivus. All Rights Reserved. </span>
              <a href="#" className="underline">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
    </Container>
  );
}
export default Footer;
