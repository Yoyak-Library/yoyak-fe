import React, { useState } from 'react';

import '../assets/css/myPost.css';

import left_arrow_first from '../assets/images/pagination_left_arrow_first.png';
import left_arrow from  '../assets/images/pagination_left_arrow.png';
import right_arrow from '../assets/images/pagination_right_arrow.png';

const Pagination = () => {
  const [activeNum, setActiveNum] = useState(0);  // 현재 선택된 페이지 (0, 1, 2, 3, 4 인덱스 역할)
  const [pageStart, setPageStart] = useState(1); // 현재 페이지 그룹 시작 번호 (번호를 의미)

  const handleClick = (index) => {
    setActiveNum(index);
  };

  const handleNext = () => {
    setPageStart((prev) => prev + 5);
    setActiveNum(0);
  };

  const handlePrev = () => {
    if (pageStart > 1) {
      setPageStart((prev) => prev - 5);
      setActiveNum(0);
    }
  };

  return (
    <div className='myPost-pagination'>
      <img
        src={pageStart === 1 ? left_arrow_first : left_arrow}
        onClick={handlePrev}
        style={{ cursor: pageStart > 1 ? 'pointer' : '', opacity: pageStart > 1 ? 1 : 0.5 }}
      />
      {Array.from({ length: 5 }, (_, i) => pageStart + i).map((item, index) => (
        <div
          className={`myPost-pagination-num ${activeNum === index ? 'active' : ''}`}
          onClick={() => handleClick(index)}
          key={index}
        >
          {item}
        </div>
      ))}
      <img src={right_arrow} onClick={handleNext} style={{ cursor: 'pointer' }} />
    </div>
  );
};

export default Pagination;
