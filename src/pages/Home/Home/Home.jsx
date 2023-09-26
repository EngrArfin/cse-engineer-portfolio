import About from "../Shared/About/About";
import Contract from "../Shared/Contract/Contract";
import Development from "../Shared/Development/Development";
import DevelopmentPage from "../Shared/Development/DevelopmentPage/DevelopmentPage";
import Header from "../Shared/Header/Header";
import Portfolio from "../Shared/Portfolio/Portfolio";
import CustomerReview from "../Shared/SubShare/CustomerReview/CustomerReview";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <DevelopmentPage></DevelopmentPage>
      <About></About>
      <CustomerReview></CustomerReview>
      <Portfolio></Portfolio>
      <Development></Development>
      <Contract></Contract>
    </div>
  );
};

export default Home;
