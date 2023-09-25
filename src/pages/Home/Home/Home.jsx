import About from "../Shared/About/About";
import Contract from "../Shared/Contract/Contract";
import Development from "../Shared/Development/Development";
import Header from "../Shared/Header/Header";
import Portfolio from "../Shared/Portfolio/Portfolio";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <Portfolio></Portfolio>
            <Development></Development>
            <Contract></Contract>
        </div>
    );
};

export default Home;