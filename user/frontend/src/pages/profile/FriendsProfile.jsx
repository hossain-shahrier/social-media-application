import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { GetUser } from "../../FetchData";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function FriendsProfile() {
    const [user, setUser] = useState();
    const [my, setMy] = useState();
    const [cookies] = useCookies(["user"]);
    GetUser(setMy, "getUser/" + cookies.user);
    const { id: eid } = useParams();
    GetUser(setUser, "getUser/" + eid);

    return user ? (
        <>
            <Topbar />
            <div className="profile">
                <Leftbar user={my} />
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
                        <Rightbar profile user={my} />
                    </div>
                </div>
            </div>
        </>
    ) : (
        <></>
    );
}
