//import { BiHappyHeartEyes } from "react-icons/bi";
//import { GrProjects } from "react-icons/gr";
//import { MdAssuredWorkload, MdMoreTime } from "react-icons/md";
import './Work.css'
import background1 from "../../../../../assets/Photo/Projectphoto1.jpg";
import background2 from "../../../../../assets/Photo/Projectphoto2.jpg";
import background3 from "../../../../../assets/Photo/Projectphoto3.jpg";
import background4 from "../../../../../assets/Photo/Projectphoto4.jpg";
import background5 from "../../../../../assets/Photo/Projectphoto5.jpg";
import background6 from "../../../../../assets/Photo/Projectphoto6.jpg";
import TitleSection from '../TitleSection/TitleSection';
const Work = () => {
  
   const cardStyles = [
    { backgroundImage: `url(${background1})` },
    { backgroundImage: `url(${background2})` },
    { backgroundImage: `url(${background3})` },
    { backgroundImage: `url(${background4})` },
    { backgroundImage: `url(${background5})` },
    { backgroundImage: `url(${background6})` },
  ]; 
  return (
    
    
      <div>
        <TitleSection
        heading="Portfolio"
        subHeading="Welcome to my portfolio"
      ></TitleSection>
        <div className="stats w-full mx-auto m-5 flex flex-wrap justify-center items-center shadow">
    {cardStyles.map((style, index) => (
      <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-3">
        <div className="stat flex bg-red-200 hover:-translate-y-4 translate-all duration-300 skyCard" style={style}>
          <h2 className="text-2xl">Project - {index + 1}</h2>
          <p></p>
        </div>
      </div>
    ))}
  </div>
      </div>
    
  );
};

export default Work;


/* 
<div className="stats w-full mx-auto m-5 flex flex-wrap justify-center items-center shadow">
      {cardStyles.map((style, index) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-3">
          <div className="stat flex bg-red-200 hover:-translate-y-4 translate-all duration-300 skyCard" style={style}>
            <h2 className="text-2xl">Project - {index + 1}</h2>
            <p></p>
          </div>
        </div>
      ))}
    </div>
 */