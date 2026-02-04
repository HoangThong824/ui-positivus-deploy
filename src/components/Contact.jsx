import SectionTitle from "./ui/SectionTitle";
import Container from "./ui/Container";

const Contact = () => {
  return (
    <Container className="pt-[140px]">

      {/* TITLE */}
      <div>
        <SectionTitle
          title="Contact Us"
          description={
            <>
           Connect with Us: Let's Discuss Your Digital Marketing Needs
            </>
          }
        />
      </div>

      {/* MAIN BOX */}
      <div className="mt-10 lg:mt-20 relative bg-[#f6f6f6] rounded-[32px] p-12 flex flex-col lg:flex-row gap-12 overflow-hidden">

        {/* LEFT FORM */}
        <div className="flex-1">
          {/* Radio */}
          <div className="flex items-center gap-6 mb-8">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="type"
                defaultChecked
                className="accent-[#B9FF66]"
              />
              <span>Say Hi</span>
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="type"
                className="accent-[#B9FF66]"
              />
              <span>Get a Quote</span>
            </label>
          </div>

          {/* Form */}
          <form className="space-y-6 max-w-[550px]">
            <div>
              <label className="block text-sm mb-2">Name</label>
              <input
                type="text"
                placeholder="Name"
                className="w-full border border-black  rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#B9FF66] outline-none"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Email*</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-black rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#B9FF66] outline-none"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Message*</label>
              <textarea
                rows="4"
                placeholder="Message"
                className="w-full border border-black rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#B9FF66] outline-none"
              />
            </div>

            <button className="w-full bg-[#111318] text-white py-3 rounded-xl hover:opacity-90 transition">
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT DECORATION */}
        <div className="relative flex-1 hidden lg:block">

          {/* Cicle */}
          <img
            src="/image/contact.svg"
            className="absolute right-[-300px] w-[500px]"
            alt=""
          />

          {/* black star */}
          <img
            src="/image/star_black.svg"
            className="absolute top-[150px] right-[30px] w-[180px]"
            alt=""
          />

          {/* green star */}
          <img
            src="/image/star_green.svg"
            className="absolute bottom-[50px] right-[150px] w-[100px]"
            alt=""
          />
        </div>
      </div>
    </Container>
  );
}
export default Contact;
