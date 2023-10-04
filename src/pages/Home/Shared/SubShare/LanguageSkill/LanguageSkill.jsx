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
            <div className="radial-progress" style={{ "--value": 90 }}>
              <span className="skill-percent">90%</span>
            </div>
          </div>
          <div className="skill">
            <span className="skill-name">CSS</span>
            <div className="radial-progress" style={{ "--value": 85 }}>
              <span className="skill-percent">85%</span>
            </div>
          </div>
          <div className="skill">
            <span className="skill-name">JavaScript</span>
            <div className="radial-progress" style={{ "--value": 55 }}>
              <span className="skill-percent">55%</span>
            </div>
          </div>
          <div className="skill">
            <span className="skill-name">Bootstrap</span>
            <div className="radial-progress" style={{ "--value": 80 }}>
              <span className="skill-percent">80%</span>
            </div>
          </div>
          
        </div>
        <div className="skills-row">
          <div className="skill">
            <span className="skill-name">Tailwind CSS</span>
            <div className="radial-progress" style={{ "--value": 78 }}>
              <span className="skill-percent">78%</span>
            </div>
          </div>
          <div className="skill">
            <span className="skill-name">Express Js</span>
            <div className="radial-progress" style={{ "--value": 55 }}>
              <span className="skill-percent">55%</span>
            </div>
          </div>
          <div className="skill">
            <span className="skill-name">Node Js</span>
            <div className="radial-progress" style={{ "--value": 65 }}>
              <span className="skill-percent">65%</span>
            </div>
          </div>
          <div className="skill">
            <span className="skill-name">MongoDB</span>
            <div className="radial-progress" style={{ "--value": 85 }}>
              <span className="skill-percent">85%</span>
            </div>
          </div>
          
        </div>
        <div className="skills-row">
          <div className="skill">
            <span className="skill-name">Firebase</span>
            <div className="radial-progress" style={{ "--value": 70 }}>
              <span className="skill-percent">70%</span>
            </div>
          </div>
          <div className="skill">
            <span className="skill-name">Java</span>
            <div className="radial-progress" style={{ "--value": 35 }}>
              <span className="skill-percent">35%</span>
            </div>
          </div>
          <div className="skill">
            <span className="skill-name">Python</span>
            <div className="radial-progress" style={{ "--value": 38 }}>
              <span className="skill-percent">38%</span>
            </div>
          </div>
          <div className="skill">
            <span className="skill-name">C</span>
            <div className="radial-progress" style={{ "--value": 40 }}>
              <span className="skill-percent">40%</span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default LanguageSkill;
