import Photo1 from "../../../../assets/Photo/photo1.jpeg";

const Header = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={Photo1}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">I'm Engr S.Arfin</h1>
            <h1 className="text-5xl font-bold">WEB DEVELOPER</h1>
            <p className="py-6">
            I’m a B.sc Graduate in Computer Science & Engineering. Actually I am a Full Stack developer, I have expertise in  UI/UX Design, Java WordPress, Auto Cad Design. I always love to learn new things.
            </p>
            <button className="btn btn-primary">Know About ME</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
