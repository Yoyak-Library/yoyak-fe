import React from 'react';

import '../../assets/css/signup.css';
import '../../assets/css/findAccount.css';

const FindEmail = ({ name, nick, onClose }) => {
    return (
        <div className='sign-checked' id='email'>
            <div className='sign-checked-email'>{name}/{nick}</div>
            {/*이메일은 서버 연결시 변경 예정*/}
            <div className='sign-checked-content' id='email'>9aaa18@gmail.com</div>
            <div className='sign-checked-btn' onClick={onClose}>확인</div>
        </div>
    );
}

export default FindEmail;