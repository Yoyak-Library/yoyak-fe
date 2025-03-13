import React, { useState } from 'react';
import '../../assets/css/check-password.css';
import Menu from '../../components/menu';

import { FaEye, FaEyeSlash } from 'react-icons/fa';

const CheckPassword = () => {
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('비밀번호를 입력해주세요.');
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        setErrorMessage(value ? '' : '비밀번호를 입력해주세요.');
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='home__container'>
            <Menu />
            <div className='check-password__container'>
                <p className='check-password__title'>&lt;&nbsp;&nbsp;&nbsp;회원 정보 수정</p>
                <p className='check-password__subtitle'>비밀번호 확인</p>
                <p className='check-password__description'>
                    회원님의 정보를 안전하게 보호하기 위해 비밀번호를 다시 한번 입력해주세요.
                </p>
                <div className='spacer' /> {/* 두 줄 띄우기 */}
                <div className='password-input-container'>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        className='password-input'
                        placeholder='비밀번호를 입력해주세요.'
                        value={password}
                        onChange={handleChange}
                    />
                    <span className='password-toggle' onClick={togglePasswordVisibility}>
                        {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </span>
                </div>
                <p className='check-password__error' style={{ visibility: errorMessage ? 'visible' : 'hidden' }}>
                    {errorMessage || '공백'}
                </p>
                <button className={`check-password__button ${password ? 'active' : ''}`}
                    disabled={!password} >다음</button>
            </div>
        </div>
    );
}

export default CheckPassword;