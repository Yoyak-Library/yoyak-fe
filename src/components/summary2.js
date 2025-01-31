import React from 'react';
import '../assets/css/summary2.css';

import profile from '../assets/images/summary_profile.png';

const Summary2 = () => {
    return (
        <div className='summary2'>
            <div className='summary2-profile'>
                <img src={profile} />
                <div className='summary2-nick'>김슈니</div>
                <div className='summary2-time'>2시간전</div>
            </div>
            <div className='summary2-name'>더글로리 <span>1-4, 5 회차</span></div>
            <div className='summary2-title'>요약본 이름</div>
            <div className='summary2-content'>요약본 본문 요약본 본문 요약본 본문 요약본 본문 요약본 본문 요약본 본문 요약본 본문 요약본 본문 요약본 본문 요약본 본문 요약본 본문 요약본 본문</div>
            <div className='summary2-more'>더보기</div>
        </div >

    );
};

export default Summary2;