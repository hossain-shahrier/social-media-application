import { useState } from "react";
import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar";
import { useCookies } from "react-cookie";
import { GetUser, UpdateUser } from "../../FetchData";
import { useHistory } from "react-router-dom";

export default function EditProfile() {
    const [user, setUser] = useState();
    const [cookies] = useCookies(["user"]);
    GetUser(setUser, "getUser/" + cookies.user);

    const [userInfo, setUserInfo] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        gender: "",
        password: "",
        cpassword: "",
        address: "",
    });
    const history = useHistory();

    const [i, setI] = useState(true);
    const change = (e) => {
        const attr = e.target.name;
        const val = e.target.value;
        i
            ? setUserInfo({ ...user, [attr]: val })
            : setUserInfo({ ...userInfo, [attr]: val });
        setI(false);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        UpdateUser(userInfo);
        history.push("/profile");
    };

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
                            <h4 className="profileInfoDesc">{user.bio} </h4>
                        </div>
                        <div className="registrationBox">
                            <input
                                placeholder="Username"
                                type="text"
                                className="registrationInput"
                                name="username"
                                value={userInfo.username}
                                onChange={change}
                            />
                            <input
                                placeholder="Name"
                                type="text"
                                className="registrationInput"
                                name="name"
                                value={userInfo.name}
                                onChange={change}
                            />
                            <input
                                placeholder="Address e.g Dhaka,Bangladesh"
                                type="text"
                                className="registrationInput"
                                name="address"
                                value={userInfo.address}
                                onChange={change}
                            />
                            <input
                                placeholder="Bio"
                                type="text"
                                className="registrationInput"
                                name="bio"
                                value={userInfo.bio}
                                onChange={change}
                            />
                            <input
                                placeholder="Email"
                                type="email"
                                className="registrationInput"
                                name="email"
                                value={userInfo.email}
                                onChange={change}
                            />
                            <input
                                placeholder="Phone no"
                                type="tel"
                                className="registrationInput"
                                name="phone"
                                value={userInfo.phone}
                                onChange={change}
                            />
                            {/* <input placeholder="Profile Picture" type="file" /> */}
                            <input
                                placeholder="Password"
                                type="password"
                                className="registrationInput"
                                name="password"
                                value={userInfo.password}
                                onChange={change}
                            />
                            <input
                                placeholder="Confirm Password"
                                type="password"
                                className="registrationInput"
                                name="cpassword"
                                value={userInfo.cpassword}
                                onChange={change}
                            />
                            <select
                                className="registrationInput"
                                name="gender"
                                value={userInfo.gender}
                                onChange={change}
                            >
                                <option defaultValue>Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                            <button className="loginButton" onClick={onSubmit}>
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) : (
        <></>
    );
}
