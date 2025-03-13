import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Menu from "../../components/menu";
import Sort from '../../components/sort';
import Summary2 from '../../components/summary2';

import '../../assets/css/yoyak.css';

import yoyak_example_img from '../../assets/images/yoyak_example_img.png';
import top from '../../assets/images/top.png';
import write from '../../assets/images/write.png';
import star from '../../assets/images/star.png';
import reset from '../../assets/images/reset.png';

const YOYAK = () => {
    const navigate = useNavigate();

    const [summaryCount, setSummaryCount] = useState(4);
    const [checked, setChecked] = useState({
        shortSummary: false,
        longSummary: false,
        includeSpoiler: false,
        excludeSpoiler: false,
    });
    const [text, setText] = useState("");


    const handleMoreClick = () => {
        setSummaryCount(prev => prev + 4);
    }

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setChecked((prev) => ({ ...prev, [name]: checked }));
    };

    const handleResetClick = () => {
        setChecked({
            shortSummary: false,
            longSummary: false,
            includeSpoiler: false,
            excludeSpoiler: false,
        });
        setText("");
    };

    return (
        <div className='yoyak'>
            <Menu />
            <div className='yoyak-container'>
                {/*드라마 이미지*/}
                <img className='yoyak-mainImg' src={yoyak_example_img} />
                {/*드라마 소개*/}
                <div className='yoyak-intro'>
                    <div className='yoyak-intro-name'>더글로리 시즌1</div>
                    <div className='yoyak-intro-count'>에피소드 16개</div>
                    <div className='yoyak-intro-content'>학교 폭력으로 인생이 무너진 문동은<br />가해자들에게 복수하기 위해 철저히 준비하며<br />그들의 세계로 다시 들어간다. 그녀의 복수극은 어디로 향할까?</div>
                    <div className='yoyak-intro-hashtag'>#드라마 #스릴러 #학교폭력</div>
                    <div className='yoyak-intro-badge'><img src={top} />대중픽 Top 10 선정</div>
                    <div className='yoyak-intro-btns'>
                        <div className='yoyak-intro-btn' id="yoyak"><img src={write} />요약하기</div>
                        <div className='yoyak-intro-btn' id="review" onClick={() => navigate('/review')}><img src={star} />한줄 리뷰 보러가기</div>
                    </div>

                </div>
                {/*요약본*/}
                <div className='yoyak-summary'>
                    <Sort />
                    {/*요약본들 컴포넌트*/}
                    <div className='yoyak-summary-component'>
                        {Array.from({ length: summaryCount }, (_, index) => (
                            <div key={index}>
                                <Summary2 />
                                <hr />
                            </div>
                        ))}
                    </div>
                    <div className="yoyak-summary-more" onClick={handleMoreClick}>더보기</div>
                </div>
                {/*필터*/}
                <div className="yoyak-filter">
                    <div className="yoyak-filter-name">검색 필터</div>
                    <div className="yoyak-filter-reset" onClick={handleResetClick}>
                        <img src={reset} alt="초기화" /> 초기화
                    </div>
                    <hr />
                    <div className="yoyak-filter-length">
                        <div className="yoyak-filter-name2">요약글 길이</div>
                        <div className="yoyak-filter-checkbox">
                            <input
                                type="checkbox"
                                name="shortSummary"
                                checked={checked.shortSummary}
                                onChange={handleCheckboxChange}
                            />
                            <label htmlFor="shortSummary">단문 요약</label>
                        </div>
                        <div className="yoyak-filter-checkbox">
                            <input
                                type="checkbox"
                                name="longSummary"
                                checked={checked.longSummary}
                                onChange={handleCheckboxChange}
                            />
                            <label htmlFor="longSummary">장문 요약</label>
                        </div>
                    </div>
                    <div className="yoyak-filter-range">
                        <div className="yoyak-filter-name2">범위</div>
                        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="회차를 입력해주세요." />
                    </div>
                    <div className="yoyak-filter-spoiler">
                        <div className="yoyak-filter-name2">스포일러</div>
                        <div className="yoyak-filter-checkbox">
                            <input
                                type="checkbox"
                                name="includeSpoiler"
                                checked={checked.includeSpoiler}
                                onChange={handleCheckboxChange}
                            />
                            <label htmlFor="includeSpoiler">포함</label>
                        </div>
                        <div className="yoyak-filter-checkbox">
                            <input
                                type="checkbox"
                                name="excludeSpoiler"
                                checked={checked.excludeSpoiler}
                                onChange={handleCheckboxChange}
                            />
                            <label htmlFor="excludeSpoiler">미포함</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YOYAK;