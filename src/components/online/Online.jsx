import React from "react";

export const Online = ({ user }) => {
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
                <img
                    src={
                        user.profilePicture
                            ? PUBLIC_FOLDER + user.profilePicture
                            : PUBLIC_FOLDER + "/person/noAvatar.png"
                    }
                    alt=""
                    className="rightbarProfileImg"
                />
                <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">{user.username}</span>
        </li>
    );
};
