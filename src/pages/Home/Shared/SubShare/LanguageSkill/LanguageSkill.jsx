import SmallTitle from "../SmallTitle/SmallTitle";

import './LanguageSkill.css'

const LanguageSkill = () => {
  return (
    <div>
      <SmallTitle smallHeading="Language-Skill"></SmallTitle>
      <div className="skills-container flex">
        <div className="skills-row">
          <div className="skill">
            <span className="skill-name">HTML</span>
            <div className="radial-progress" style={{ "--value": 70 }}>
              <span className="skill-percent">70%</span>
            </div>
          </div>
          <div className="skill">
            <span className="skill-name">CSS</span>
            <div className="radial-progress" style={{ "--value": 75 }}>
              <span className="skill-percent">75%</span>
            </div>
          </div>
          <div className="skill">
            <span className="skill-name">JavaScript</span>
            <div className="radial-progress" style={{ "--value": 65 }}>
              <span className="skill-percent">65%</span>
            </div>
          </div>
          <div className="skill">
            <span className="skill-name">Bootstrap</span>
            <div className="radial-progress" style={{ "--value": 85 }}>
              <span className="skill-percent">85%</span>
            </div>
          </div>
          
        </div>
        <div className="skills-row">
          <div className="skill">
            <span className="skill-name">HTML</span>
            <div className="radial-progress" style={{ "--value": 70 }}>
              <span className="skill-percent">70%</span>
            </div>
          </div>
          <div className="skill">
            <span className="skill-name">CSS</span>
            <div className="radial-progress" style={{ "--value": 75 }}>
              <span className="skill-percent">75%</span>
            </div>
          </div>
          <div className="skill">
            <span className="skill-name">JavaScript</span>
            <div className="radial-progress" style={{ "--value": 65 }}>
              <span className="skill-percent">65%</span>
            </div>
          </div>
          <div className="skill">
            <span className="skill-name">Bootstrap</span>
            <div className="radial-progress" style={{ "--value": 85 }}>
              <span className="skill-percent">85%</span>
            </div>
          </div>
          
        </div>
        <div className="skills-row">
          <div className="skill">
            <span className="skill-name">HTML</span>
            <div className="radial-progress" style={{ "--value": 70 }}>
              <span className="skill-percent">70%</span>
            </div>
          </div>
          <div className="skill">
            <span className="skill-name">CSS</span>
            <div className="radial-progress" style={{ "--value": 75 }}>
              <span className="skill-percent">75%</span>
            </div>
          </div>
          <div className="skill">
            <span className="skill-name">JavaScript</span>
            <div className="radial-progress" style={{ "--value": 65 }}>
              <span className="skill-percent">65%</span>
            </div>
          </div>
          <div className="skill">
            <span className="skill-name">Bootstrap</span>
            <div className="radial-progress" style={{ "--value": 85 }}>
              <span className="skill-percent">85%</span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default LanguageSkill;
