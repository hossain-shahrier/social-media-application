import { Link } from "react-router-dom";
import "./leftbar.css";
import { useState } from "react";
import {
    RssFeed,
    WorkOutline,
    Person,
    Chat,
    Notifications,
    VideoCall,
    ExitToApp,
} from "@material-ui/icons";
import Friend from "../friend/Friend";
import { GetAllFriends } from "../../FetchData";
import { Users } from "../../dummyData";

const Leftbar = ({ user }) => {
    const [friends, setFriends] = useState(Users);
    GetAllFriends(setFriends, user.id);

    return (
        <div className="leftbar">
            <div className="leftbarWrapper">
                <ul className="leftbarList">
                    <li className="leftbarListItem">
                        <RssFeed className="leftbarIcon" />
                        <span className="leftbarListItemText">Feed</span>
                    </li>
                    <li className="leftbarListItem">
                        <Chat className="leftbarIcon" />
                        <Link
                            style={{
                                textDecoration: "none",
                                color: "black",
                            }}
                            to={`/chat`}
                        >
                            <span className="leftbarListItemText">Chat</span>
                        </Link>
                    </li>
                    <li className="leftbarListItem">
                        <VideoCall className="leftbarIcon" />
                        <Link
                            style={{
                                textDecoration: "none",
                                color: "black",
                            }}
                            to={`/videocall`}
                        >
                            <span className="leftbarListItemText">
                                VideoCall
                            </span>
                        </Link>
                    </li>
                    <li className="leftbarListItem">
                        <Person className="leftbarIcon" />
                        <span className="leftbarListItemText">Request</span>
                    </li>
                    <li className="leftbarListItem">
                        <Notifications className="leftbarIcon" />
                        <span className="leftbarListItemText">
                            Notification
                        </span>
                    </li>
                    <li className="leftbarListItem">
                        <Person className="leftbarIcon" />
                        <span className="leftbarListItemText">
                            <Link
                                style={{
                                    textDecoration: "none",
                                    color: "black",
                                }}
                                to={`/profile`}
                            >
                                Profile
                            </Link>
                        </span>
                    </li>
                    <li className="leftbarListItem">
                        <Person className="leftbarIcon" />
                        <span className="leftbarListItemText">
                            <Link
                                style={{
                                    textDecoration: "none",
                                    color: "black",
                                }}
                                to={`/editProfile`}
                            >
                                Edit Profile
                            </Link>
                        </span>
                    </li>
                    <li className="leftbarListItem">
                        <WorkOutline className="leftbarIcon" />
                        <span className="leftbarListItemText">Job</span>
                    </li>
                    <li className="leftbarListItem">
                        <ExitToApp className="leftbarIcon" />
                        <span className="leftbarListItemText">
                            <Link
                                style={{
                                    textDecoration: "none",
                                    color: "black",
                                }}
                                to={`/logout`}
                            >
                                Logout
                            </Link>
                        </span>
                    </li>
                </ul>
                <button className="leftbarButton">Show More</button>
                <hr className="leftbarHr" />
                <ul className="leftbarFriendList">
                    {friends.map((user) => (
                        <Friend key={user.id} user={user} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Leftbar;
