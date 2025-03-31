import React from "react";
import "../../assets/css/signup.css";

// 🔹 props 타입 정의
interface SignUpCheckedProps {
    email: string;
    onClose: () => void; // 함수 타입 지정
}

const SignUpChecked: React.FC<SignUpCheckedProps> = ({ email, onClose }) => {
    return (
        <div className="sign-checked">
            <div className="sign-checked-email">{email}</div>
            <div className="sign-checked-content">
                이메일 중복확인이 완료되었습니다.<br />
                인증 요청을 다시 한 번 눌러 주세요.
            </div>
            <div className="sign-checked-btn" onClick={onClose}>확인</div>
        </div>
    );
};

export default SignUpChecked;