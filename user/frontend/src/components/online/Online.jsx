import React from "react";
import "./online.css";
import { Link } from "react-router-dom";

export default function Online({ user }) {
    return (
        <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
                <Link style={{ color: "white" }} to={`/profile/${user.id}`}>
                    <img
                        src={
                            "http://127.0.0.1:8000/upload/" +
                            user.profilePicture
                        }
                        alt=""
                        className="rightbarProfileImg"
                    />
                </Link>
                <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">{user.username}</span>
        </li>
    );
}
