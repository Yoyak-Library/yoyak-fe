import React, { useState } from 'react';
import '../../assets/css/login.css';

import password_eye_on from '../../assets/images/password_eye_on.png';
import password_eye_off from '../../assets/images/password_eye_off.png';
import kakao from '../../assets/images/kakao.png';

const Login = () => {
    const [visibility, setVisibility] = useState(false);

    const handleVisibility = () => {
        setVisibility(!visibility);
    }

    return (
        <div className='wrap'>
            {/*메뉴 삽입 위치*/}
            <div className='login'>
                <div className='login-img'></div>
                <div className='login-page'>
                    <div className='login-container'>
                        <div className='login-title'>로그인</div>
                        <div className='login-subtitle'>요약러리에 오신 걸 환영합니다.</div>
                        {/*이메일*/}
                        <div className='login-content'>
                            <div className='login-content-name'>이메일</div>
                            <input className='login-content-input' placeholder='이메일을 입력하세요.' type='text' autocomplete="one-time-code"/>
                        </div>
                        {/*비밀번호*/}
                        <div className='login-content'>
                            <div className='login-content-name'>비밀번호</div>
                            <input className='login-content-input' placeholder='비밀번호를 입력하세요.' type={visibility ? 'text' : 'password'} autocomplete="one-time-code"/>
                            <img className='login-content-eye' src={visibility ? password_eye_on : password_eye_off} onClick={handleVisibility}/>
                            <div className='login-content-warn'>안내메시지 아직임!</div>
                        </div>
                        <div className='login-submit'>로그인</div>
                        <div className='login-submit-kakao'><img src={kakao} />카카오 로그인</div>
                        <div className='login-signup'>아직 계정이 없으신가요?<a href='/signup'>회원가입</a></div>
                        <div className='login-find'>이메일이나 패스워드를 잊어버리셨나요?<a href=''>이메일/패스워드 찾기</a></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;