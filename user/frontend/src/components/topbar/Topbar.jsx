import { Link } from "react-router-dom";
import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { useCookies } from "react-cookie";
import { GetUser } from "../../FetchData";
import { useState } from "react";

const Topbar = () => {
    const [user, setUser] = useState();
    const [cookies] = useCookies(["user"]);
    GetUser(setUser, "getUser/" + cookies.user);

    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">
                    <Link
                        style={{ textDecoration: "none", color: "white" }}
                        to={`/`}
                    >
                        Friend-Finder
                    </Link>
                </span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon" />
                    <input
                        placeholder="Search for friend"
                        className="searchInput"
                    />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">
                        <Link
                            style={{ textDecoration: "none", color: "white" }}
                            to={`/`}
                        >
                            Homepage
                        </Link>
                    </span>
                    <span className="topbarLink">
                        <Link
                            style={{ textDecoration: "none", color: "white" }}
                            to={`/profile`}
                        >
                            Timeline
                        </Link>
                    </span>
                    <span className="topbarLink">
                        <Link
                            style={{ textDecoration: "none", color: "white" }}
                            to={`/logout`}
                        >
                            Logout
                        </Link>
                    </span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Link
                            style={{
                                textDecoration: "none",
                                color: "white",
                            }}
                            to={`/chat`}
                        >
                            <Chat />
                            <span className="topbarIconBadge">1</span>
                        </Link>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
            </div>
            <Link to={`/profile`}>
                <img
                    src={
                        user
                            ? "http://127.0.0.1:8000/upload/" +
                              user.profilePicture
                            : "/assets/1.png"
                    }
                    alt=""
                    className="topbarImg"
                />
            </Link>
        </div>
    );
};

export default Topbar;
