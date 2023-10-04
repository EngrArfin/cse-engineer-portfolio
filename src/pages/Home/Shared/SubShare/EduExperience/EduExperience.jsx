import SmallTitle from "../SmallTitle/SmallTitle";

import BSC from '../../../../../assets/Photo/bsc.svg'
import HERO from '../../../../../assets/Photo/hero.jpg'
import HSC from '../../../../../assets/Photo/hsc.jpg'
import SSC from '../../../../../assets/Photo/ssc.png'

const EduExperience = () => {
  return (
  <div className="lg:mx-12 mx-4 py-32">
  <div className="text-headingColor mb-20">
    <SmallTitle smallHeading="EDUCATION"></SmallTitle>
    <div className="lg:mx-12 mx-4 py-16">
      <div className="text-gray-800 mb-10">
        <h1 className="text-4xl font-bold">EDUCATION & EXPERIENCE</h1>
      </div>
      <div className="container mx-auto flex">
        <div className="grid grid-cols-1  md:grid-cols-2 gap-10">
          {/* Education Section */}
          <div className="bg-blue-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
            <h2 className="text-2xl font-semibold mb-4">B.sc Graduation (Engineering)</h2>
            <div className="flex items-center mb-4">
              <img
                src={BSC}
                alt="Green University Logo"
                className="w-16 h-16 mr-4"
              />
              <h3 className="text-xl font-semibold">B.Sc in CSE of Green University in Bangladesh</h3>
            </div>
            <p className="text-gray-600">
              I earned my B.Sc in Computer Science and Engineering from Green
              University of Bangladesh. My education has equipped me with a
              strong theoretical foundation and practical skills, enabling me to
              excel in the field of technology. I am passionate about using my
              expertise to drive meaningful advancements in the tech industry.
            </p>
            <p className="text-gray-600">{/* Graduated: [Your Graduation Year] */}</p>
          </div>
          <div className="bg-blue-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
            <h2 className="text-2xl font-semibold mb-4">HSC in Science</h2>
            <div className="flex items-center mb-4">
              <img
                src={HSC}
                alt="Green University Logo"
                className="w-16 h-16 mr-4"
              />
              <h3 className="text-xl font-semibold">HSC in Aminur Rohamman College, </h3>
            </div>
            <p className="text-gray-600">
            During my time at Aminur Rohamman College in Mohammadpur, pursuing the HSC (Intermediate Level) in the Science Group, I had the opportunity to delve into the fascinating world of science and mathematics. This pivotal phase of my education not only expanded my academic horizons but also ignited a passion for scientific inquiry and discovery. I engaged in rigorous coursework, collaborated with peers, and developed essential skills that continue to shape my educational journey. This HSC experience served as a stepping stone towards my future academic and professional aspirations, setting the stage for my continued growth and exploration in the world of science and beyond.
            </p>
            <p className="text-gray-600">{/* Graduated: [Your Graduation Year] */}</p>
          </div>
          <div className="bg-blue-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
            <h2 className="text-2xl font-semibold mb-4">SSC in Science</h2>
            <div className="flex items-center mb-4">
              <img
                src={SSC}
                alt="Green University Logo"
                className="w-16 h-16 mr-4"
              />
              <h3 className="text-xl font-semibold">SSC in Digha High School, Magura</h3>
            </div>
            <p className="text-gray-600">
            Building upon the strong academic foundation laid during my SSC Science years at Digha High School, my HSC (Higher Secondary Certificate) journey has been marked by growth, discovery, and a deeper exploration of scientific principles. With dedicated teachers and a nurturing learning environment, I have continued to expand my knowledge in the sciences, honed my analytical skills, and prepared myself for the challenges and opportunities that lie ahead. My experience at Digha High School has not only fostered a love for learning but has also paved the way for my pursuit of higher education and a future filled with exciting possibilities in the realm of science.
            </p>
            <p className="text-gray-600">{/* Graduated: */} </p>
          </div>

          {/* Experience Section */}
          <div className="bg-yellow-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
            <h2 className="text-2xl font-semibold mb-4">MERN Stack Developer</h2>
            <div className="mb-4">
              <img
                src={HERO}
                alt="Web Developer Intern"
                className="w-16 h-16 mr-4"
              />
              <h3 className="text-xl font-semibold">Programming Hero </h3>
              <p className="text-gray-600"></p>
              <p className="text-gray-600">
              Programming Hero is most popular learning platform . I'm so happy to learn here and make me to be a part of this course. Jhankor Mahbub is a seasoned web developer with years of industry experience. With his guidance, you will learn from the best in the field, gaining insights and tips that can only come from a true expert.
              </p>
              <p className="text-gray-600">
                Duration: [January] - [July]-2023
              </p>
              <ul className="list-disc list-inside mt-2">
                <li className="text-gray-600">
                  Worked on project Learning Language Site, which involved...
                </li>
               
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</div>


  );
};

export default EduExperience;
