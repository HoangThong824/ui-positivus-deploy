import SectionTitle from "./ui/sectionTitle";   
import Container from "./ui/container";
import ProcessAccordion from "./ui/processAcording";
const Process = () => {
    return (
        <Container className="pt-[140px]">
            <SectionTitle
                title="Our Working Process "
                description={
                    <>
                    Step-by-Step Guide to Achieving <br/> Your Business Goals
                    </>
                }
            />
            <ProcessAccordion className="pt-[80px]" />
        </Container>
    )   
 }
export default Process;