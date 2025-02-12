import { useState, useRef } from "react";

import Menu from "../../components/menu";
import Dropdown from "../../components/dropdown";
import Sort from "../../components/sort2";
import Commment from "../../components/comment";
import Reply from "../../components/reply";

import '../../assets/css/yoyak.css';
import '../../assets/css/viewYoyak.css';

import profile from '../../assets/images/summary_profile.png';
import heart from '../../assets/images/heart.png';
import heart_filled from '../../assets/images/heart_filled.png';
import highlight from '../../assets/images/highlight.png';
import highlight_blue from '../../assets/images/highlight_blue.png';
import highlight_yellow from '../../assets/images/highlight_yellow.png';
import highlight_red from '../../assets/images/highlight_red.png';
import highlight_green from '../../assets/images/highlight_green.png';
import highlight_purple from '../../assets/images/highlight_purple.png';

const highlightImages = {
    blue: highlight_blue,
    yellow: highlight_yellow,
    red: highlight_red,
    green: highlight_green,
    purple: highlight_purple
};

const ViewYoyak = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [isHeartClick, setIsHeartClick] = useState(0);
    const [selectedColor, setSelectedColor] = useState(null); // 선택된 색상 상태
    const contentRef = useRef(null);  // content 영역

    const handelHeartClick = () => {
        setIsHeartClick(prev => !prev);
    }

    const handleHignlightClick = () => {
        setIsOpen(prev => !prev);
    }

    const handleColorClick = (color) => {
        setSelectedColor(color);
    }

    // 하이라이트 처리
    const handleHighlightClick = () => {
        if (!contentRef.current) return;

        const selection = window.getSelection();  // 선택된 텍스트 가져오기
        if (selection.rangeCount) {
            const range = selection.getRangeAt(0);
            const selectedText = selection.toString();

            if (selectedText && selectedColor) {
                const span = document.createElement("span");
                span.classList.add(`viewYoyak-highlight-${selectedColor}`);
                span.textContent = selectedText;  // 선택된 텍스트

                range.deleteContents();  // 기존 내용 삭제
                range.insertNode(span);  // 새로운 하이라이트된 내용 삽입
            }
        }
    };

    return (
        <div className='yoyak'>
            <Menu />
            <div className='yoyak-container'>
                {/* 제목 */}
                <div className="viewYoyak-title"><a href="/yoyak">더 글로리</a></div>
                <div className="viewYoyak-subtitle">1화 ~ 3화 스포일러 포함</div>
                {/* 요약글 */}
                <div className="viewYoyak-view">
                    <div className='viewYoyak-profile'>
                        <img src={profile} />
                        <div>
                            <div className='viewYoyak-nick'>김슈니</div>
                            <div className='viewYoyak-time'>2030.01.01</div>
                        </div>
                    </div>
                    <div className="viewYoyak-dropdownName">회차 제목</div>
                    <div className="viewYoyak-dropdownbar"><Dropdown /></div>
                    <div
                        className="viewYoyak-content"
                        ref={contentRef}
                        onMouseUp={handleHighlightClick}
                    >
                        고등학생 문동은 학교폭력의 심각한 피해자이다. 가해자들은 그녀의 몸과 마음에 깊은 상처를
                        남기며 무자비하게 괴롭힌다. 학교와 어른들은 그녀를 외면하고, 동은은 절망 속에서 학교를
                        떠난다. 동은은 과거의 상처를 되새기며
                    </div>
                    <div className="viewYoyak-heart" >
                        <img src={isHeartClick ? heart_filled : heart} onClick={handelHeartClick}/>8
                    </div>
                    <div className="viewYoyak-highlight">
                        <img src={selectedColor ? highlightImages[selectedColor] : highlight} onClick={handleHignlightClick} />
                    </div>
                    {!isOpen &&
                        <div className="viewYoyak-highlight-colors">
                            {["blue", "yellow", "red", "green", "purple"].map(color => (
                                <div key={color} className="viewYoyak-highlight-item">
                                    <div
                                        className="viewYoyak-highlight-color"
                                        id={color}
                                        onClick={() => handleColorClick(color)}
                                    ></div>
                                    {selectedColor === color && (
                                        <div
                                            className="viewYoyak-highlight-blank"
                                        ></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    }
                </div>
                {/* 댓글 */}
                <div className="viewYoyak-comment">
                    <textarea class="viewYoyak-comment-write" placeholder="댓글을 입력하세요"></textarea>
                    <div className="viewYoyak-comment-registration">등록하기</div>
                    <div className="viewYoyak-comment-sort"><Sort /></div>
                    <div className="viewYoyak-comment-content">
                        <Commment />
                        <Reply />
                        <Reply />
                        <Commment />
                        <Reply />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewYoyak;