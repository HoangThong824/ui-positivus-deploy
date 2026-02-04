import SectionTitle from "./ui/SectionTitle";
import ServiceCard from "./ui/ServiceCard";
import Container from "./ui/Container";
import CallToAction from "./ui/CallToAction";
const Services = () => {
  return (
    <Container className="pt-20 md:pt-[150px]">
      {/* TITLE */}
      <SectionTitle
        title="Services"
        description={
          <>
          At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
          </>
        }
      />
      {/* SERVICE CARDS */}
      <div className="w-full max-w-[1240px] mx-auto 
                      pt-12 md:pt-[80px]
                      grid grid-cols-1 lg:grid-cols-2
                      gap-6 lg:gap-10">
        <ServiceCard
            title1="Search engine"
            title2="optimization"
            theme="gray"
            image={<img 
                      src="/image/card/search.svg" 
                      className="w-full max-w-[210px] h-auto"
                  />}
        />

        <ServiceCard
            title1="Pay-per-click"
            title2="advertising"
            theme="green"
            image={<img 
                      src="/image/card/pay.svg" 
                      className="w-full max-w-[210px] h-auto"
                  />}
        />
        <ServiceCard
            title1="Social media"
            title2="marketing"
            theme="dark"
            image={<img 
                    src="/image/card/social.svg" 
                    className="w-full max-w-[210px] h-auto"
                    />}
        />

        <ServiceCard
            title1="Email"
            title2="marketing"
            theme="gray"
            image={<img 
                      src="/image/card/email.svg" 
                      className="w-full max-w-[210px] h-auto"
                      />}
        />
        <ServiceCard
            title1="Content"
            title2="Creation"
            theme="green"
            image={<img 
                      src="/image/card/content.svg" 
                      className="w-full max-w-[210px] h-auto"
                  />}
        />

        <ServiceCard
            title1="Analytics and"
            title2="Tracking"
            theme="dark"
            image={<img 
                      src="/image/card/analys.svg" 
                      className="w-full max-w-[210px] h-auto"
                  />}
        />
      </div>
      {/* CALL TO ACTION */}
      <CallToAction />

    </Container>
  );
}
export default Services;