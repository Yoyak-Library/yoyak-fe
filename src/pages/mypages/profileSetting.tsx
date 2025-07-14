import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Menu from "../../components/menu";
import ConfirmModal from "../../components/confirmModal";
import defaultProfileImage from "../../assets/images/default_summary.png";
import editIcon from "../../assets/images/btn_edit.png";
import backArrowIcon from "../../assets/images/back_arrow.png";
import nextArrowIcon from "../../assets/images/next_arrow.png";

import "../../assets/css/profileSetting.css";

const ProfileSetting = () => {
    const navigate = useNavigate();
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleBack = () => {
        navigate(-1);
    };

    const handlePasswordCheck = () => {
        navigate("/passwordcheck");
    };

    const handleDeleteClick = () => {
        setShowDeleteModal(true);
    };

    const handleConfirmDelete = () => {
        setShowDeleteModal(false);
        console.log("탈퇴 확정");
        // 탈퇴 처리 로직
    };

    return (
        <div className="profilesetting">
            <Menu />
            <div className="profilesetting_container">
                <div className="profilesetting_header">
                    <img
                        src={backArrowIcon}
                        alt="뒤로가기"
                        className="profilesetting_back"
                        onClick={handleBack}
                    />
                    <h2 className="profilesetting_title">설정</h2>
                </div>

                <div className="profilesetting_profile">
                    <div className="profilesetting_image-wrapper">
                        <img src={defaultProfileImage} alt="프로필" className="profilesetting_image" />
                        <img src={editIcon} alt="edit icon" className="profilesetting_edit-icon" />
                    </div>
                    <h3 className="profilesetting_name">김슈니</h3>
                    <p className="profilesetting_email">abcd12@naver.com</p>
                </div>

                <div className="profilesetting_info-box">
                    <div
                        className="profilesetting_info-section section-row"
                        onClick={handlePasswordCheck}
                    >
                        <span className="profilesetting_section-title strong">회원정보</span>
                        <img
                            src={nextArrowIcon}
                            alt="다음"
                            className="profilesetting_arrow"
                        />
                    </div>

                    <div className="profilesetting_info-box">
                        <div className="profilesetting_info-row">
                            <div className="profilesetting_info-label">이름</div>
                            <div className="profilesetting_info-value">김슈니</div>
                        </div>
                        <div className="profilesetting_info-row">
                            <div className="profilesetting_info-label">이메일</div>
                            <div className="profilesetting_info-value">abcd12@naver.com</div>
                        </div>
                    </div>

                    <div className="profilesetting_setting-section">
                        <div className="profilesetting_setting-title">설정</div>
                        <div className="profilesetting_setting-action">로그아웃</div>
                        <div
                            className="profilesetting_setting-action danger"
                            onClick={handleDeleteClick}
                        >
                            회원 탈퇴
                        </div>
                    </div>
                </div>
            </div>

            {/* ✅ 탈퇴 확인 모달 */}
            {showDeleteModal && (
                <ConfirmModal
                    message={`정말 회원을 탈퇴하시겠습니까?\n이 선택은 되돌릴 수 없으며, 작성한 게시글은 모두 삭제됩니다.`}
                    onConfirm={handleConfirmDelete}
                />
            )}
        </div>
    );
};

export default ProfileSetting;
