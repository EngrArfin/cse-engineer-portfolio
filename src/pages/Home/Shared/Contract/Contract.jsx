import TitleSection from "../SubShare/TitleSection/TitleSection";
import {
  FaEnvelope, FaFacebookSquare, FaGithub, FaInfoCircle, FaLinkedin, FaPaperPlane,FaPhone, FaUser} from "react-icons/fa";

const Contract = () => {
/* const { handleSubmit } = useForm();
  const onSubmit = () => {
  } 
   onSubmit={handleSubmit(onSubmit)} */
  return (
    <div className="w-full ml-10">
      <TitleSection
        heading="Contract"
        subHeading="Feel Free to contract with me "
      ></TitleSection>

      <div className="flex">
        <form className="bg-gray-200 p-4 rounded-lg shadow-md">
          <div className="flex my-4">
            <div className="form-control w-full">
              <label className="label-text font-semibold">Name</label>
              <input
                type="text"
                placeholder="Name"
                className="border rounded-lg p-2 w-full"
              />
            </div>
            <div className="w-full ml-4">
              <label className="label-text font-semibold">Email</label>
              <input
                type="text"
                placeholder="Email"
                className="border rounded-lg p-2 w-full"
              />
            </div>
          </div>

          <div className="flex my-4">
            <div className="w-full">
              <label className="label-text font-semibold">Phone Number</label>
              <input
                type="number"
                placeholder="Phone Number"
                className="border rounded-lg p-2 w-full"
              />
            </div>
            <div className="w-full ml-4">
              <label className="label-text font-semibold">Address</label>
              <input
                type="text"
                placeholder="Address here"
                className="border rounded-lg p-2 w-full"
              />
            </div>
          </div>
          <div className="w-full my-4">
            <label className="label-text font-semibold">Write Message</label>
            <textarea
              className="border rounded-lg p-2 h-24 w-full"
              placeholder="Write Message"
            ></textarea>
          </div>
          <div className="w-full my-4">
            <label className="label-text font-semibold">
              Submit Project Symbol
            </label>
            {/* <input type="file" className="border rounded-lg p-2 w-full" /> */}
            <input
              type="file"
              className="file-input file-input-bordered w-full"
            />
          </div>
          {/* <input
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
          type="submit"
          value="Send Me"
        />
      <FaPaperPlane className="text-xl" /> */}

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer flex items-center">
            <span className="mr-5 mb-2 mt-1 ml-2 text-xl">Send Me</span>
            <FaPaperPlane className="text-xl" />{" "}
            {/* Render the paper plane icon */}
          </button>
        </form>

        <div className="mx-auto p-4 bg-purple-500 text-white rounded-lg shadow-md hover:bg-pink-500 hover:text-black">
          <div className="flex text-black flex-col items-start">
            {" "}
            {/* Changed "items-center" to "items-start" */}
            <div className="mb-4 text-black">
              <div className="flex items-center">
                <FaInfoCircle className="text-3xl mr-2 text-yellow-300" />
                <p className="text-xl font-semibold">FEEL FREE TO CONTRACT!</p>
              </div>
              <p className="text-black mt-2">
              Feel free to get in touch with me. I am always  open to discussing new projects, <br /> creative ideas or opportunities to be part of your visions.
              </p>
            </div>
            <div className="mb-2 flex items-center">
              <FaUser className="text-xl mr-2" />
              <p className="text-gray-100 text-lg">
                <strong>Name:</strong> Engr S Arfin
              </p>
            </div>
            <div className="mb-2 flex items-center">
              <FaEnvelope className="text-xl mr-2" />
              <p className="text-gray-100 text-lg">
                <strong>Email:</strong> arfin.cse.green.edu.bd.com
              </p>
            </div>
            <div className="mb-2 flex items-center">
              <FaPhone className="text-xl mr-2" />
              <p className="text-gray-100 text-lg">
                <strong>Phone Number:</strong> +880 1952-487468
              </p>
            </div>
            {/* Social Media Links */}
            <div className="ml-40 mb-10">
              <div className="flex items-center space-x-4">
                <a href="#" className="hover:text-blue-300">
                  <FaFacebookSquare className="text-3xl" />
                </a>
                <a href="#" className="hover:text-blue-300">
                  <FaLinkedin className="text-3xl" />
                </a>
                <a href="#" className="hover:text-blue-300">
                  <FaGithub className="text-3xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contract;
