import Header from "./Header";
import Button from "./ui/Button";
import Container from "./ui/Container";
import Brand from "./ui/Brand";

const Init = () => {
  return (
    <Container>
      {/* Header */}
      <Header />
      <section className="py-[70px] grid md:grid-cols-2 gap-12 items-start">
        
        {/* Left */}
        <div>
          <h1 className="text-[60px] leading-[125%] font-extrabold text-black 
                        text-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            Navigating the <br />
            digital landscape <br />
            for success
          </h1>

          <p className="mt-[35px] test-[20px] text-black max-w-md">
            Our digital marketing agency helps businesses <br/> grow and succeed online
            through a range of<br/> services including SEO, PPC, social media marketing,<br/>
            and content creation.
          </p>

          <div className="mt-[35px]">
            <Button href="/contact" className="px-[35px] py-[20px]">
              Book a consultation
            </Button>
          </div>
        </div>

        {/* Right */}
        <div className="">
          <img
            src="/image/init.svg"
            className="w-[600px] h-[515px]"
          />
        </div>
      </section >
      {/* Brand logos */}

      <Brand />
    </Container>
  );
};

export default Init;
