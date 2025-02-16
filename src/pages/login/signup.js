import React, { useState } from 'react';

import SignUpChecked from "./signUpChecked";

import '../../assets/css/login.css';
import '../../assets/css/signup.css';

import password_eye_on from '../../assets/images/password_eye_on.png';
import password_eye_off from '../../assets/images/password_eye_off.png';


const SignUp = () => {
    const [name, setName] = useState(''); // 이름
    const [nickname, setNickname] = useState(''); // 닉네임
    const [email, setEmail] = useState(''); // 이메일
    const [emailInput, setEmailInput] = useState(false); // 이메일 안내메시지
    const [authCode, setAuthCode] = useState(''); // 인증번호
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [visibility1, setVisibility1] = useState(false); // 비밀번호 eye
    const [visibility2, setVisibility2] = useState(false); // 비밀번호 확인 eye
    const [passwordInput, setPasswordInput] = useState(false); // 비밀번호 안내메시지
    const [passwordMatch, setPasswordMatch] = useState(true); // 비밀번호 확인용
    const [isRequested, setIsRequested] = useState(false); // 인증 요청 상태
    const [isPopupVisible, setIsPopupVisible] = useState(false); // 중복 확인 팝업 상태

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(value)) {
            setEmailInput(true);
        } else {
            setEmailInput(false);
        }
    }

    const handleVisibility = (setter) => {
        setter((prev) => !prev);
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
    
        // 비밀번호가 비어있을 때는 에러 메시지를 표시하지 않음
        if (value.trim() === '') {
            setPasswordInput(false);
            return;
        }
    
        // 영문, 숫자, 특수문자 포함 가능 (8~20자리)
        const isValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+~<>?:{}]{8,20}$/.test(value);
        setPasswordInput(!isValid); // 유효하지 않으면 true, 유효하면 false
    
        // 비밀번호 확인 값이 있을 경우, 즉시 일치 여부 체크
        if (confirmPassword) {
            setPasswordMatch(value === confirmPassword);
        }
    };    
    
    const handleConfirmPasswordChange = (e) => {
        const value = e.target.value;
        setConfirmPassword(value);
    
        // 비밀번호와 일치 여부 체크
        setPasswordMatch(password === value);
    };    

    const handleConfirmPasswordBlur = () => {
        setPasswordMatch(password === confirmPassword);
    };

    const handleRequstedClick = () => {
        if (!emailInput && email) { // 유효한 이메일일 때만 팝업 띄우기
            setIsRequested(true);
            setIsPopupVisible(true);
        }
    }

    const handleClosePopup = () => {
        setIsPopupVisible(false);
    }

    return (
        <div>
            <div className='wrap2'>
                <div className='sign-container'>
                    <div className='sign-title'>회원가입</div>
                    {/*이름*/}
                    <div className='sign-content'>
                        <div className='sign-content-name'>이름 <font size="16px" color="#EA1215">*</font></div>
                        <input className='sign-content-input' placeholder='이름을 입력하세요.' type='text' onChange={(e) => setName(e.target.value)} autocomplete="one-time-code" />
                    </div>
                    {/*닉네임*/}
                    <div className='sign-content'>
                        <div className='sign-content-name'>닉네임 <font size="16px" color="#EA1215">*</font></div>
                        <input className='sign-content-input' placeholder='닉네임을 입력하세요.' type='text' onChange={(e) => setNickname(e.target.value)} autocomplete="one-time-code" />
                    </div>
                    {/*이메일*/}
                    <div className='sign-content'>
                        <div className='sign-content-name'>이메일 <font size="16px" color="#EA1215">*</font></div>
                        <input
                            className={`sign-content-input ${emailInput ? 'input-error' : ''}`}
                            placeholder='이메일을 입력하세요.'
                            type='email'
                            value={email}
                            onChange={handleEmailChange}
                            autocomplete="one-time-code"
                        />
                        <div className={`sign-content-auth ${isRequested ? 'requested' : ''}`} onClick={handleRequstedClick}>{isRequested ? '요청 보냄' : '중복 확인'}</div>
                        {emailInput && (<div className='login-content-warn'>유효하지 않은 이메일 형식입니다.</div>)}
                    </div>
                    {/*인증번호*/}
                    <div className='sign-content'>
                        <div className='sign-content-name'>인증번호 <font size="16px" color="#EA1215">*</font></div>
                        <input className='sign-content-input' placeholder='인증번호를 입력하세요.' type='password' onChange={(e) => setAuthCode(e.target.value)} autocomplete="one-time-code" />
                        <div className='sign-content-auth'>인증 확인</div>
                    </div>
                    {/*비밀번호*/}
                    <div className='sign-content'>
                        <div className='sign-content-name'>비밀번호 <font size="16px" color="#EA1215">*</font></div>
                        <input
                            className={`sign-content-input ${passwordInput ? 'input-error' : ''}`}
                            placeholder='8~20자 이내, 영문/숫자 조합'
                            type={visibility1 ? 'text' : 'password'}
                            value={password}
                            onChange={handlePasswordChange}
                            autocomplete="one-time-code"
                        />
                        <img className='sign-content-eye' src={visibility1 ? password_eye_off : password_eye_on} onClick={() => handleVisibility(setVisibility1)} />
                        {passwordInput && (<div className='login-content-warn'>비밀번호는 8~20자 이내의 영문/숫자 조합이어야 합니다.</div>)}
                    </div>
                    {/*비밀번호 확인*/}
                    <div className='sign-content'>
                        <div className='sign-content-name'>비밀번호 확인 <font size="16px" color="#EA1215">*</font></div>
                        <input
                            className={`sign-content-input ${!passwordMatch ? 'input-error' : ''}`}
                            placeholder='비밀번호 확인'
                            type={visibility2 ? 'text' : 'password'}
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            onBlur={handleConfirmPasswordBlur}
                            autocomplete="one-time-code"
                        />
                        <img className='sign-content-eye' src={visibility2 ? password_eye_off : password_eye_on} onClick={() => handleVisibility(setVisibility2)} />
                        {!passwordMatch && (<div className='login-content-warn'>비밀번호가 일치하지 않습니다.</div>)}
                    </div>
                    {/*회원가입*/}
                    {/*이 부분 trim일 경우 반영해서 변경해야함*/}
                    <button
                        className={`sign-submit ${!(name.trim() &&
                                nickname.trim() &&
                                !emailInput &&
                                isRequested &&
                                authCode.trim() &&
                                !passwordInput &&
                                passwordMatch) ? 'false' : 'true'
                            }`}
                        onClick={() => {
                            if (
                                name.trim() &&
                                nickname.trim() &&
                                !emailInput &&
                                isRequested &&
                                authCode.trim() &&
                                !passwordInput &&
                                passwordMatch
                            ) {
                                window.location.href = "/home";  // 조건 만족 시 이동
                            }
                        }}
                    >회원가입</button>
                </div>
            </div>
            {/*팝업 - 중복확인 완료*/}
            {isPopupVisible && <SignUpChecked email={email} onClose={handleClosePopup} />}
            {/*팝업 - 중복 상태 미완*/}
        </div>
    );
}

export default SignUp;