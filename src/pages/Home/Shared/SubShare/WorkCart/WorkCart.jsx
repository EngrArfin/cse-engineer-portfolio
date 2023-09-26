import { BiHappyHeartEyes } from "react-icons/bi";
import { GrProjects } from "react-icons/gr";
import { MdAssuredWorkload, MdMoreTime } from "react-icons/md";
import './style.css'

const WorkCart = () => {
  return (
    <div className="stats w-full mx-auto ml-40 m-10 flex  stats-vertical lg:stats-horizontal shadow">
      <div className="mt-5 p-3">
        <div className="stat flex bg-red-200 hover:-translate-y-4 translate-all duration-300 skyCard">
          <div className="mt-20 m-5 text-3xl ">
            <GrProjects></GrProjects>
          </div>
          <div className="m-5 mr-4">
            <div className="stat-title uppercase text-2xl text-blue-800">
              Project Finish
            </div>
            <div className="stat-value text-yellow-400 mt-5">10+</div>
            <div className="stat-desc mt-5 text-red-700">↘︎ 2020- 2023 (Years)</div>
          </div>
        </div>
        <br />

        <div className="stat flex bg-red-200 hover:-translate-y-4 translate-all duration-300 skyCard ">
          <div className="mt-20 m-5 text-3xl">
            <MdMoreTime></MdMoreTime>
          </div>
          <div className="m-5 mr-4">
            <div className="stat-title uppercase text-2xl text-blue-800">
              YEARS OF EXPERIENCE
            </div>
            <div className="stat-value text-yellow-400 mt-5">1.5 Years</div>
            <div className="stat-desc mt-5 text-red-700">↗︎ 100 (90%)</div>
          </div>
        </div>
      </div>

      {/* second */}
      <div className="mt-5 p-3">
        <div className="stat flex bg-red-200 hover:-translate-y-4 translate-all duration-300 skyCard">
          <div className="mt-20 m-5 text-3xl">
            <BiHappyHeartEyes></BiHappyHeartEyes>
          </div>
          <div className="m-5 mr-4">
            <div className="stat-title uppercase text-2xl text-blue-800">
              HAPPY CUSTOMERS
            </div>
            <div className="stat-value text-yellow-400 mt-5">5+</div>
            <div className="stat-desc mt-5 text-red-700">↘︎ 100 (95%)</div>
          </div>
        </div>
        <br />
        <div className="stat flex bg-red-200 hover:-translate-y-4 translate-all duration-300 skyCard">
          <div className="mt-20 m-5 text-3xl">
            <MdAssuredWorkload></MdAssuredWorkload>
          </div>
          <div className="m-5 mr-4">
            <div className="stat-title uppercase text-2xl text-blue-800">
              HOURS WORKED
            </div>
            <div className="stat-value text-yellow-400 mt-5">500+</div>
            <div className="stat-desc mt-5 text-red-700">↘︎100 (85%)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCart;
