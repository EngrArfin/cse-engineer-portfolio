import TitleSection from "../SubShare/TitleSection/TitleSection";
//import { useForm } from "react-hook-form";
import { FaPaperPlane } from 'react-icons/fa';


const ConInfo = () => {
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

      <form className="bg-gray-200 p-4 rounded-lg shadow-md">
        <div className="flex my-4">
          <div className="w-full">
            <label className="text-blue-500 font-semibold">Name</label>
            <input
              type="text"
              placeholder="Name"
              className="border rounded-lg p-2 w-full"
            />
          </div>
          <div className="w-full ml-4">
            <label className="text-blue-500 font-semibold">Email</label>
            <input
              type="text"
              placeholder="Email"
              className="border rounded-lg p-2 w-full"
            />
          </div>
        </div>

        <div className="flex my-4">
          <div className="w-full">
            <label className="text-blue-500 font-semibold">Phone Number</label>
            <input
              type="number"
              placeholder="Phone Number"
              className="border rounded-lg p-2 w-full"
            />
          </div>
          <div className="w-full ml-4">
            <label className="text-blue-500 font-semibold">Address</label>
            <input
              type="text"
              placeholder="Address here"
              className="border rounded-lg p-2 w-full"
            />
          </div>
        </div>
        <div className="w-full my-4">
          <label className="text-blue-500 font-semibold">Write Message</label>
          <textarea
            className="border rounded-lg p-2 h-24 w-full"
            placeholder="Write Message"
          ></textarea>
        </div>
        <div className="w-full my-4">
          <label className="text-blue-500">Submit Project Work Symbol</label>
          <input type="file" className="border rounded-lg p-2 w-full" />
        </div>
        {/* <input
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
          type="submit"
          value="Send Me"
        />
      <FaPaperPlane className="text-xl" /> */}


        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer flex items-center">
        <span className="mr-5 mb-2 mt-1 ml-2 text-xl">Send Me</span>
        <FaPaperPlane className="text-xl" /> {/* Render the paper plane icon */}
      </button>
      </form>
    </div>
  );
};

export default ConInfo;
