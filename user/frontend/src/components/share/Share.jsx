import { useState } from "react";
import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";
import { createPost } from "../../FetchData";

export default function Share({ user }) {
    const [post, setPost] = useState();
    const [selectedFile, setSelectedFile] = useState();

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("photo", selectedFile);
        createPost({ post: post, userId: user.id, photo: selectedFile });
    };

    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img
                        src={
                            user
                                ? "http://127.0.0.1:8000/upload/" +
                                  user.profilePicture
                                : "/assets/1.png"
                        }
                        alt=""
                        className="shareProfileImg"
                    />
                    <input
                        placeholder="Share What's in your mind"
                        className="shareInput"
                        name="post"
                        onChange={(e) => setPost(e.target.value)}
                    />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia
                                htmlColor="green"
                                className="shareIcon"
                            />
                            <span className="shareOptionText">
                                Photo or Video
                                <input
                                    name="photo"
                                    type="file"
                                    onChange={(e) =>
                                        setSelectedFile(e.target.files[0])
                                    }
                                />
                            </span>
                        </div>
                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareIcon" />
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="green" className="shareIcon" />
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions
                                htmlColor="goldenrod"
                                className="shareIcon"
                            />
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton" onClick={onSubmit}>
                        Post
                    </button>
                </div>
            </div>
        </div>
    );
}
