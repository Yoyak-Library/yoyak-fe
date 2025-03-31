import React, { useState } from "react";
import Menu from "../../components/menu";
import defaultProfileImage from "../../assets/images/default_summary.png";
import settingsIcon from "../../assets/images/uil_setting.png";
import "../../assets/css/personalLibrary.css";

const PersonalLibrary = () => {
    const [profileImage, setProfileImage] = useState(defaultProfileImage);
    
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => setProfileImage(e.target.result);
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="personallibrary">
            <Menu />
            <div className="personallibrary_personal-library">
                <h1 className="personallibrary_library-title">개인라이브러리</h1>
                <div className="personallibrary_profile-section">
                    <div className="personallibrary_profile-image">
                        <img src={profileImage} alt="profile" className="personallibrary_profile-placeholder" />
                        <label htmlFor="profile-upload">
                            <img src={settingsIcon} alt="settings icon" className="personallibrary_profile-settings" />
                        </label>
                        <input type="file" id="profile-upload" accept="image/*" style={{ display: "none" }} onChange={handleImageUpload} />
                    </div>
                    <div className="personallibrary_profile-info">
                        <h2 className="personallibrary_profile-name">김슈니</h2>
                        <p className="personallibrary_profile-email">abcd12@naver.com</p>
                    </div>
                </div>
                <div className="personallibrary_stats-section">
                    <button className="personallibrary_stat-box"><span className="personallibrary_stat-number">20</span><span className="personallibrary_stat-text">내가 작성한 글</span></button>
                    <button className="personallibrary_stat-box"><span className="personallibrary_stat-number">12</span><span className="personallibrary_stat-text">하이라이트</span></button>
                    <button className="personallibrary_stat-box"><span className="personallibrary_stat-number">5</span><span className="personallibrary_stat-text">찜</span></button>
                </div>
                <hr className="personallibrary_separator" />
                <p className="personallibrary_analysis-text">김슈니님의 요약리뷰를 바탕으로 취향을 분석해 보았어요.</p>
                <div className="personallibrary_summary-tag">
                    <div className="personallibrary_summary-text-box">
                        <p className="personallibrary_summary-text">스릴을 즐기는 독서러버</p>
                        <p className="personallibrary_summary-hashtags">#현실적인 #탄탄한 #무속적인</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalLibrary;
