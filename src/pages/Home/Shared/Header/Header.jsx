import { FaPaperPlane } from "react-icons/fa";
import Photo1 from "../../../../assets/Photo/photo1.jpeg";

const Header = () => {
  return (
    <div className="bg-red-200 min-h-screen flex justify-center items-center ">
  <div className="bg-red-200 border-spacing-20 rounded-full w-100 h-100 lg:w-100 lg:h-100 overflow-hidden shadow-xl flex items-center justify-center">
    <img
      src={Photo1} 
      alt="Your Photo"
      className="w-full h-full object-cover rounded-full border-4 border-white ml-4" 
    />
  </div>
  <div className="ml-6 text-center lg:text-left">
    <h1 className="text-5xl font-bold text-black">I am Engr S.Arfin</h1>
    <h1 className="text-5xl font-bold text-red-600">WEB DEVELOPER</h1>
    <p className="py-6 text-black">
      I m a B.Sc Graduate in Computer Science & Engineering. Actually, I am a Full Stack developer, and I have expertise in UI/UX Design, Java WordPress, Auto Cad Design. I always love to learn new things.
    </p>
    <button className="btn btn-secondary text-black bg-secondary hover:bg-primary hover:text-white">Hire Me
    <FaPaperPlane className="text-xl" />
    </button>
  </div>
</div>


  


  );
};

export default Header;
