import TeamCard from "./ui/TeamCard";
import SectionTitle from "./ui/SectionTitle";
import Button from "./ui/Button";
import Container from "./ui/Container";
import { FaLinkedinIn} from "react-icons/fa";
const team = [
  {
    name: "John Smith",
    role: "CEO and Founder",
    desc: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    img: "/image/team/per1.jpg",
    linkedinLink: "#",
  },
  {
    name: "Jane Doe",
    role: "Director of Operations",
    desc: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    img: "/image/team/per2.jpg",
    linkedinLink: "#"
  },
  {
    name: "Michael Brown",
    role: "Senior SEO Specialist",
    desc: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    img: "/image/team/per3.jpg",
    linkedinLink: "#"
  },
  {
    name: "Emily Johnson",
    role: "PPC Manager",
    desc: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    img: "/image/team/per4.jpg",
    linkedinLink: "#"
  },
  {
    name: "Brian Williams",
    role: "Social Media Specialist",
    desc: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    img: "/image/team/per5.jpg",
    linkedinLink: "#"
  },
  {
    name: "Sarah Kim",
    role: "Content Creator",
    desc: "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
    img: "/image/team/per6.jpg",
    linkedinLink: "#"
  },
];

const TeamSection = () => {
  return (
    <Container className="pt-[140px]">
    {/* Section Title */}
    <SectionTitle
      title="Team"
      description={
        <>
        Meet the skilled and experienced team behind our successful digital marketing strategies
        </>
      }
    />
    <section className="mt-[80px] w-full mx-auto">
    {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
        {team.map((item, i) => (
          <TeamCard key={i} {...item} />
        ))}
      </div>
      <div className="mt-[40px] flex justify-end">
      <Button className="w-full sm:w-auto" href="/about">
        See all team
      </Button>
    </div>
    </section>
    </Container>
  );
}
export default TeamSection;
