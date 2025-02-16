import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../../components/menu";
import WarningBox from "../../components/warningbox";

import "../../assets/css/summarize1.css";

const Summarize1 = () => {
    const [spoiler, setSpoiler] = useState(false);
    const navigate = useNavigate();

    const handleSpoilerChange = () => {
        setSpoiler(!spoiler);
    };

    const handleNext = () => {
        navigate("/summarize2");
    };

    return (
        <div className="summarize1">
            <Menu />
            <div className="summarize1-container">
                <h1 className="summarize1-title">더글로리 요약하기</h1>
                <p className="summarize1-subtitle">다른 사용자를 위해 내용을 요약해주세요.</p>

                <div className="summarize1-box">
                    <label htmlFor="title" className="summarize1-box-title">제목</label>
                    <input type="text" id="title" className="summarize1-input-box" placeholder="제목을 입력해주세요" />

                    <label htmlFor="episode" className="summarize1-box-title">회차</label>
                    <input type="text" id="episode" className="summarize1-input-box" placeholder="회차를 입력해주세요 (예시: 1,2,3,4-6)" />

                    <div className="summarize1-spoiler-section">
                        <label htmlFor="spoiler" className="summarize1-spoiler-label">스포일러를 포함하겠습니까?</label>
                        <label className="summarize1-switch">
                            <input 
                                type="checkbox"
                                checked={spoiler}
                                onChange={handleSpoilerChange} 
                            />
                            <span className="summarize1-slider"></span>
                        </label>
                        <button className="summarize1-next-button" onClick={handleNext}>다음으로</button>
                    </div>
                </div>
                <WarningBox />
            </div>
        </div>
    );
};

export default Summarize1;
