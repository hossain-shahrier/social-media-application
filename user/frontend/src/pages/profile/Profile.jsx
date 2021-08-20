import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useCookies } from "react-cookie";
import { GetUser } from "../../FetchData";
import { useState } from "react";

export default function Profile() {
    const [user, setUser] = useState();
    const [cookies] = useCookies(["user"]);
    GetUser(setUser, "getUser/" + cookies.user);

    return user ? (
        <>
            <Topbar />
            <div className="profile">
                <Leftbar user={user} />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img
                                src={
                                    "http://127.0.0.1:8000/upload/" +
                                    user.profilePicture
                                }
                                alt=""
                                className="profileCoverImg"
                            />
                            <img
                                src={
                                    "http://127.0.0.1:8000/upload/" +
                                    user.profilePicture
                                }
                                alt=""
                                className="profileUserImg"
                            />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">{user.username}</h4>
                            <h4 className="profileInfoDesc">{user.bio}</h4>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed user={user} />
                        <Rightbar profile user={user} />
                    </div>
                </div>
            </div>
        </>
    ) : (
        <></>
    );
}
