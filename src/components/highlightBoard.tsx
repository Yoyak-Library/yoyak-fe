import React from "react";
import "../assets/css/highlightBoard.css";

const HighlightBoard: React.FC = () => {
  return (
    <div className="highlightBoard__wrap">
      <div className="highlightBoard__top-container">
        <div className="highlightBoard__image-box"></div>
        <div className="highlightBoard__text-box">
          <span className="highlightBoard__content">콘텐츠 이름</span>
          <span className="highlightBoard__title">요약본 이름</span>
          <div className="highlightBoard__info-row">
            <span className="highlightBoard__count">
              <span className="highlightBoard__count-number">3</span>
              <span className="highlightBoard__count-unit">개</span>
            </span>
            <span className="highlightBoard__divider">|</span>
            <span className="highlightBoard__episode">4~7화</span>
          </div>
          <span className="highlightBoard__description">
            더럽고 우중충한 여인숙이 동은의 집이었다. 하지만 동은이에게는 그것이
            유일한 안식처였다.
          </span>
        </div>
      </div>
      <button className="highlightBoard__button">하이라이트 보기</button>
    </div>
  );
};

export default HighlightBoard;
