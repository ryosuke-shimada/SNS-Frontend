import { createContext, useReducer } from "react";
import { AuthReducer } from "./AuthReducer";

// 最初のユーザー状態
const initialState = {
    // user: null,
    user: {
        id: "639be0297ffa2c9ad258a3d0",
        username: "Ryosuke",
        email: "Ryosuke@gmail.com",
        password: "123456",
        profilePicture: "",
        coverPicture: "",
        followers: [],
        followings: [],
        isAdmin: false,
    },
    isFetching: false,
    error: false,
};

// 状態をグローバルに管理する
export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);
    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
