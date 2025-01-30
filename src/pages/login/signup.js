import React, { useState } from 'react';
import '../../assets/css/login.css';
import '../../assets/css/signup.css';

import password_eye_on from '../../assets/images/password_eye_on.png';
import password_eye_off from '../../assets/images/password_eye_off.png';


const SignUp = () => {
    const [email, setEmail] = useState(''); // 이메일
    const [emailInput, setEmailInput] = useState(false); // 이메일 안내메시지
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [visibility1, setVisibility1] = useState(false); // 비밀번호 eye
    const [visibility2, setVisibility2] = useState(false); // 비밀번호 확인 eye
    const [passwordInput, setPasswordInput] = useState(false); // 비밀번호 안내메시지
    const [passwordMatch, setPasswordMatch] = useState(true); // 비밀번호 확인용
    const [isRequested, setIsRequested] = useState(false); // 인증 요청 상태

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

        const isValid = /^[A-Za-z\d]{8,20}$/.test(value);
        setPasswordInput(!isValid);
    }

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        setPasswordMatch(password === confirmPassword); 
    }

    const handleConfirmPasswordBlur = () => {
        setPasswordMatch(password === confirmPassword);
    };

    const handleRequstedClick = () => {
        setIsRequested(true);
    }

    return (
        <div className='wrap2'>
            <div className='sign-container'>
                <div className='sign-title'>회원가입</div>
                {/*이름*/}
                <div className='sign-content'>
                    <div className='sign-content-name'>이름 <font size="16px" color="#EA1215">*</font></div>
                    <input className='sign-content-input' placeholder='이름을 입력하세요.' type='text' autocomplete="one-time-code"/>
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
                    <div className={`sign-content-auth ${isRequested ? 'requested' : ''}`} onClick={handleRequstedClick}>{isRequested ? '요청 보냄' : '인증 요청'}</div>
                    {emailInput && (<div className='login-content-warn'>유효하지 않은 이메일 형식입니다.</div>)}
                </div>
                {/*인증번호*/}
                <div className='sign-content'>
                    <div className='sign-content-name'>인증번호 <font size="16px" color="#EA1215">*</font></div>
                    <input className='sign-content-input' placeholder='인증번호를 입력하세요.' type='text' autocomplete="one-time-code"/>
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
                    <img className='sign-content-eye' src={visibility1 ? password_eye_on : password_eye_off} onClick={() => handleVisibility(setVisibility1)} />
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
                    <img className='sign-content-eye' src={visibility2 ? password_eye_on : password_eye_off} onClick={() => handleVisibility(setVisibility2)} />
                    {!passwordMatch && (<div className='login-content-warn'>비밀번호가 일치하지 않습니다.</div>)}
                </div>
                {/*회원가입*/}
                {/*이 부분 trim일 경우 반영해서 변경해야함*/}
                <a href='/home'>
                    <div className={`signup-submit ${
                            !(/*name.trim() &&*/ 
                            !emailInput &&
                            !passwordInput && 
                            passwordMatch) 
                                ? 'false' 
                                : 'true'
                        }`} src='/home'>회원가입
                    </div>
                </a>
            </div>
        </div>
    );
}

export default SignUp;