import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css";

const Home = ({ user }) => {
    return (
        <>
            <Topbar user={user} />
            <div className="homeContainer">
                <Leftbar user={user} />
                <Feed user={user} />
                <Rightbar user={user} />
            </div>
        </>
    );
};

export default Home;
