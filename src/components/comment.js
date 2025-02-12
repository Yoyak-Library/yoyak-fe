import { useState } from "react";

import '../assets/css/viewYoyak.css';

import profile from '../assets/images/summary_profile.png';
import thumbs_up from '../assets/images/thumbs_up.png';
import thumbs_up_filled from '../assets/images/thumbs_up_filled.png';
import chat from  '../assets/images/chat.png';

const Comment = () => {
    const [isThumbClick, setIsThumbClick] = useState(0);

    const handelThumbClick = () => {
        setIsThumbClick(prev => !prev);
    }

    return (
        <div className="comment">
            <div className='comment-profile'>
                <img src={profile} />
                <div>
                    <div className='comment-nick'>김슈니</div>
                    <div className='comment-time'>2030.01.01</div>
                </div>
            </div>
            <div className="comment-content">글로만 봤는데도 너무 재밌네요 기대돼요!!</div>
            <div className="comment-bottom">
                <div className="comment-thumbs" onClick={handelThumbClick}><img src={isThumbClick ? thumbs_up_filled : thumbs_up}/>8</div>
                <div className="comment-reply"><img src={chat}/>답글 달기</div>
            </div>
        </div>
    );
}

export default Comment;