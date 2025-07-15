import Menu from "../../components/menu";
import Summary2 from "../../components/summary2";
import RankSelector from "../../components/rankSelector";
import Review from "../../components/review";

import { useState } from "react";
import "../../assets/css/review.css";

import review_img from "../../assets/images/review_img.png";
import puppy from "../../assets/images/puppy.jpg";

const OneReview = () => {
    const [review, setReview] = useState<string>("");
    const [rating, setRating] = useState<number>(0);
    const [showAllReviews, setShowAllReviews] = useState<boolean>(false);
    const maxLength = 250;
    const warningLength = 200;

    const reviews = [
        { profileImg: puppy, nickname: "소라게", date: "2024.02.10", reviewText: "다들 보길래 그냥 봤는데 너무 긴장감 있게 봤어요 내용도 너무 알차네요~", initialLikes: 12, rating: 4.0 },
        { profileImg: puppy, nickname: "토맛토", date: "2024.03.10", reviewText: "대법원장과 대법관이 아닌 법관은 대법관회의의 동의를 얻어 대법원장이 임명한다. 대통령은 법률안의 일부에 대하여 또는 법률안을 수정하여 재의를 요구할 수 없다. 지방의회의 조직·권한·의원선거와 지방자치단체의 장의 선임방법 기타 지방자치단체의 조직과 운영에 관한 사항은 법률로 정한다. 대통령은 국무회의의 의장이 되고, 국무총리는 부의장이 된다.", initialLikes: 20, rating: 3.5 },
        { profileImg: puppy, nickname: "강감찬", date: "2024.03.11", reviewText: "스토리가 흥미진진해요!", initialLikes: 8, rating: 5.0 },
        { profileImg: puppy, nickname: "짱구", date: "2024.03.12", reviewText: "조금 지루했어요", initialLikes: 3, rating: 2.5 },
        { profileImg: puppy, nickname: "철수", date: "2024.03.13", reviewText: "최고의 드라마!", initialLikes: 15, rating: 4.5 },
        { profileImg: puppy, nickname: "영희", date: "2024.03.14", reviewText: "기대 이상이었어요", initialLikes: 9, rating: 4.0 }
    ];

    const visibleReviews = showAllReviews ? reviews : reviews.slice(0, 5);

    const handleReviewChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const input = e.target.value;
        if (input.length <= maxLength) {
            setReview(input);
        }
    };

    const handleRatingChange = (newRating: number) => {
        setRating(rating === newRating ? newRating - 0.5 : newRating);
    };

    const handleSubmit = () => {
        if (review.trim() === "") {
            alert("한줄 리뷰를 작성해주세요!");
            return;
        }
        if (review.length > warningLength) {
            alert("글자 수는 200자를 초과할 수 없습니다.");
            return;
        }
        console.log("리뷰 제출:", review);
        setReview("");
        setRating(0);
    };

    return (
        <div className="review">
            <Menu />
            <div className="review__container">
                <img className="review__mainImg" src={review_img} alt="review" />
                <div className="review__intro">
                    <div className="review__intro-name">더글로리 시즌1 재밌게 보셨나요?</div>
                    <div className="review__intro-content">다른 사용자가 참고할 수 있도록 한줄 리뷰를 남겨주세요.</div>
                    <div className="review__input-container">
                        <textarea
                            className="review__input"
                            placeholder="내용을 입력해주세요."
                            value={review}
                            onChange={handleReviewChange}
                            maxLength={maxLength}
                            style={{ color: review.length > warningLength ? "red" : "black" }}
                        />
                        <div className="review__footer">
                            <div className="review__rating">
                                {[...Array(5)].map((_, index) => {
                                    const isFullStar = index + 1 <= Math.floor(rating);
                                    const isHalfStar = index + 1 === Math.floor(rating) + 1 && rating % 1 !== 0;
                                    return (
                                        <span
                                            key={index}
                                            className={`review__star ${isFullStar ? "full" : ""} ${isHalfStar ? "half" : ""}`}
                                            onClick={() => handleRatingChange(index + 1)}
                                        ></span>
                                    );
                                })}
                            </div>
                            <div className="review__right">
                                <span style={{ color: review.length > 200 ? "red" : "#5D91FE", marginBottom: '8px' }}>
                                    {review.length} / {warningLength} 자
                                </span>
                                <button
                                    className="review__submit"
                                    onClick={handleSubmit}
                                    disabled={review.length > warningLength}
                                >
                                    등록하기
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="review__component-container">
                    <RankSelector />
                    <div className="review__component">
                        {visibleReviews.map((review, index) => (
                            <Review
                                key={index}
                                profileImg={review.profileImg}
                                nickname={review.nickname}
                                date={review.date}
                                reviewText={review.reviewText}
                                initialLikes={review.initialLikes}
                                rating={review.rating}
                            />
                        ))}
                    </div>
                    {reviews.length > 5 && (
                        <div className="review__more" onClick={() => setShowAllReviews(!showAllReviews)}>
                            {showAllReviews ? "접기" : "더보기"}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OneReview;
