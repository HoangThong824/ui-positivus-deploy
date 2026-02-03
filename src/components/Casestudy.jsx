import Container from "./ui/Container";
import SectionHeader from "./ui/SectionTitle";
import Arrow from "./ui/Arrow";

const CaseStudy = () => {
  return (
    <Container className="pt-[150px]">
      {/* TITLE */}
      <SectionHeader
        title="Case Studies"
        description={
          <>
          Explore Real-Life Examples of Our Proven Digital Marketing <br/> Success through Our Case Studies
          </>
        }
      />
      <section className="w-full mx-auto pt-20">
      <div className="bg-[#0f1115] rounded-[40px] px-16 py-16">

        <div className="flex flex-col lg:flex-row justify-center gap-10">

          {/* ITEM 1 */}
          <div className="pb-10 lg:pb-0 lg:pr-10 border-b lg:border-b-0 lg:border-r border-white">
            <p className="leading-relaxed text-white">
              For a local restaurant, we implemented a targeted PPC campaign
              that resulted in a 50% increase in website traffic and a 25%
              increase in sales.
            </p>

            <a 
              href="#"
              className="mt-6 inline-flex items-center gap-2 text-[#b9ff66] pt-[20px]">
              Learn more 
              <Arrow color="#b9ff66" size={20} />
            </a>
          </div>

          {/* ITEM 2 */}
          <div className="pb-10 lg:pb-0 lg:pr-10 border-b lg:border-b-0 lg:border-r border-white">
            <p className="leading-relaxed text-white">
              For a B2B software company, we developed an SEO strategy that
              resulted in a first page ranking for key keywords and a 200%
              increase in organic traffic.
            </p>

            <a 
              href="#"
              className="mt-6 inline-flex items-center gap-2 text-[#b9ff66] pt-[20px]">
              Learn more 
              <Arrow color="#b9ff66" size={20} />
            </a>
          </div>

          {/* ITEM 3 */}
          <div className="">
            <p className="leading-relaxed text-white">
              For a national retail chain, we created a social media marketing
              campaign that increased followers by 25% and generated a 20%
              increase in online sales.
            </p>

            <a 
              href="#"
              className="mt-6 inline-flex items-center gap-2 text-[#b9ff66] pt-[20px]">
              Learn more
              <Arrow color="#b9ff66" size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
    </Container>
  );
};
export default CaseStudy;