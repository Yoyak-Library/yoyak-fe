import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/onboarding2.css'; // CSS 파일 이름도 변경 필요할 수 있음

const categories = {
  분위기: ['가벼운', '따뜻한', '감동적인', '진지한', '신나는', '감성적인', '편안한', '현실적인', '미래적인', '차분한', '긴장감 있는', '힐링되는', '스릴 있는', '소름 돋는']
};

const Onboarding2 = () => {
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
    navigate('/Loading', { state: { selectedCategories: selected } });
  };

  return (
    <div className="Onboarding Onboarding2">
      <div className="progress-bar2">
        <div className="progress" style={{ width: '100%' }}></div>
      </div>
      <div className="content">
        <div className="header">
          <h1>
            어떤 분위기를
            <br />
            선호 하시나요?
          </h1>
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

export default Onboarding2;
