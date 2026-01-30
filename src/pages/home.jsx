import CaseStudy from "../components/casestudy";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Init from "../components/init";
import Process from "../components/process";
import Services from "../components/services";
import TeamSection from "../components/team";
import Testimonials from "../components/testimonial";
const Home = () => {
  return (
    <>
      <Init />
      <Services />
      <CaseStudy />
      <Process />
      <TeamSection />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
