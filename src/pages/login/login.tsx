import React, { useState } from 'react';
import '../../assets/css/login.css';

import password_eye_on from '../../assets/images/password_eye_on.png';
import password_eye_off from '../../assets/images/password_eye_off.png';
import kakao from '../../assets/images/kakao.png';

const LoginTsx: React.FC = () => {
    const [visibility, setVisibility] = useState<boolean>(false);

    const handleVisibility: React.MouseEventHandler<HTMLImageElement> = () => {
        setVisibility(!visibility);
    };

    return (
        <div className="wrap">
            {/* 메뉴 삽입 위치 */}
            <div className="login">
                <div className="login-img"></div>
                <div className="login-page">
                    <div className="login-container">
                        <div className="login-title">로그인</div>
                        <div className="login-subtitle">요약러리에 오신 걸 환영합니다.</div>
                        
                        {/* 이메일 입력 */}
                        <div className="login-content">
                            <div className="login-content-name">이메일</div>
                            <input 
                                className="login-content-input" 
                                placeholder="이메일을 입력하세요." 
                                type="text" 
                                autoComplete="one-time-code"
                            />
                        </div>
                        
                        {/* 비밀번호 입력 */}
                        <div className="login-content">
                            <div className="login-content-name">비밀번호</div>
                            <input 
                                className="login-content-input" 
                                placeholder="비밀번호를 입력하세요." 
                                type={visibility ? "text" : "password"} 
                                autoComplete="one-time-code"
                            />
                            <img 
                                className="login-content-eye" 
                                src={visibility ? password_eye_off : password_eye_on} 
                                onClick={handleVisibility} 
                                alt="비밀번호 보기 토글"
                            />
                            <div className="login-content-warn">안내메시지 아직임!</div>
                        </div>

                        {/* 로그인 버튼 */}
                        <div className="login-submit">로그인</div>

                        {/* 카카오 로그인 */}
                        <div className="login-submit-kakao">
                            <img src={kakao} alt="카카오 로그인" />카카오 로그인
                        </div>

                        {/* 회원가입 링크 */}
                        <div className="login-signup">
                            아직 계정이 없으신가요?
                            <a href="/signup">회원가입</a>
                        </div>

                        {/* 이메일/패스워드 찾기 */}
                        <div className="login-find">
                            이메일이나 패스워드를 잊어버리셨나요?
                            <a href="/findAccount">이메일/패스워드 찾기</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginTsx;
