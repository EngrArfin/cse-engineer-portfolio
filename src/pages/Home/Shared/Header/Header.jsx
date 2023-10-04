import { FaPaperPlane } from "react-icons/fa";
import Photo1 from "../../../../assets/Photo/photo1.jpeg";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-red-50 min-h-screen flex justify-center items-center ">
      <Helmet>
        <title>Home- Arfin Portfolio</title>
      </Helmet>
      <div className="bg-red-200 border-spacing-20 rounded-full w-100 h-100 lg:w-100 lg:h-100 overflow-hidden shadow-xl flex items-center justify-center">
        <img
          src={Photo1}
          alt="Your Photo"
          className="w-full h-full object-cover rounded-full border-4 border-white ml-4"
        />
      </div>
      <div className="ml-6 text-center lg:text-left">
        <h1 className="text-xl font-bold text-black">I Am Engr S Arfin</h1>
        <h1 className="text-2xl font-bold text-red-600">MERN Stack Developer</h1>
        <p className="py-6 text-black">
          I m a B.Sc Graduate in Computer Science & Engineering. Actually, I am
          a Full Stack developer, and I have expertise in UI/UX Design, Java
          WordPress, Auto Cad Design. I always love to learn new things.
        </p>
        <Link to="/contract" className="btn btn-outline  border-2 border-b-4 mt-4">
          Hire Me
          <FaPaperPlane className="text-xl" />     
        </Link>
      </div>
    </div>
  );
};

export default Header;
