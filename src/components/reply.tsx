import { useState } from "react";

import '../assets/css/viewYoyak.css';

import profile from '../assets/images/summary_profile.png';
import reply from '../assets/images/reply.png';


const Reply: React.FC = () => {

    return (
        <div className="reply">
            <img className="reply-img" src={reply} />
            <div>
                <div className='comment-profile'>
                    <img src={profile} />
                    <div>
                        <div className='comment-nick'>김슈니</div>
                        <div className='comment-time'>2030.01.01</div>
                    </div>
                </div>
                <div className="comment-content">글로만 봤는데도 너무 재밌네요 기대돼요!!</div>
            </div>
        </div>
    );
}

export default Reply;