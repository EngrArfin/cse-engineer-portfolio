import { Outlet } from "react-router-dom";
import NavBar from "../../pages/Home/Shared/NavBar/NavBar";
import { Helmet } from "react-helmet";

const Main = () => {
  return (
    <div>
      <Helmet>
        <title>Home - Arfin Portfolio</title>
      </Helmet>

      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
