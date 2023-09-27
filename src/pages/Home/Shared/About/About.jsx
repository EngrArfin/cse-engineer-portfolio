
import { Helmet } from "react-helmet";
import Portfolio from "../Portfolio/Portfolio";
import EduExperience from "../SubShare/EduExperience/EduExperience";
import LanguageSkill from "../SubShare/LanguageSkill/LanguageSkill";
import ReadMyself from "../SubShare/ReadMyself/ReadMyself";
import TitleSection from "../SubShare/TitleSection/TitleSection";
import WorkCart from "../SubShare/WorkCart/WorkCart";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About- Arfin Portfolio</title>
      </Helmet>

      <TitleSection
        heading="About Me"
        subHeading="Read to know about me"
      ></TitleSection>

      <ReadMyself></ReadMyself>
      <LanguageSkill></LanguageSkill> 
      <EduExperience></EduExperience>
      <Portfolio></Portfolio>
      <WorkCart></WorkCart>
    </div>
  );
};

export default About;
