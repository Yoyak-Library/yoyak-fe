import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../assets/css/menu.css';
import Logo from '../assets/images/yoyaklery_logo.png';
import Profile from '../assets/images/ic_profile_img.png';
import Alarm from '../assets/images/ic_bell_32.svg';

const Menu = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className='navi-wrap'>
            <div className='navi-space-between'>
                <div className="navi-button1">
                    <img src={Logo} className='navi-logo' alt="Logo US" />
                    <div className={`navi-first ${location.pathname === '/home' ? 'active' : ''}`}
                        id="home" onClick={() => navigate('/home')}>
                        홈
                    </div>
                    <div className={`navi-first ${['/yoyak', '/review'].includes(location.pathname) ? 'active' : ''}`}
                        id="summary" onClick={() => navigate('/yoyak')} >
                        요약
                    </div>
                    <div className={`navi-first ${['/check'].includes(location.pathname) ? 'active' : ''}`} id="library">개인라이브러리</div>
                </div>
                <div className="navi-button2">
                    <img src={Alarm} className='navi-second' id='alarm' alt="alarm" />
                    <div className='navi-button2'>
                        <img src={Profile} className='navi-third' alt="profile" />
                        <div className='navi-third' id="nick">호두호두...</div>
                        <div className='navi-third' id="nim">님</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
