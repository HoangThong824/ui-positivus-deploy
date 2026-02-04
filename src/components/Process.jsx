import SectionTitle from "./ui/SectionTitle";   
import Container from "./ui/Container";
import ProcessAccordion from "./ui/ProcessingAcording";
const Process = () => {
    return (
        <Container className="pt-[140px]">
            <SectionTitle
                title="Our Working Process "
                description={
                    <>
                    Step-by-Step Guide to Achieving Your Business Goals
                    </>
                }
            />
            <ProcessAccordion/>
        </Container>
    )   
 }
export default Process;