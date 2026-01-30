import Button from "./button";

export default function CallToAction() {
  return (
    <section className="max-w-full pt-[100px]">
      <div className="bg-[#f2f2f2] rounded-[40px] px-14 py-16 flex items-center justify-between gap-12">

        {/* LEFT CONTENT */}
        <div className="max-w-[500px]">
          <h2 className="text-4xl font-semibold text-black mb-4">
            Let’s make things happen
          </h2>

          <p className="text-black mb-8">
            Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
          </p>

          <Button href="/about" className="px-[35px] py-4">
            Get your free proposal
          </Button>
        </div>

        {/* RIGHT ILLUSTRATION */}
        <div className="relative w-[320px] hidden md:block">
          <img
            src="/image/callToAc.svg"
            alt="CTA Illustration"
            className="w-full"
          />

        </div>
      </div>
    </section>
  );
}
