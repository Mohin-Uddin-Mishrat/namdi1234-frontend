import VisionMissionSection from "./VisionMissionSection";
import WeareJLN from "./WeareJLN";
import OurHistory from "@/components/AboutUs/OurHistory"
import FeatureCard from "@/components/AboutUs/FeatureCard"
import ReviewCarousel from "./ReviewCarousel";


const About = () => {
    return (
        <div className="bg-[#E6F1D9]">
          <WeareJLN></WeareJLN>  
          <OurHistory></OurHistory>
          <VisionMissionSection></VisionMissionSection>
          <FeatureCard></FeatureCard>
        <ReviewCarousel></ReviewCarousel>
        </div>
    );
};

export default About;