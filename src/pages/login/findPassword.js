import React from 'react';

import '../../assets/css/signup.css';
import '../../assets/css/findAccount.css';

const FindPassword = ({ name, nick, email, onClose }) => {
    return (
        <div className='sign-checked' id='password'>
            <div className='sign-checked-email'>{name}/{nick}/{email}</div>
            {/*이메일은 서버 연결시 변경 예정*/}
            <div className='sign-checked-content' id='password'>이메일로 임시 비밀번호를 전송했습니다.</div>
            <div className='sign-checked-btn' onClick={onClose}>확인</div>
        </div>
    );
}

export default FindPassword;