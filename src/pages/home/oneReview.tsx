import Menu from "../../components/menu";
import RankSelector from "../../components/rankSelector";
import Review from "../../components/review";

import { useEffect, useState } from "react";
import "../../assets/css/review.css";

import review_img from "../../assets/images/review_img.png";
import puppy from "../../assets/images/puppy.jpg";

const content_id = 1;

const OneReview = () => {
  const [review, setReview] = useState<string>("");
  const [rating, setRating] = useState<number>(0);
  const [reviews, setReviews] = useState<any[]>([]);
  const [showAllReviews, setShowAllReviews] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const maxLength = 250;
  const warningLength = 200;

  const visibleReviews = showAllReviews ? reviews : reviews.slice(0, 5);

  useEffect(() => {
    fetch(`https://api.yoyaklery.site/reviews/${content_id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const fetchedReviews = data.data.map((item: any) => ({
          profileImg: puppy, // API에 없으므로 기본 이미지 사용
          nickname: "익명", // API에 없으므로 임의 지정
          date: new Date(item.created_at).toLocaleDateString(),
          reviewText: item.review_text,
          initialLikes: 0, // API에 없음
          rating: 0, // API에 없음
        }));
        setReviews(fetchedReviews);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError("리뷰를 불러오는 데 실패했습니다.");
        setLoading(false);
      });
  }, []);

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
    // POST 요청
    fetch("https://api.yoyaklery.site/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content_id: content_id,
        review_text: review,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("리뷰 생성 실패");
        }
        return res.json();
      })
      .then((data) => {
        alert("리뷰가 등록되었습니다!");

        // 새로 등록한 리뷰를 화면에 바로 추가 (임의로 별점도 넣음)
        const newReview = {
          profileImg: puppy,
          nickname: "익명",
          date: new Date().toLocaleDateString(),
          reviewText: review,
          initialLikes: 0,
          rating: rating, // 현재 선택한 별점
        };

        setReviews([newReview, ...reviews]); // 맨 위에 추가
        setReview("");
        setRating(0);
      })
      .catch((err) => {
        console.error(err);
        alert("리뷰 등록 중 오류가 발생했습니다.");
      });
  };

  return (
    <div className="review">
      <Menu />
      <div className="review__container">
        <img className="review__mainImg" src={review_img} alt="review" />
        <div className="review__intro">
          <div className="review__intro-name">
            더글로리 시즌1 재밌게 보셨나요?
          </div>
          <div className="review__intro-content">
            다른 사용자가 참고할 수 있도록 한줄 리뷰를 남겨주세요.
          </div>
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
                  const isHalfStar =
                    index + 1 === Math.floor(rating) + 1 && rating % 1 !== 0;
                  return (
                    <span
                      key={index}
                      className={`review__star ${isFullStar ? "full" : ""} ${
                        isHalfStar ? "half" : ""
                      }`}
                      onClick={() => handleRatingChange(index + 1)}
                    ></span>
                  );
                })}
              </div>
              <div className="review__right">
                <span
                  style={{
                    color: review.length > 200 ? "red" : "#5D91FE",
                    marginBottom: "8px",
                  }}
                >
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
            <div
              className="review__more"
              onClick={() => setShowAllReviews(!showAllReviews)}
            >
              {showAllReviews ? "접기" : "더보기"}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OneReview;
