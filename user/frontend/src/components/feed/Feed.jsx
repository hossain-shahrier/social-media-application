import { useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { GetPost } from "../../FetchData";

const Feed = ({ user }) => {
    const [posts, setPosts] = useState();
    GetPost(setPosts);
    return posts ? (
        <div className="feed">
            <div className="feedWrapper">
                <Share user={user} />
                {posts.map((p) => (
                    <Post key={p.id} post={p} />
                ))}
            </div>
        </div>
    ) : (
        <></>
    );
};

export default Feed;
