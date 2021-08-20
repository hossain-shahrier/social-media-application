import React, { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import Topbar from "../../components/topbar/Topbar";
import axios from "axios";
import "./chat.css";

export default function Chat({ user }) {
    const didMountRef = useRef(false);
    const [loading, setLoading] = useState(true);
    const history = useHistory();

    async function getFile(url) {
        let response = await fetch(url);
        let data = await response.blob();
        console.log(data);
        return new File([data], "test.jpg", { type: "image/jpeg" });
    }

    useEffect(() => {
        if (!user) {
            history.push("/");
            return;
        }
        axios
            .get("https://api.chatengine.io/users/me/", {
                headers: {
                    "project-id": "6226d7cb-28a9-490f-a27d-75e52a92a8f9",
                    "user-name": user.username,
                    "user-secret": user.id,
                },
            })

            .then(() => setLoading(false))

            .catch((e) => {
                let formdata = new FormData();
                formdata.append("email", user.email);
                formdata.append("username", user.username);
                formdata.append("secret", user.id);

                getFile("assets/2.jpeg").then((avatar) => {
                    formdata.append("avatar", avatar, avatar.name);

                    axios
                        .post("https://api.chatengine.io/users/", formdata, {
                            headers: {
                                "private-key":
                                    "5cae34ab-bdb7-4de0-86e7-09c0167c9ed1",
                            },
                        })
                        .then(() => setLoading(false))
                        .catch((e) => console.log("e", e.response));
                });
            });
    }, [user, history]);

    if (!user || loading) return <div className="loading">Loading...</div>;
    return (
        <div className="chats-page">
            <Topbar />
            <ChatEngine
                height="calc(100vh - 50px)"
                projectID="6226d7cb-28a9-490f-a27d-75e52a92a8f9"
                userName={user.username}
                userSecret={user.id}
            />
        </div>
    );
}
