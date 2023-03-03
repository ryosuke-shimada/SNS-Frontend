import React, { useEffect, useState } from "react";
import "./Profile.css";
import { Topbar } from "../../components/topbar/Topbar";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Timeline } from "../../components/timeline/Timeline";
import { Rightbar } from "../../components/rightbar/Rightbar";
import axios from "axios";
import { useParams } from "react-router-dom";

export const Profile = () => {
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
    // 画像パスを通す為にenvファイルから行き先を決めている
    // envファイル作業時はローカルサーバーを落とさないと反応しない

    const [user, setUser] = useState({});
    const username = useParams().username;
    // console.log(username);

    useEffect(() => {
        const fetchUser = async () => {
            const response = await axios.get(`/users?username=${username}`);
            // console.log(response);
            setUser(response.data);
        };
        fetchUser();
    }, [username]);
    // 一度だけ発火させる
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img
                                src={
                                    user.coverPicture ||
                                    PUBLIC_FOLDER + "/post/3.jpeg"
                                }
                                // localhost:3000/assets/~どこの画像を拾ってくるか
                                alt=""
                                className="profileCoverImg"
                            />
                            <img
                                src={
                                    user.profilePicture
                                        ? PUBLIC_FOLDER + user.profilePicture
                                        : PUBLIC_FOLDER + "/person/noAvatar.png"
                                }
                                alt=""
                                className="profileUserImg"
                            />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">{user.username}</h4>
                            <span className="profileInfoDesc">{user.desc}</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Timeline username={username} />
                        <Rightbar user={user} />
                    </div>
                </div>
            </div>
        </>
    );
};
