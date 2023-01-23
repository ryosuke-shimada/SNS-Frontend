import React from "react";
import "./Register.css";

export const Register = () => {
    return (
        <div className="register">
            <div className="registerWrapper">
                <div className="registerLeft">
                    <h3 className="registerLogo">初心者掲示板</h3>
                    <span className="registerDesc">初めてのプログラミング</span>
                </div>
                <div className="registerRight">
                    <div className="registerBox">
                        <p className="registerMsg">新規登録はこちら</p>
                        <input
                            type="text"
                            className="registerInput"
                            placeholder="ユーザー名"
                        />
                        <input
                            type="text"
                            className="registerInput"
                            placeholder="Eメール"
                        />
                        <input
                            type="text"
                            className="registerInput"
                            placeholder="パスワード"
                        />
                        <input
                            type="text"
                            className="registerInput"
                            placeholder="確認用パスワード"
                        />
                        <button className="registerSignupButton">
                            サインアップ
                        </button>

                        <button className="registerLoginButton">
                            ログイン
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
