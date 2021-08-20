import { useState, useEffect } from "react";
import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { GetUser, ReactPost, RemoveReactPost } from "../../FetchData";
import { Link } from "react-router-dom";

export default function Post({ post }) {
    const [like, setLike] = useState(post.react);
    const [isLiked, setIsLiked] = useState(false);
    let newLike = like;
    const [user, setUser] = useState();
    GetUser(setUser, "getUser");

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
        // isLiked ? RemoveReactPost(post.id) : ReactPost(post.id);
    };

    return user ? (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link
                            to={`/profile/${
                                user.filter((u) => u.id === post.userId)[0].id
                            }`}
                        >
                            <img
                                src={
                                    user
                                        ? "http://127.0.0.1:8000/upload/" +
                                          user.filter(
                                              (u) => u.id === post.userId
                                          )[0].profilePicture
                                        : "/assets/default.jpeg"
                                }
                                alt=""
                                className="postProfileImg"
                            />
                        </Link>
                        <Link
                            style={{ textDecoration: "none" }}
                            to={`/profile/${
                                user.filter((u) => u.id === post.userId)[0].id
                            }`}
                        >
                            <span className="postUsername">
                                {user
                                    ? user.filter(
                                          (u) => u.id === post.userId
                                      )[0].username
                                    : ""}
                            </span>
                        </Link>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.post}</span>
                    <img
                        src={"http://127.0.0.1:8000/upload/" + post.photo}
                        alt=""
                        className="postImg"
                    />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img
                            src="/assets/react.png"
                            alt=""
                            className="likeIcon"
                            onClick={likeHandler}
                        />
                        <span className="postLikeCounter">
                            {like} people like it
                        </span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">
                            {post.comment} comments
                        </span>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <></>
    );
}
