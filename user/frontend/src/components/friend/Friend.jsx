import React from "react";
import "./friend.css";
import { Link } from "react-router-dom";

export default function Friend({ user }) {
    return (
        <li className="leftbarFriend">
            <Link style={{ color: "white" }} to={`/profile/${user.id}`}>
                <img
                    className="leftbarFriendImg"
                    src={"http://127.0.0.1:8000/upload/" + user.profilePicture}
                    alt=""
                />
            </Link>
            <span className="leftbarFriendName">{user.username}</span>
        </li>
    );
}
