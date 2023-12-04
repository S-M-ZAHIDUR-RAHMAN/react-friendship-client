import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Membership from "../Membership/Membership";
import Posts from "../Posts/Posts";
import Tags from "../Tags/Tags";
import Announcements from "../Announcements/Announcements";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Friendship | Home</title>
            </Helmet>
            <Banner></Banner>
            <Tags></Tags>
            <Posts></Posts>
            <Announcements></Announcements>
            <Membership></Membership>
        </div>
    );
};

export default Home;