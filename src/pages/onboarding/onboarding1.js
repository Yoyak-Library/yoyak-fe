import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/onboarding1.css';
import LaterButtonImage from '../../assets/images/Onboarding_Later_Button.png'; // 이미지 경로에 맞게 import

const categories = {
  영화: ['애니메이션', '다큐멘터리', '액션', '로맨스', '코미디', '공포', '스릴러', 'SF', '판타지'],
  드라마: ['멜로', '미스터리', '코미디', '스릴러', '다큐멘터리', '범죄', '사극', '판타지', '일상', '로맨스'],
  TV프로그램: ['예능', '토크쇼', '다큐멘터리', '음악/오디션', '생존/서바이벌', '먹방', '리얼리티', '시사/뉴스', '스포츠', '여행'],
};

const Onboarding1 = () => {
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();

  const handleCategoryClick = (category, item) => {
    const optionKey = `${category}:${item}`;
    setSelected((prevSelected) =>
      prevSelected.includes(optionKey)
        ? prevSelected.filter((i) => i !== optionKey)
        : [...prevSelected, optionKey]
    );
  };

  const handleNextButtonClick = () => {
    navigate('/onboarding2', { state: { selectedCategories: selected } });
  };

  return (
    <div className="Onboarding Onboarding1">
      <div className="progress-bar">
        <div className="progress" style={{ width: '50%' }}></div>
      </div>
      <div className="content">
        <div className="header">
          <h1>
            어떤 콘텐츠 유형에
            <br />
            관심이 있으신가요?
          </h1>
          <button className="skip-button">
            <img src={LaterButtonImage} alt="나중에 하기" />
          </button>
        </div>

        <div className="categories">
          {Object.entries(categories).map(([category, items]) => (
            <div key={category} className="category">
              <h2>{category}</h2>
              <div className="options">
                {items.map((item) => {
                  const optionKey = `${category}:${item}`;
                  return (
                    <button
                      key={optionKey}
                      className={`option ${selected.includes(optionKey) ? 'selected' : ''}`}
                      onClick={() => handleCategoryClick(category, item)}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <button
          className={`next-button ${selected.length > 0 ? 'active' : ''}`}
          disabled={selected.length === 0}
          onClick={handleNextButtonClick}
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default Onboarding1;
