import { MoreVert } from "@mui/icons-material";
import React, { useState, useEffect, useContext } from "react";
import "./Post.css";
import axios from "axios";
// import { Users } from "../../dummyData";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../state/AuthContext";

export const Post = ({ post }) => {
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setisLiked] = useState(false);
    const [user, setUser] = useState({});

    const { user: current } = useContext(AuthContext);

    const handleLike = async () => {
        try {
            //いいねのAPI
            await axios.put(`/posts/${post.id}/like`, {
                userId: current.id,
            });
        } catch (err) {
            console.log(err);
        }

        setLike(isLiked ? like - 1 : like + 1);
        setisLiked(!isLiked);
    };
    useEffect(() => {
        const fetchUser = async () => {
            const response = await axios.get(`/users/?userId=${post.userId}`);
            // console.log(response);
            setUser(response.data);
        };
        fetchUser();
    }, [post.userId]);

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`/profile/${user.username}`}>
                            <img
                                src={
                                    user.profilePicture
                                        ? PUBLIC_FOLDER + user.profilePicture
                                        : PUBLIC_FOLDER + "/person/noAvatar.png"
                                }
                                alt=""
                                className="postProfileImg"
                            />
                        </Link>
                        <span className="postUserName">{user.username}</span>
                        <span className="postDate">
                            {format(post.createdAt)}
                        </span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post.desc}</span>
                    <img
                        src={PUBLIC_FOLDER + post.img}
                        alt=""
                        className="postImg"
                    />
                </div>

                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img
                            src={PUBLIC_FOLDER + "/heart.png"}
                            alt=""
                            className="likeIcon"
                            onClick={() => handleLike()}
                        />
                        <span className="postLikeCounter">
                            {like}人がいいねしました
                        </span>
                    </div>

                    <div className="postBottomright">
                        <span className="postCommentText">
                            {post.comment}:コメント
                        </span>
                    </div>
                </div>
            </div>
        </div>
        // 変更
    );
};
