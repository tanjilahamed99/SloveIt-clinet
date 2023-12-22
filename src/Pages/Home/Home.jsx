import Banner from "../../Components/Banner/Banner";
import NewsLatter from "./NewsLatter/NewsLatter";
import Used from "./Used/Used";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Used></Used>
            <NewsLatter></NewsLatter>
        </div>
    );
};

export default Home;