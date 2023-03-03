import React, { useContext, useEffect, useState } from "react";
import { Post } from "../post/Post";
import { Share } from "../share/Share";
import "./Timeline.css";
// import { Posts } from "../../dummyData";
import axios from "axios";
import { AuthContext } from "../../state/AuthContext";

export const Timeline = ({ username }) => {
    const [posts, setPosts] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = username
                ? await axios.get(`/posts/profile/${username}`) //プロフィールの場合
                : await axios.get(`/posts/timeline/${user.id}`); //ホームの場合
            // console.log(response);
            setPosts(response.data);
        };
        fetchPosts();
    }, [username, user.id]);
    // useEffectはasync awaitを打ち込めない、新たな関数を定義する必要がある
    return (
        <div className="timeline">
            <div className="timelineWrapper">
                <Share />
                {posts.map((post) => (
                    <Post post={post} key={post.id} />
                ))}
            </div>
        </div>
    );
};
