import React, { JSX, useState } from "react";
import "../../assets/css/edit-profile.css";
import Menu from "../../components/menu";

import { FaEye, FaEyeSlash } from "react-icons/fa";

// 타입 정의
const EditProfile: React.FC = () => {
  const [passwords, setPasswords] = useState<string[]>(["", ""]);
  const [errorMessages, setErrorMessages] = useState<string[]>([
    "비밀번호를 입력해주세요.",
    "비밀번호를 입력해주세요.",
  ]);
  const [showPasswords, setShowPasswords] = useState<boolean[]>([false, false]);

  const handleChange = (index: number, value: string) => {
    const updatedPasswords = [...passwords];
    updatedPasswords[index] = value;
    setPasswords(updatedPasswords);

    const updatedErrors = [...errorMessages];
    if (index === 1 && updatedPasswords[0] !== updatedPasswords[1]) {
      updatedErrors[index] = "비밀번호가 일치하지 않습니다.";
    } else if (!value) {
      updatedErrors[index] = "비밀번호를 입력해주세요.";
    } else {
      updatedErrors[index] = "";
    }
    setErrorMessages(updatedErrors);
  };

  const togglePasswordVisibility = (index: number) => {
    const updatedVisibility = [...showPasswords];
    updatedVisibility[index] = !updatedVisibility[index];
    setShowPasswords(updatedVisibility);
  };

  return (
    <div className="home__container">
      <Menu />
      <div className="edit-profile__container">
        <p className="edit-profile__title">
          &lt;&nbsp;&nbsp;&nbsp;회원 정보 수정
        </p>
        <div className="edit-profile__sub-container">
          <p className="edit-profile__subtitle">회원정보</p>

          {/* 이름 필드 */}
          <div className="profile-field-container">
            <p className="edit-profile__label">이름</p>
            <p className="edit-profile__field">김슈니</p>
          </div>

          {/* 닉네임 입력 */}
          <div className="profile-field-container">
            <p className="edit-profile__label">닉네임</p>
            <input className="password-input" defaultValue="호두호두" />
          </div>

          {/* 이메일 필드 */}
          <div className="profile-field-container">
            <p className="edit-profile__label">이메일</p>
            <p className="edit-profile__field">ydfsdfed123@gmail.com</p>
          </div>

          {/* 비밀번호 변경 */}
          <div className="profile-field-container">
            <p className="edit-profile__label">
              비밀번호 <span className="required">*</span>
            </p>

            {[
              "비밀번호를 변경하고 싶다면, 새 비밀번호를 입력하세요.",
              "새 비밀번호를 한 번 더 입력하세요.",
            ].map((placeholder, index) => (
              <div key={index}>
                {/* 두 번째 입력창 위에 라벨 추가 */}
                {index === 1 && (
                  <p className="edit-profile__label">
                    비밀번호 확인 <span className="required">*</span>
                  </p>
                )}

                <div className="password-input-container">
                  <input
                    type={showPasswords[index] ? "text" : "password"}
                    className="password-input"
                    placeholder={placeholder}
                    value={passwords[index]}
                    onChange={(e) => handleChange(index, e.target.value)}
                  />
                  <span
                    className="password-toggle"
                    onClick={() => togglePasswordVisibility(index)}
                  >
                    {showPasswords[index]
                      ? (FaEye as unknown as JSX.Element)
                      : (FaEyeSlash as unknown as JSX.Element)}
                  </span>
                </div>
                <p
                  className="edit-profile__error"
                  style={{
                    visibility: errorMessages[index] ? "visible" : "hidden",
                  }}
                >
                  {errorMessages[index] || "공백"}
                </p>
              </div>
            ))}
          </div>

          <button
            className={`edit-profile__button ${
              passwords[0] && passwords[1] ? "active" : ""
            }`}
            disabled={!passwords[0] || !passwords[1]}
          >
            저장
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
