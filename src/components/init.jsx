import Header from "./header";
import Button from "./ui/button";
import Container from "./ui/container";
import Brand from "./ui/brand";

const Init = () => {
  return (
    <Container>
      {/* Header */}
      <Header />
      <section className="w-full mx-auto py-[70px] grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left */}
        <div>
          <h1 className="text-[60px] leading-[100%] font-medium text-black drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            Navigating the <br />
            digital landscape <br />
            for success
          </h1>

          <p className="mt-6 text-gray-600 max-w-md">
            Our digital marketing agency helps businesses grow and succeed online
            through a range of services including SEO, PPC, social media marketing,
            and content creation.
          </p>

          <div className="mt-10">
            <Button href="/contact" className="px-[35px] py-4">
              Book a consultation
            </Button>
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center">
          <img
            src="/image/init.svg"
            className="max-w-md"
          />
        </div>
      </section>
      {/* Brand logos */}
      <Brand />
    </Container>
  );
};

export default Init;
