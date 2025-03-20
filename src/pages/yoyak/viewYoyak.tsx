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

// 하이라이트 이미지 객체
const highlightImages: Record<string, string> = {
    blue: highlight_blue,
    yellow: highlight_yellow,
    red: highlight_red,
    green: highlight_green,
    purple: highlight_purple
};

const ViewYoyak = () => {
    const [isHeartClick, setIsHeartClick] = useState<boolean>(false); // 하트 클릭 상태 (true / false)
    const [selectedColor, setSelectedColor] = useState<"blue" | "yellow" | "red" | "green" | "purple" | null>(null); // 하이라이트 색상 선택 (초기값 null)
    const [isOpen, setIsOpen] = useState<boolean>(true); // 하이라이트 선택창 열림 여부
    const contentRef = useRef<HTMLDivElement | null>(null); // content 영역

    // 하트 클릭 이벤트
    const handelHeartClick = (): void => {
        setIsHeartClick(prev => !prev);
    };

    // 하이라이트 선택창 열기 / 닫기
    const handleHignlightClick = (): void => {
        setIsOpen(prev => !prev);
    };

    // 색상 선택
    const handleColorClick = (color: "blue" | "yellow" | "red" | "green" | "purple"): void => {
        setSelectedColor(color);
    };

    // 하이라이트 처리
    const handleHighlightClick = (): void => {
        if (!contentRef.current) return;

        const selection = window.getSelection();
        if (selection && selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            const selectedText = selection.toString();

            if (selectedText && selectedColor) {
                const span = document.createElement("span");
                span.classList.add(`viewYoyak-highlight-${selectedColor}`);
                span.textContent = selectedText;

                range.deleteContents();
                range.insertNode(span);
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
                        <img src={profile} alt="프로필 이미지" />
                        <div>
                            <div className='viewYoyak-nick'>김슈니</div>
                            <div className='viewYoyak-time'>2030.01.01</div>
                        </div>
                    </div>
                    <div className="viewYoyak-dropdownName">회차 제목</div>
                    <div className="viewYoyak-dropdownPosition"><Dropdown /></div>
                    <div
                        className="viewYoyak-content"
                        ref={contentRef}
                        onMouseUp={handleHighlightClick}
                    >
                        고등학생 문동은 학교폭력의 심각한 피해자이다. 가해자들은 그녀의 몸과 마음에 깊은 상처를
                        남기며 무자비하게 괴롭힌다. 학교와 어른들은 그녀를 외면하고, 동은은 절망 속에서 학교를
                        떠난다. 동은은 과거의 상처를 되새기며
                    </div>
                    <div className="viewYoyak-heart">
                        <img src={isHeartClick ? heart_filled : heart} onClick={handelHeartClick} alt="좋아요" />
                    </div>
                    <div className="viewYoyak-highlight">
                        <img src={selectedColor ? highlightImages[selectedColor] : highlight} onClick={handleHignlightClick} alt="하이라이트" />
                    </div>
                    {!isOpen &&
                        <div className="viewYoyak-highlight-colors">
                            {(["blue", "yellow", "red", "green", "purple"] as const).map((color) => (
                                <div key={color} className="viewYoyak-highlight-item">
                                    <div
                                        className="viewYoyak-highlight-color"
                                        id={color}
                                        onClick={() => handleColorClick(color)}
                                    ></div>
                                    {selectedColor === color && (
                                        <div className="viewYoyak-highlight-blank"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    }
                </div>

                {/* 댓글 */}
                <div className="viewYoyak-comment">
                    <textarea className="viewYoyak-comment-write" placeholder="댓글을 입력하세요"></textarea>
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
    );
};

export default ViewYoyak;
