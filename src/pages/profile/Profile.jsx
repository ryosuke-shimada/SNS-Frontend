import React from "react";
import "./Profile.css";
import { Topbar } from "../../components/topbar/Topbar";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Timeline } from "../../components/timeline/Timeline";
import { Rightbar } from "../../components/rightbar/Rightbar";

export const Profile = () => {
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
    // 画像パスを通す為にenvファイルから行き先を決めている
    // envファイル作業時はローカルサーバーを落とさないと反応しない
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img
                                src={PUBLIC_FOLDER + "/post/3.jpeg"}
                                // localhost:3000/assets/~どこの画像を拾ってくるか
                                alt=""
                                className="profileCoverImg"
                            />
                            <img
                                src={PUBLIC_FOLDER + "/person/1.jpeg"}
                                alt=""
                                className="profileUserImg"
                            />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Ryo</h4>
                            <span className="profileInfoDesc">学生です</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Timeline />
                        <Rightbar profile />
                    </div>
                </div>
            </div>
        </>
    );
};
