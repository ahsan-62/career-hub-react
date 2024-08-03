import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";
import FeaturedJob from "./FeaturedJob/FeaturedJob";
import ("./Home.css")

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <FeaturedJob></FeaturedJob>
        </div>
    );
};

export default Home;