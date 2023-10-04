import { Link } from "react-router-dom";

const NavBar = () => {
  const cvUrl = 'https://drive.google.com/file/d/1qWJQHLDH9L4GprgwaZQyam3ZGa8wHlSw/view?usp=sharing';

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Arfin_Resume.pdf'; // You can customize the downloaded file name
    link.click();
  };


  const navOptions = (
    <>
      <li>
        <Link className="uppercase" to="/">Home</Link>
      </li>
      <li><Link className="uppercase" to="/about">About</Link></li>
      <li><Link className="uppercase" to="/portfolio">Portfolio</Link></li>
      <li><Link className="uppercase" to="/development">Development</Link></li>
      <li>
        <Link className="uppercase" to="/contract">Contract</Link>
      </li>
      
    </>
  ); 
  return (
    <>
      <div className="navbar max-w-7xl mx-auto  z-10 bg-sky-400  text-white"> {/* max-w-7xl */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
           <a className="btn btn-ghost uppercase  text-xl">
            Developer Portfolio</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end ">
           <a className="btn btn-outline  border-2 border-b-4 mt-" onClick={handleDownload}>Download Resume</a>
           
        </div>
      </div>
    </>
  );
};

export default NavBar;
