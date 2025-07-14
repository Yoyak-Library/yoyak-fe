import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../../components/menu";
import WarningBox from "../../components/warningbox";
import Dropdown from "../../components/dropdown";
import ConfirmModal from "../../components/confirmModal";

import "../../assets/css/summarize2.css";

const Summarize2: React.FC = () => {
    const [summary, setSummary] = useState<string>("");
    const [showModal, setShowModal] = useState<boolean>(false); 
    const navigate = useNavigate();

    const handleSummaryChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setSummary(event.target.value);
    };

    const handleGoBack = () => {
        setShowModal(true); 
    };

    const handleConfirmGoBack = () => {
        setShowModal(false); 
        navigate("/summarize1"); 
    };

    return (
        <div className="summarize2">
            <Menu />
            <div className="summarize2-container">
                <h1 className="summarize2-title">제목</h1>
                <p className="summarize2-subtitle">다른 사용자를 위해 내용을 요약해주세요.</p>

                <div className="summarize2-box">
                    <div className="viewYoyak-dropdownPosition">
                        <Dropdown />
                    </div>
                    <textarea
                        id="summary"
                        className="summarize2-input-box"
                        placeholder="내용을 입력해주세요"
                        value={summary}
                        onChange={handleSummaryChange}
                    />
                    <div className="summarize2-button-wrapper">
                        <div className="summarize2-button-container">
                            <div className="summarize2-left-button">
                                <button
                                    className="summarize2-back-button"
                                    onClick={handleGoBack}
                                >
                                    뒤로 가기
                                </button>
                            </div>
                            <div className="summarize2-right-buttons">
                                <button className="summarize2-temp-save-button">임시 저장</button>
                                <button
                                    className={`summarize2-submit-button ${summary.trim() ? "active" : ""}`}
                                >
                                    등록하기
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <WarningBox />
            </div>

            {showModal && (
                <ConfirmModal
                    message={`뒤로 가기를 누르시면\n현재 입력되었던 본문 내용은 모두 삭제됩니다.`}
                    onConfirm={handleConfirmGoBack}
                />
            )}
        </div>
    );
};

export default Summarize2;
