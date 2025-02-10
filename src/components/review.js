import { useState } from "react";
import thumbsup from "../assets/images/ic_thumbsup_24.svg";
import filledthumbsup from "../assets/images/ic_filledthumbsup_24.svg";
import "../assets/css/review.css";

const Review = ({ profileImg, nickname, date, reviewText, initialLikes, rating }) => {
    const [likes, setLikes] = useState(initialLikes);
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        setLiked(!liked);
        setLikes(liked ? likes - 1 : likes + 1);
    };

    return (
        <div className="review-container">
            {/* 프로필, 닉네임, 작성일 */}
            <div className="review-header">
                <img src={profileImg} alt="프로필" className="review-profile" />
                <span className="review-nickname">{nickname}</span>
                <span className="review-date">{date}</span>
            </div>

            {/* 한줄 리뷰 */}
            <div className="review-text">{reviewText}</div>

            {/* 좋아요 & 평점 */}
            <div className="review-footer">
                <div className="review-likes" onClick={handleLike}>
                    <img
                        src={liked ? filledthumbsup : thumbsup}
                        alt="좋아요"
                        className="thumbsup-icon"
                    />
                    <span>{likes}</span>
                </div>
                <div className='review__rating'>
                    {[...Array(5)].map((_, index) => {
                        const isFullStar = index + 1 <= Math.floor(rating); // 완전 채워진 별
                        const isHalfStar = index + 1 === Math.floor(rating) + 1 && rating % 1 !== 0; // 반 개 별
                        return (
                            <span
                                key={index}
                                className={`review__star ${isFullStar ? 'full' : ''} ${isHalfStar ? 'half' : ''}`}
                            >
                            </span>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Review;
