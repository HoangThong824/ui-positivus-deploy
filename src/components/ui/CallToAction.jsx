import Button from "./Button";

export default function CallToAction() {
  return (
    <section className="pt-[100px]">
      <div className="bg-[#f2f2f2] rounded-[40px] max-h-[350px] flex items-center justify-between gap-12">

        {/* LEFT CONTENT */}
        <div className="max-w-[560px] px-[60px] py-[60px]">
          <h2 className="font-['Space_Grotesk'] text-4xl font-semibold text-black mb-4">
            Let’s make things happen
          </h2>

          <p className="text-black mb-[26px]">
            Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
          </p>

          <Button href="/about" className="px-[35px] py-4">
            Get your free proposal
          </Button>
        </div>

        {/* RIGHT ILLUSTRATION */}
        <div className="relative hidden md:block">
          <img
            src="/image/callToAc.svg"
            alt="CTA Illustration"
            className="w-[500px] h[400px]"
          />

        </div>
      </div>
    </section>
  );
}
