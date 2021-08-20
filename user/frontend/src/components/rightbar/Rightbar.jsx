import { useState } from "react";
import "./rightbar.css";
import Online from "../online/Online";
import { GetActiveFriends } from "../../FetchData";
import { Users } from "../../dummyData";

const Rightbar = ({ profile, user }) => {
    const [friends, setFriends] = useState(Users);
    GetActiveFriends(setFriends, user.id);

    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img
                        src="/assets/gift.png"
                        alt=""
                        className="birthdayImg"
                    />
                    <span className="birthdayText">
                        <b>Foster</b> and <b>3 other friends</b> have a birhday
                        today.
                    </span>
                </div>
                <img src="/assets/1.png" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {friends.map((user) => (
                        <Online key={user.id} user={user} />
                    ))}
                </ul>
            </>
        );
    };

    const ProfileRightbar = () => {
        return (
            <>
                <h4 className="rightbarTitle">User Information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Name:</span>
                        <span className="rightbarInfoValue">{user.name}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Address:</span>
                        <span className="rightbarInfoValue">
                            {user.address}
                        </span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Email:</span>
                        <span className="rightbarInfoValue"> {user.email}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Phone:</span>
                        <span className="rightbarInfoValue"> {user.phone}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Gender:</span>
                        <span className="rightbarInfoValue">
                            {" "}
                            {user.gender}
                        </span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Job:</span>
                        <span className="rightbarInfoValue"> {user.job}</span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User friends</h4>
                <div className="rightbarFollowings">
                    {friends.map((user) => (
                        <>
                            <div className="rightbarFollowing">
                                <img
                                    src={
                                        "http://127.0.0.1:8000/upload/" +
                                        user.profilePicture
                                    }
                                    alt=""
                                    className="rightbarFollowingImg"
                                />
                                <span className="rightbarFollowingName">
                                    {user.username}
                                </span>
                            </div>
                        </>
                    ))}
                </div>
            </>
        );
    };

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    );
};

export default Rightbar;
