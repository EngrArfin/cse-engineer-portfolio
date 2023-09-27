import About from "../Shared/About/About";
import ConInfo from "../Shared/Contract/ConInfo";
import Contract from "../Shared/Contract/Contract";
import Header from "../Shared/Header/Header";
import Portfolio from "../Shared/Portfolio/Portfolio";
import CustomerReview from "../Shared/SubShare/CustomerReview/CustomerReview";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <About></About>
      <CustomerReview></CustomerReview>
      <Portfolio></Portfolio>
      <Contract></Contract>
      <ConInfo></ConInfo>
    </div>
  );
};

export default Home;
