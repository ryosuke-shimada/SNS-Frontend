import React from "react";

export const CloseFriend = ({ user }) => {
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <li className="sidebarFriend">
            <img
                src={
                    user.profilePicture
                        ? PUBLIC_FOLDER + user.profilePicture
                        : PUBLIC_FOLDER + "/person/noAvatar.png"
                }
                alt=""
                className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">{user.username}</span>
        </li>
    );
};
