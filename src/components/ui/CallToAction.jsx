import Button from "./Button";

export default function CallToAction() {
  return (
    <section className="pt-16 sm:pt-[100px]">
      <div className="bg-[#f2f2f2] rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-12">

        {/* LEFT CONTENT */}
        <div className="w-full max-w-[560px] p-8 sm:p-[60px]">
          <h2 className="text-2xl sm:text-4xl font-semibold text-black mb-4">
            Let’s make things happen
          </h2>

          <p className="text-black mb-[26px] text-sm sm:text-base">
            Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
          </p>

          <Button href="/about" className="w-full sm:w-auto">
            Get your free proposal
          </Button>
        </div>

        {/* RIGHT ILLUSTRATION */}
        <div className="relative hidden md:block">
          <img
            src="/image/callToAc.svg"
            alt="CTA Illustration"
            className="w-full max-w-[500px] h-auto"
          />

        </div>
      </div>
    </section>
  );
}
