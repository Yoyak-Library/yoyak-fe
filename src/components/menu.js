import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../assets/css/menu.css';
import Logo from '../assets/images/yoyaklery_logo.png';
import Profile from '../assets/images/ic_profile_img.png';
import Alarm from '../assets/images/ic_bell_32.svg'


const Menu = () => {
    return (
        <div className='navi-wrap'>

            <div className='navi-space-between'>
                <div className="navi-button1">
                    <img src={Logo} className='navi-logo' alt="Logo US" />
                    <div className='navi-first' id="home">홈</div>
                    <div className='navi-first' id="summary">요약</div>
                    <div className='navi-first' id="library">개인라이브러리</div>
                </div>
                <div className="navi-button2">
                    <img src={Alarm} className='navi-second' id='alarm' />
                    <div className='navi-button2'>
                        <img src={Profile} className='navi-third' alt="profile" />
                        <div className='navi-third' id="nick">호두호두...</div>
                        <div className='navi-third' id="nim">님</div>
                    </div>
                </div>
            </div>

        </div >

    );
};

export default Menu;