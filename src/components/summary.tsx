import React from 'react';
import '../assets/css/summary.css';
import Default from '../assets/images/default_summary.png';

const Summary: React.FC = () => {
    return (
        <div className='summary__wrap'>
            <img src={Default} alt='default' />
            <div className='summary__under'>
                <div className='summary__content'>콘텐츠 이름</div>
                <div className='summary__title'>요약본 이름</div>
            </div>
        </div>
    );
};

export default Summary;