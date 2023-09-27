import { Helmet } from "react-helmet";
import About from "../Shared/About/About";
import Contract from "../Shared/Contract/Contract";
import Header from "../Shared/Header/Header";
import CustomerReview from "../Shared/SubShare/CustomerReview/CustomerReview";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home - Arfin Portfolio</title>
      </Helmet>

      <Header></Header>
      <About></About>
      <CustomerReview></CustomerReview>
      <Contract></Contract>
    </div>
  );
};

export default Home;
