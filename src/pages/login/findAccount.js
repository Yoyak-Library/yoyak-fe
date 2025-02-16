import React, { use, useState } from 'react';

import FindEmailPopup from "./findEmail";
import FindPasswordPopup from "./findPassword";

import '../../assets/css/signup.css';
import '../../assets/css/findAccount.css';

const FindAccount = () => {
    const [name, setName] = useState('');
    const [nick, setNick] = useState('');
    const [isActive, setIsActive] = useState('email'); // 상태
    const [email, setEmail] = useState(''); // 이메일
    const [emailInput, setEmailInput] = useState(false); // 이메일 안내메시지
    const [isEmailPopupVisible, setIsEmailPopupVisible] = useState(false); // 이메일 찾기 완료 팝업 상태
    const [isPasswordPopupVisible, setIsPasswordPopupVisible] = useState(false); // 이메일 찾기 완료 팝업 상태

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

    const handleEmailOpenPopup = () => {
        setIsEmailPopupVisible(true);
    }

    const handleEmailClosePopup = () => {
        setIsEmailPopupVisible(false);
    }

    const handlePasswordOpenPopup = () => {
        setIsPasswordPopupVisible(true);
    }

    const handlePasswordClosePopup = () => {
        setIsPasswordPopupVisible(false);
    }

    return (
        <div>
        <div className='wrap2'>
            <div className='sign-container'>
            <div className='findAccount-title'>이메일/패스워드 찾기</div>
                {/*상태*/}
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
                {/*이름*/}
                <div className='findAccount-content'>
                    <div className='sign-content-name'>이름 <font size="16px" color="#EA1215">*</font></div>
                    <input className='sign-content-input' placeholder='이름을 입력하세요.' type='text' value={name} onChange={(e) => setName(e.target.value)} autocomplete="one-time-code"/>
                </div>
                {/*닉네임*/}
                <div className='findAccount-content'>
                    <div className='sign-content-name'>닉네임 <font size="16px" color="#EA1215">*</font></div>
                    <input className='sign-content-input' placeholder='닉네임을 입력하세요.' type='text' value={nick} onChange={(e) => setNick(e.target.value)} autocomplete="one-time-code"/>
                </div>
                {/*이메일*/}
                {isActive === 'password' &&
                    <div className='findAccount-content'>
                        <div className='sign-content-name'>이메일 <font size="16px" color="#EA1215">*</font></div>
                        <input
                            className={`sign-content-input ${emailInput ? 'input-error' : ''}`}
                            placeholder='이메일을 입력하세요.'
                            type='email'
                            value={email} 
                            onChange={handleEmailChange}
                            autocomplete="one-time-code"
                        />
                        {emailInput && (<div className='login-content-warn'>유효하지 않은 이메일 형식입니다.</div>)}
                    </div>
                }
                <div className='findAccount-findBtn' onClick={isActive === 'email' ? handleEmailOpenPopup : handlePasswordOpenPopup}>{isActive === 'email' ? '이메일 찾기' : '패스워드 찾기'}</div>
            </div>
        </div>
        {/*팝업 - 이메일 찾기 완료*/}
        {isEmailPopupVisible && <FindEmailPopup name={name} nick={nick} onClose={handleEmailClosePopup}/>}
        {/*팝업 - 패스워드 찾기 완료*/}
        {isPasswordPopupVisible && <FindPasswordPopup name={name} nick={nick} email={email} onClose={handlePasswordClosePopup}/>}
        </div>
    );
}

export default FindAccount;