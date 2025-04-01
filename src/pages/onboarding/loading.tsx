import React, { useState, useEffect } from "react";
import { BounceLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import "../../assets/css/loading.css";
import LoadingCompleteImage from "../../assets/images/Loading_complete.png";

const Loading: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="loading-container">
      {loading ? (
        <>
          <BounceLoader color="#5D91FE" />
          <h3 className="loading-title">취향 분석 중...</h3>
          <p className="loading-subtitle">당신만의 맞춤형 콘텐츠를 준비 중입니다.</p>
        </>
      ) : (
        <>
          <img src={LoadingCompleteImage} alt="Loading Complete" className="loading-complete-image" />
          <h3 className="loading-title">취향 분석 완료!</h3>
          <p className="loading-subtitle">당신만의 맞춤형 콘텐츠를 준비했습니다.</p>
          <button className="home-button" onClick={() => navigate("/")}>홈 화면으로 가기</button>
        </>
      )}
    </div>
  );
};

export default Loading;
