import React, { useState } from 'react';

import FindEmailPopup from "./findEmail";
import FindPasswordPopup from "./findPassword";

import '../../assets/css/signup.css';
import '../../assets/css/findAccount.css';

const FindAccount = () => {
    const [name, setName] = useState<string>(''); // 이름
    const [nick, setNick] = useState<string>(''); // 닉네임
    const [isActive, setIsActive] = useState<'email' | 'password'>('email'); // 상태
    const [email, setEmail] = useState<string>(''); // 이메일
    const [emailInput, setEmailInput] = useState<boolean>(false); // 이메일 안내메시지
    const [isEmailPopupVisible, setIsEmailPopupVisible] = useState<boolean>(false); // 이메일 찾기 완료 팝업 상태
    const [isPasswordPopupVisible, setIsPasswordPopupVisible] = useState<boolean>(false); // 패스워드 찾기 완료 팝업 상태

    // 이메일 유효성 검사
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setEmail(value);

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        setEmailInput(!emailPattern.test(value));
    };

    // 팝업 열기 / 닫기 함수
    const handleEmailOpenPopup = () => setIsEmailPopupVisible(true);
    const handleEmailClosePopup = () => setIsEmailPopupVisible(false);
    const handlePasswordOpenPopup = () => setIsPasswordPopupVisible(true);
    const handlePasswordClosePopup = () => setIsPasswordPopupVisible(false);

    return (
        <div>
        <div className='wrap2'>
            <div className='sign-container'>
            <div className='findAccount-title'>이메일/패스워드 찾기</div>
                {/* 상태 */}
                <div className='findAccount-state'>
                    <div
                        className={`findAccount-state-name ${isActive === 'email' ? 'active' : ''}`}
                        onClick={() => setIsActive('email')}
                    >이메일 찾기</div>
                    <div 
                        className={`findAccount-state-name ${isActive === 'password' ? 'active' : ''}`}
                        onClick={() => setIsActive('password')}
                    >패스워드 찾기</div>
                </div>
                {/* 이름 */}
                <div className='findAccount-content'>
                    <div className='sign-content-name'>이름 <span style={{ color: "#EA1215" }}>*</span></div>
                    <input className='sign-content-input' placeholder='이름을 입력하세요.' type='text' value={name} onChange={(e) => setName(e.target.value)} autoComplete="one-time-code"/>
                </div>
                {/* 닉네임 */}
                <div className='findAccount-content'>
                    <div className='sign-content-name'>닉네임 <span style={{ color: "#EA1215" }}>*</span></div>
                    <input className='sign-content-input' placeholder='닉네임을 입력하세요.' type='text' value={nick} onChange={(e) => setNick(e.target.value)} autoComplete="one-time-code"/>
                </div>
                {/* 이메일 */}
                {isActive === 'password' &&
                    <div className='findAccount-content'>
                        <div className='sign-content-name'>이메일 <span style={{ color: "#EA1215" }}>*</span></div>
                        <input
                            className={`sign-content-input ${emailInput ? 'input-error' : ''}`}
                            placeholder='이메일을 입력하세요.'
                            type='email'
                            value={email} 
                            onChange={handleEmailChange}
                            autoComplete="one-time-code"
                        />
                        {emailInput && (<div className='login-content-warn'>유효하지 않은 이메일 형식입니다.</div>)}
                    </div>
                }
                <div className='findAccount-findBtn' onClick={isActive === 'email' ? handleEmailOpenPopup : handlePasswordOpenPopup}>
                    {isActive === 'email' ? '이메일 찾기' : '패스워드 찾기'}
                </div>
            </div>
        </div>
        {/* 팝업 - 이메일 찾기 완료 */}
        {isEmailPopupVisible && <FindEmailPopup name={name} nick={nick} onClose={handleEmailClosePopup}/>}
        {/* 팝업 - 패스워드 찾기 완료 */}
        {isPasswordPopupVisible && <FindPasswordPopup name={name} nick={nick} email={email} onClose={handlePasswordClosePopup}/>}
        </div>
    );
}

export default FindAccount;
