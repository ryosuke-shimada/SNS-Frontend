import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

export const Register = () => {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordConfirmation = useRef();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // 確認用パスワードがあっているかの確認
        if (password.current.value !== passwordConfirmation.current.value) {
            passwordConfirmation.current.setCustomValidity(
                "パスワードが違います"
            );
        } else {
            try {
                const user = {
                    username: username.current.value,
                    email: email.current.value,
                    password: password.current.value,
                };
                // registerAPIを発動
                await axios.post("/auth/register", user);
                navigate("/login");
            } catch (err) {
                console.log(err);
            }
        }
    };

    return (
        <div className="register">
            <div className="registerWrapper">
                <div className="registerLeft">
                    <h3 className="registerLogo">初心者掲示板</h3>
                    <span className="registerDesc">初めてのプログラミング</span>
                </div>
                <div className="registerRight">
                    <form
                        className="registerBox"
                        onSubmit={(e) => handleSubmit(e)}
                    >
                        <p className="registerMsg">新規登録はこちら</p>
                        <input
                            type="text"
                            className="registerInput"
                            placeholder="ユーザー名"
                            required
                            ref={username}
                        />
                        <input
                            type="email"
                            className="registerInput"
                            placeholder="Eメール"
                            required
                            ref={email}
                        />
                        <input
                            type="password"
                            className="registerInput"
                            placeholder="パスワード"
                            required
                            minLength="6"
                            ref={password}
                        />
                        <input
                            type="password"
                            className="registerInput"
                            placeholder="確認用パスワード"
                            required
                            minLength="6"
                            ref={passwordConfirmation}
                        />
                        <button className="registerSignupButton" type="submit">
                            サインアップ
                        </button>

                        <button className="registerLoginButton">
                            ログイン
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
