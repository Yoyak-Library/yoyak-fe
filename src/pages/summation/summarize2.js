import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../../components/menu";
import WarningBox from "../../components/warningbox";

import "../../assets/css/summarize2.css";

const Summarize2 = () => {
    const [summary, setSummary] = useState("");
    const navigate = useNavigate();

    const handleSummaryChange = (event) => {
        setSummary(event.target.value);
    };

    return (
        <div className="summarize2">
            <Menu />
            <div className="summarize2-container">
                <h1 className="summarize2-title">제목</h1>
                <p className="summarize2-subtitle">더글로리 요약하기</p>

                <div className="summarize2-box">
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
                                    onClick={() => navigate("/summarize1")}
                                >뒤로 가기</button>
                            </div>
                            <div className="summarize2-right-buttons">
                                <button className="summarize2-temp-save-button">임시 저장</button>
                                <button className="summarize2-submit-button">등록하기</button>
                            </div>
                        </div>
                    </div>
                </div>
                <WarningBox />
            </div>
        </div>
    );
};

export default Summarize2;
