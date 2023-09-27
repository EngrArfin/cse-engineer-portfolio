import TitleSection from "../SubShare/TitleSection/TitleSection";
//import { useForm } from "react-hook-form";
import './YourFormStyles.css';

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

<form className="colorful-form">
      <div className="flex my-4">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full ml-4">
          <label className="label">
            <span className="label-text font-semibold">Email</span>
          </label>
          <input
            type="text"
            placeholder="Email"
            className="input input-bordered w-full"
          />
        </div>
      </div>

      <div className="flex my-4">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Phone Number</span>
          </label>
          <input
            type="number"
            placeholder="Phone Number"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full ml-4">
          <label className="label">
            <span className="label-text font-semibold">Address</span>
          </label>
          <input
            type="text"
            placeholder="Address here"
            className="input input-bordered w-full"
          />
        </div>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text font-semibold">Write Message</span>
        </label>
        <textarea
          className="textarea textarea-bordered h-24"
          placeholder="Write Message"
        ></textarea>
      </div>
      <div className="form-control w-full my-4">
        <label className="label">
          <span className="label-text">Submit Project Work Symbol</span>
        </label>
        <input
          type="file"
          className="file-input file-input-bordered w-full"
        />
      </div>
      <input className="btn btn-sm mt-4" type="submit" value="Add Item" />
    </form>
    </div>
  );
};

export default Contract;
