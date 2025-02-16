import React, { useState } from "react";
import Menu from "../../components/menu";
import WarningBox from "../../components/warningbox";

import "../../assets/css/summarize2.css";

const Summarize2 = () => {
    const [summary, setSummary] = useState("");

    const handleSummaryChange = (event) => {
        setSummary(event.target.value);
    };

    return (
        <div className="summarize2">
            <Menu />
            <div className="summarize2-container">
                <h1 className="summarize2-title">더글로리 요약하기</h1>
                <p className="summarize2-subtitle">내용을 요약하여 입력해주세요.</p>

                <div className="summarize2-box">
                    <label htmlFor="summary" className="summarize2-box-title">요약</label>
                    <textarea 
                        id="summary" 
                        className="summarize2-input-box" 
                        placeholder="내용을 입력해주세요" 
                        value={summary} 
                        onChange={handleSummaryChange} 
                    />
                    <div className="summarize2-button-container">
                        <button className="summarize2-submit-button">제출하기</button>
                    </div>
                </div>
                <WarningBox />
            </div>
        </div>
    );
};

export default Summarize2;
