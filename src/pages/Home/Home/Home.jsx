import About from "../Shared/About/About";
import Contract from "../Shared/Contract/Contract";
import Header from "../Shared/Header/Header";
import Portfolio from "../Shared/Portfolio/Portfolio";
import CustomerReview from "../Shared/SubShare/CustomerReview/CustomerReview";
import Work from "../Shared/SubShare/WorkCart/Work";

const Home = () => {
  return (
    <div>
      
      <Header></Header>
      <Work></Work>
      <About></About>
      <CustomerReview></CustomerReview>
      <Portfolio></Portfolio>
      <Contract></Contract>
    </div>
  );
};

export default Home;
