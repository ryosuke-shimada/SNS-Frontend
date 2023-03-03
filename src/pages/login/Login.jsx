import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { loginCall } from "../../actionCalls";
import { AuthContext } from "../../state/AuthContext";
import "./Login.css";

export const Login = () => {
    const email = useRef();
    const password = useRef();
    const { user, isFetching, error, dispatch } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(email.current.value);
        // console.log(password.current.value);
        loginCall(
            {
                email: email.current.value,
                password: password.current.value,
            },

            dispatch
        );
    };

    console.log(user);
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">初心者掲示板</h3>
                    <span className="loginDesc">初めてのプログラミング</span>
                </div>
                <div className="loginRight">
                    <form
                        className="loginBox"
                        onSubmit={(e) => handleSubmit(e)}
                    >
                        <p className="loginMsg">ログインはこちら</p>
                        <input
                            type="email"
                            className="loginInput"
                            placeholder="Eメール"
                            required
                            ref={email}
                        />
                        <input
                            type="password"
                            className="loginInput"
                            placeholder="パスワード"
                            required
                            minLength="6"
                            ref={password}
                        />
                        <button className="loginButton">ログイン</button>
                        <span className="loginForgot">
                            パスワードを忘れた方へ
                        </span>
                        <Link to="/register" className="loginLink">
                            <button className="loginRegisterButton">
                                アカウント作成
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};
