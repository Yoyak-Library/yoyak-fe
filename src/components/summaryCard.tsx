import React from 'react';
import '../assets/css/summaryCard.css';
import Default from '../assets/images/default_summary.png';

interface SummaryCardProps {
  contentName?: string;
  summaryName?: string;
  thumbnailUrl?: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({
  contentName = '콘텐츠 이름',
  summaryName = '요약본 이름',
  thumbnailUrl
}) => {
  return (
    <div className='summary__wrap'>
      <img 
        src={thumbnailUrl || Default} 
        alt='summary thumbnail'
        onError={(e) => {
          // 이미지 로드 실패시 기본 이미지로 대체
          (e.target as HTMLImageElement).src = Default;
        }}
      />
      <div className='summary__under'>
        <div className='summary__content'>{contentName}</div>
        <div className='summary__title'>{summaryName}</div>
      </div>
    </div>
  );
};

export default SummaryCard;