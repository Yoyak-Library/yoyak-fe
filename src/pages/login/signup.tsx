import React, { useState } from 'react';

import SignUpChecked from "./signUpChecked";

import '../../assets/css/login.css';
import '../../assets/css/signup.css';

import password_eye_on from '../../assets/images/password_eye_on.png';
import password_eye_off from '../../assets/images/password_eye_off.png';

import axios from 'axios';


const SignUp = () => {
    const [name, setName] = useState<string>(''); // 이름
    const [nickname, setNickname] = useState<string>(''); // 닉네임
    const [email, setEmail] = useState<string>(''); // 이메일
    const [emailInput, setEmailInput] = useState<boolean>(false); // 이메일 안내메시지
    const [authCode, setAuthCode] = useState<string>(''); // 인증번호
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [visibility1, setVisibility1] = useState<boolean>(false); // 비밀번호 eye
    const [visibility2, setVisibility2] = useState<boolean>(false); // 비밀번호 확인 eye
    const [passwordInput, setPasswordInput] = useState<boolean>(false); // 비밀번호 안내메시지
    const [passwordMatch, setPasswordMatch] = useState<boolean>(true); // 비밀번호 확인용
    const [isRequested, setIsRequested] = useState<boolean>(false); // 인증 요청 상태
    const [isVerified, setIsVerified] = useState<boolean>(false); // 인증 성공 여부
    const [authMessage, setAuthMessage] = useState<string>(''); // 안내 메시지
    const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false); // 중복 확인 팝업 상태

    // 이메일 유효성 검사
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setEmail(value);

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        setEmailInput(!emailPattern.test(value));
    };

    // 인증번호
    const handleAuthCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAuthCode(e.target.value);
    };

    // 비밀번호 가시성 변경
    const handleVisibility = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
        setter((prev) => !prev);
    };

    // 비밀번호 입력
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPassword(value);

        if (value.trim() === '') {
            setPasswordInput(false);
            return;
        }

        const isValid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+~<>?:{}])[A-Za-z\d!@#$%^&*()_+~<>?:{}]{6,20}$/.test(value);
        setPasswordInput(!isValid);

        if (confirmPassword) {
            setPasswordMatch(value === confirmPassword);
        }
    };

    // 비밀번호 확인 입력
    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setConfirmPassword(value);
        setPasswordMatch(password === value);
    };

    // 비밀번호 일치 여부 확인
    const handleConfirmPasswordBlur = () => {
        setPasswordMatch(password === confirmPassword);
    };

    // 이메일 중복 확인
    const handleRequestedClick = async () => {
        if (!emailInput && email) {
            try {
                const response = await axios.post('https://api.yoyaklery.site/auth/send-email', { user_email: email });

                console.log('이메일 전송 성공:', response.data);
                setIsRequested(true);
                setIsPopupVisible(true);
            } catch (error) {
                console.log('이메일 전송 실패', error);
                alert("이메일 전송에 실패했어요. 다시 시도해주세요.");
            }
        }
    };

    // 인증 버튼 임시...
    const handleFakeVerifyCode = () => {
        if (authCode.trim()) {
            setIsVerified(true);
            setAuthMessage('');
        } else {
            setIsVerified(false);
            setAuthMessage('인증번호를 입력해주세요.');
        }
    };


    // 팝업 닫기
    const handleClosePopup = () => {
        setIsPopupVisible(false);
    };

    // 회원가입 버튼
    const handleSignUp = async () => {
        if (
            name.trim() &&
            nickname.trim() &&
            !emailInput &&
            isRequested &&
            authCode.trim() &&
            !passwordInput &&
            passwordMatch
        ) {
            try {
                const response = await axios.post('https://api.yoyaklery.site/auth/register', {
                    user_name: name,
                    user_nick: nickname,
                    user_email: email,
                    email_verified: false,
                    verificationCode: authCode,
                    user_pwd: password,
                    confirmPassword: confirmPassword
                });

                console.log('회원가입 성공', response.data);
                window.location.href = "/home";
            } catch (error: any) {
                console.log('회원가입 실패', error);
                console.log('서버 응답:', error.response?.data);
                alert('회원가입에 실패하였습니다. 다시 시도해주세요.');
            }
        }
    }

    return (
        <div>
            <div className="wrap2">
                <div className="sign-container">
                    <div className="sign-title">회원가입</div>

                    {/* 이름 */}
                    <div className="sign-content">
                        <div className="sign-content-name">이름 <span style={{ color: "#EA1215" }}>*</span></div>
                        <input className="sign-content-input" placeholder="이름을 입력하세요." type="text" onChange={(e) => setName(e.target.value)} autoComplete="one-time-code" />
                    </div>

                    {/* 닉네임 */}
                    <div className="sign-content">
                        <div className="sign-content-name">닉네임 <span style={{ color: "#EA1215" }}>*</span></div>
                        <input className="sign-content-input" placeholder="닉네임을 입력하세요." type="text" onChange={(e) => setNickname(e.target.value)} autoComplete="one-time-code" />
                    </div>

                    {/* 이메일 */}
                    <div className="sign-content">
                        <div className="sign-content-name">이메일 <span style={{ color: "#EA1215" }}>*</span></div>
                        <input
                            className={`sign-content-input ${emailInput ? 'input-error' : ''}`}
                            placeholder="이메일을 입력하세요."
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            autoComplete="one-time-code"
                        />
                        <div className={`sign-content-auth ${isRequested ? 'requested' : ''}`} onClick={handleRequestedClick}>
                            {isRequested ? '요청 보냄' : '중복 확인'}
                        </div>
                        {emailInput && (<div className="login-content-warn">유효하지 않은 이메일 형식입니다.</div>)}
                    </div>

                    {/* 인증번호 */}
                    <div className="sign-content">
                        <div className="sign-content-name">인증번호 <span style={{ color: "#EA1215" }}>*</span></div>
                        <input
                            className="sign-content-input"
                            placeholder="인증번호를 입력하세요."
                            type="text"
                            value={authCode}
                            onChange={(e) => setAuthCode(e.target.value)}
                            style={{ flex: 1 }}
                        />
                        <div
                            className={`sign-content-auth ${isVerified ? 'verified' : ''}`}
                            onClick={!isVerified ? handleFakeVerifyCode : undefined}
                        >
                            {isVerified ? '인증 완료' : '인증 확인'}
                        </div>
                        {authMessage && <div className="login-content-warn">{authMessage}</div>}
                    </div>

                    {/* 비밀번호 */}
                    <div className="sign-content">
                        <div className="sign-content-name">비밀번호 <span style={{ color: "#EA1215" }}>*</span></div>
                        <input
                            className={`sign-content-input ${passwordInput ? 'input-error' : ''}`}
                            placeholder="8~20자 이내, 영문/숫자/특수문자 포함"
                            type={visibility1 ? 'text' : 'password'}
                            value={password}
                            onChange={handlePasswordChange}
                            autoComplete="one-time-code"
                        />
                        <img className="sign-content-eye" src={visibility1 ? password_eye_off : password_eye_on} onClick={() => handleVisibility(setVisibility1)} alt="비밀번호 표시" />
                        {passwordInput && (<div className="login-content-warn">비밀번호는 6~20자 이내이며, 영문, 숫자, 특수문자를 모두 포함해야 합니다.</div>)}
                    </div>

                    {/* 비밀번호 확인 */}
                    <div className="sign-content">
                        <div className="sign-content-name">비밀번호 확인 <span style={{ color: "#EA1215" }}>*</span></div>
                        <input
                            className={`sign-content-input ${!passwordMatch ? 'input-error' : ''}`}
                            placeholder="비밀번호 확인"
                            type={visibility2 ? 'text' : 'password'}
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            onBlur={handleConfirmPasswordBlur}
                            autoComplete="one-time-code"
                        />
                        <img className="sign-content-eye" src={visibility2 ? password_eye_off : password_eye_on} onClick={() => handleVisibility(setVisibility2)} alt="비밀번호 확인 표시" />
                        {!passwordMatch && (<div className="login-content-warn">비밀번호가 일치하지 않습니다.</div>)}
                    </div>

                    {/* 회원가입 버튼 */}
                    <button
                        className={`sign-submit ${!(name.trim() &&
                            nickname.trim() &&
                            !emailInput &&
                            isRequested &&
                            authCode.trim() &&
                            !passwordInput &&
                            passwordMatch) ? 'false' : 'true'
                            }`}
                        onClick={handleSignUp}
                    >회원가입</button>
                </div>
            </div>

            {/* 팝업 - 중복 확인 완료 */}
            {isPopupVisible && <SignUpChecked email={email} onClose={handleClosePopup} />}
        </div>
    );
}

export default SignUp;