import React from "react";
import { useNavigate } from "react-router-dom";

import Menu from "../../components/menu";
import DonutChart from "../../components/donutChart";
import defaultProfileImage from "../../assets/images/default_summary.png";
import settingsIcon from "../../assets/images/uil_setting.png";

import "../../assets/css/personalLibrary.css";

const PersonalLibrary: React.FC = () => {
    const navigate = useNavigate();

    const goToProfileSetting = () => {
        navigate("/profilesetting");
    };

    const handleMyPostClick = () => {
        navigate("/myPost");
    }

    const handleHighlightClick = () => {
        navigate("/highlightview");
    }

    const handleLikeClick = () => {
        navigate("/like");
    }

    return (
        <div className="personallibrary">
            <Menu />
            <div className="personallibrary_personal-library">
                <h1 className="personallibrary_library-title">개인라이브러리</h1>

                <div className="personallibrary_profile-section">
                    <div className="personallibrary_profile-image">
                        <img
                            src={defaultProfileImage}
                            alt="profile"
                            className="personallibrary_profile-placeholder"
                        />
                        <img
                            src={settingsIcon}
                            alt="settings icon"
                            className="personallibrary_profile-settings"
                            onClick={goToProfileSetting}
                        />
                    </div>

                    <div className="personallibrary_profile-info">
                        <h2 className="personallibrary_profile-name">김슈니</h2>
                        <p className="personallibrary_profile-email">abcd12@naver.com</p>
                    </div>
                </div>

                <div className="personallibrary_stats-section">
                    <button className="personallibrary_stat-box" onClick={handleMyPostClick}>
                        <span className="personallibrary_stat-number">20</span>
                        <span className="personallibrary_stat-text">내가 작성한 글</span>
                    </button>
                    <button className="personallibrary_stat-box" onClick={handleHighlightClick}>
                        <span className="personallibrary_stat-number">12</span>
                        <span className="personallibrary_stat-text">하이라이트</span>
                    </button>
                    <button className="personallibrary_stat-box" onClick={handleLikeClick}>
                        <span className="personallibrary_stat-number">5</span>
                        <span className="personallibrary_stat-text">찜</span>
                    </button>
                </div>

                <hr className="personallibrary_separator" />

                <p className="personallibrary_analysis-text">
                    김슈니님의 요약리뷰를 바탕으로 취향을 분석해 보았어요.
                </p>

                <div className="personallibrary_summary-tag">
                    <div className="personallibrary_summary-text-box">
                        <p className="personallibrary_summary-text">스릴을 즐기는 독서러버</p>
                        <p className="personallibrary_summary-hashtags">#현실적인 #탄탄한 #무속적인</p>
                    </div>
                </div>

                <div className="chart-wrapper">
                    <DonutChart
                        labels={["SF", "사극", "공포", "드라마", "로맨스", "음악"]}
                        values={[16, 16, 16, 16, 16, 16]}
                        colors={["#FFD93F", "#FFE062", "#FFE67F", "#80A9FE", "#9CBCFE", "#BFD4FF"]}
                    />

                    <div className="chart-legend-list">
                        {[
                            { label: "SF", color: "#FFD93F" },
                            { label: "사극", color: "#FFE062" },
                            { label: "공포", color: "#FFE67F" },
                            { label: "드라마", color: "#80A9FE" },
                            { label: "로맨스", color: "#9CBCFE" },
                            { label: "음악", color: "#BFD4FF" },
                        ].map((item) => (
                            <div key={item.label} className="legend-item">
                                <span
                                    className="legend-dot"
                                    style={{ backgroundColor: item.color }}
                                />
                                <span className="legend-label">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalLibrary;
