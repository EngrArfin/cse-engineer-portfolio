import SmallTitle from "../SubShare/SmallTitle/SmallTitle";
import TitleSection from "../SubShare/TitleSection/TitleSection";

const About = () => {
  return (
    <div>
      <TitleSection
        heading="About Me"
        subHeading="Read to know about me"
      ></TitleSection>

      <SmallTitle
      smallHeading="Language-Skill"
      ></SmallTitle>
      
      <div className="ml-20">
        <div className="p-5  ">
          <div className="m-10 radial-progress uppercase bg-secondary text-black  border-8 border-secondary" style={{"--value":70}}> HTML <br /> 95%</div>
          <div className="m-10 radial-progress bg-secondary text-black  border-8 border-secondary" style={{"--value":75}}> CSS <br /> 80%</div>
          <div className="m-10 radial-progress items-center bg-secondary text-black  border-8 border-secondary" style={{"--value":65}}> JS <br /> 70%</div>
          <div className="m-10 radial-progress bg-secondary text-black  border-8 border-secondary" style={{"--value":85}}> BOOTSTRAP <br /> 70%</div>
          
        </div>
        <div className="p-5 ">
          <div className="m-10 radial-progress bg-secondary text-black  border-8 border-secondary" style={{"--value":80}}> REACT.JS <br /> 70%</div>
          <div className="m-10 radial-progress bg-secondary text-black  border-8 border-secondary" style={{"--value":75}}>FIREBASE <br /> 70%</div>
          <div className="m-10 radial-progress bg-secondary text-black  border-8 border-secondary" style={{"--value":70}}> MONGODB <br /> 70%</div>
          <div className="m-10 radial-progress bg-secondary text-black  border-8 border-secondary" style={{"--value":60}}> EXPRESS.JS <br /> 70%</div>
          
        </div>
        <div className="p-5 ">
          <div className="m-10 radial-progress bg-secondary text-black  border-8 border-secondary" style={{"--value":40}}> NODE.JS <br /> 70%</div>
          <div className="m-10 radial-progress bg-secondary text-black  border-8 border-secondary" style={{"--value":45}}>SQL <br /> 70%</div>
          <div className="m-10 radial-progress bg-secondary text-black  border-8 border-secondary" style={{"--value":35}}>JWT <br /> 70%</div>
          <div className="m-10 radial-progress bg-secondary text-black  border-8 border-secondary" style={{"--value":40}}>PHP <br /> 70%</div>
          
        </div>
      </div>

      <SmallTitle
      smallHeading="EXPERIENCE & EDUCATION"
      ></SmallTitle>

    
    </div>
  );
};

export default About;
