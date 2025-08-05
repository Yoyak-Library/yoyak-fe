import React, { useState } from 'react';
import axios from 'axios'
import '../../assets/css/login.css';

import password_eye_on from '../../assets/images/password_eye_on.png';
import password_eye_off from '../../assets/images/password_eye_off.png';
import kakao from '../../assets/images/kakao.png';

const LoginTsx: React.FC = () => {
    const [visibility, setVisibility] = useState<boolean>(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [warnVisible, setWarnVisible] = useState(false);
    const [warnMessage, setWarnMessage] = useState('');
    const [emailWarnMessage, setEmailWarnMessage] = useState('');
    const [passwordWarnMessage, setPasswordWarnMessage] = useState('');

    const handleVisibility: React.MouseEventHandler<HTMLImageElement> = () => {
        setVisibility(!visibility);
    };

    const handleLogin: React.MouseEventHandler<HTMLDivElement> = async () => {
        if (!email) {
            setEmailWarnMessage('이메일을 입력해주세요');
        } else {
            setEmailWarnMessage('');
        }

        if (!password) {
            setPasswordWarnMessage('비밀번호를 입력해주세요');
        } else {
            setPasswordWarnMessage('');
        }

        if (!email || !password) {
            return;
        }

        try {
            const response = await axios.post('https://api.yoyaklery.site/auth/login', {
                user_email: email,
                user_pwd: password,
            });
            console.log("요청 데이터 확인:", { user_email: email, user_pwd: password });
            setWarnVisible(false);
            window.location.href = '/home';
            console.log('로그인 성공:', response.data);
        } catch (error) {
            console.error('로그인 실패:', error);
            setPasswordWarnMessage('이메일 또는 비밀번호가 일치하지 않습니다');
            setWarnVisible(true);
        }

    }

    return (
        <div className="wrap">
            {/* 메뉴 삽입 위치 */}
            <div className="login">
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {emailWarnMessage && (
                            <div className="login-content-warn">{emailWarnMessage}</div>
                        )}
                    </div>

                    {/* 비밀번호 입력 */}
                    <div className="login-content">
                        <div className="login-content-name">비밀번호</div>
                        <input
                            className="login-content-input"
                            placeholder="비밀번호를 입력하세요."
                            type={visibility ? "text" : "password"}
                            autoComplete="one-time-code"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <img
                            className="login-content-eye"
                            src={visibility ? password_eye_off : password_eye_on}
                            onClick={handleVisibility}
                            alt="비밀번호 보기 토글"
                        />
                        {passwordWarnMessage && (
                            <div className="login-content-warn">{passwordWarnMessage}</div>
                        )}
                    </div>

                    {/* 로그인 버튼 */}
                    <div className="login-submit" onClick={handleLogin}>로그인</div>

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
    );
};

export default LoginTsx;
