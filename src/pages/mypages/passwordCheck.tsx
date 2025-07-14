import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Menu from "../../components/menu";
import openEyeIcon from "../../assets/images/password_eye_on.png";
import closeEyeIcon from "../../assets/images/password_eye_off.png";

import "../../assets/css/passwordCheck.css";

const PasswordCheck = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleBack = () => {
        navigate(-1);
    };

    const togglePassword = () => {
        setShowPassword(prev => !prev);
    };

    return (
        <div className="passwordcheck">
            <Menu />
            <div className="passwordcheck_container">
                <div className="passwordcheck_header">
                    <span className="passwordcheck_back" onClick={handleBack}>&lt;</span>
                    <h2 className="passwordcheck_title">회원정보</h2>
                </div>

                <div className="passwordcheck_content">
                    <h3 className="passwordcheck_label">비밀정보 확인</h3>
                    <p className="passwordcheck_subtext">
                        회원님의 정보를 안전하게 보호하기 위해 비밀번호를 다시 한번 입력해주세요.
                    </p>

                    <div className="passwordcheck_input-wrapper">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="비밀번호를 입력해주세요."
                            className="passwordcheck_input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <img
                            src={showPassword ? openEyeIcon : closeEyeIcon}
                            alt="비밀번호 보기"
                            className="passwordcheck_eye-icon"
                            onClick={togglePassword}
                        />
                        <p className="passwordcheck_error">안내메시지</p>
                    </div>

                    <button className={`passwordcheck_button ${password ? "active" : ""}`} disabled={!password}>
                        다음
                    </button>

                </div>
            </div>
        </div>
    );
};

export default PasswordCheck;
