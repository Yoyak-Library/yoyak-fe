import React from "react";
import "../assets/css/highlightCard.css";

const HighlightCard: React.FC = () => {
  return (
    <div className="highlightCard__wrap">
      <div className="highlightCard__top-container">
        <div className="highlightCard__image-box"></div>
        <div className="highlightCard__text-box">
          <span className="highlightCard__content">콘텐츠 이름</span>
          <span className="highlightCard__title">요약본 이름</span>
          <div className="highlightCard__info-row">
            <span className="highlightCard__count">
              <span className="highlightCard__count-number">3</span>
              <span className="highlightCard__count-unit">개</span>
            </span>
            <span className="highlightCard__divider">|</span>
            <span className="highlightCard__episode">4~7화</span>
          </div>
          <span className="highlightCard__description">
            더럽고 우중충한 여인숙이 동은의 집이었다. 하지만 동은이에게는 그것이
            유일한 안식처였다.
          </span>
        </div>
      </div>
      <button className="highlightCard__button">하이라이트 보기</button>
    </div>
  );
};

export default HighlightCard;
