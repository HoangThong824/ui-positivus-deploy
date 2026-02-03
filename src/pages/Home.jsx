import Init from "../components/Init";
import Services from "../components/Services";
import CaseStudy from "../components/Casestudy";
import Process from "../components/Process";
import TeamSection from "../components/Team";
import Testimonials from "../components/Testimonial";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div className="font-['Space_Grotesk']">
      <Init />
      <Services />
      <CaseStudy />
      <Process />
      <TeamSection />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
