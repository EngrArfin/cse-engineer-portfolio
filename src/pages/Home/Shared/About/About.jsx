
import EduExperience from "../SubShare/EduExperience/EduExperience";
import LanguageSkill from "../SubShare/LanguageSkill/LanguageSkill";
import ReadMyself from "../SubShare/ReadMyself/ReadMyself";
import TitleSection from "../SubShare/TitleSection/TitleSection";
import WorkCart from "../SubShare/WorkCart/WorkCart";

const About = () => {
  return (
    <div>
      <TitleSection
        heading="About Me"
        subHeading="Read to know about me"
      ></TitleSection>

      <ReadMyself></ReadMyself>
      <LanguageSkill></LanguageSkill> 
      <EduExperience></EduExperience>
      <WorkCart></WorkCart>
    </div>
  );
};

export default About;
