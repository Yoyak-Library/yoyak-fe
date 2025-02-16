import Menu from "../../components/menu";
import Summary2 from '../../components/summary2';
import RankSelector from "../../components/rankSelector";

import React, { useState } from "react";
import { Search } from "lucide-react"; // 검색 아이콘
import "../../assets/css/yoyaklist.css";

const yoyaklistCategories = ["애니메이션", "다큐멘터리", "액션", "로맨스", "코미디", "공포", "스릴러", "SF", "판타지"];

const YoyakList = () => {
    const [yoyaklistSelectedCategories, setYoyaklistSelectedCategories] = useState([]);
    const [yoyaklistSummaryLength, setYoyaklistSummaryLength] = useState([]);
    const [yoyaklistSpoilerOption, setYoyaklistSpoilerOption] = useState(null);
    const [yoyaklistEpisodeRange, setYoyaklistEpisodeRange] = useState("");

    const yoyaklistHandleCategoryClick = (category) => {
        setYoyaklistSelectedCategories((prev) =>
            prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
        );
    };

    return (
        <div className="yoyaklist">
            <Menu />
            <div className="yoyaklist-container">
                <div className="yoyaklist-search-container">
                    <div className="yoyaklist-search-bar">
                        <Search className="yoyaklist-search-icon" />
                        <input type="text" placeholder="요약글 제목 또는 콘텐츠를 입력하세요." className="yoyaklist-search-input" />
                    </div>
                </div>

                <div className="yoyaklist-filters">
                    <div className="yoyaklist-filter-group">
                        <p>요약글 길이</p>
                        <div className="yoyaklist-filter-options column-layout">
                            <label className="yoyaklist-filter-option">
                                <input
                                    type="checkbox"
                                    value="단문"
                                    checked={yoyaklistSummaryLength.includes("단문")}
                                    onChange={() =>
                                        setYoyaklistSummaryLength((prev) =>
                                            prev.includes("단문") ? prev.filter((s) => s !== "단문") : [...prev, "단문"]
                                        )
                                    }
                                />
                                단문 요약
                            </label>
                            <label className="yoyaklist-filter-option">
                                <input
                                    type="checkbox"
                                    value="장문"
                                    checked={yoyaklistSummaryLength.includes("장문")}
                                    onChange={() =>
                                        setYoyaklistSummaryLength((prev) =>
                                            prev.includes("장문") ? prev.filter((s) => s !== "장문") : [...prev, "장문"]
                                        )
                                    }
                                />
                                장문 요약
                            </label>
                        </div>
                    </div>

                    <div className="yoyaklist-separator"></div> {/* 세로선 추가 */}

                    <div className="yoyaklist-filter-group">
                        <p>범위</p>
                        <input
                            type="text"
                            placeholder="회차를 입력해주세요."
                            value={yoyaklistEpisodeRange}
                            onChange={(e) => setYoyaklistEpisodeRange(e.target.value)}
                            className="yoyaklist-range-input"
                        />
                    </div>

                    <div className="yoyaklist-separator"></div> {/* 세로선 추가 */}

                    <div className="yoyaklist-filter-group">
                        <p>스포일러</p>
                        <div className="yoyaklist-filter-options column-layout">
                            <label className="yoyaklist-filter-option">
                                <input
                                    type="checkbox"
                                    name="yoyaklistSpoiler"
                                    value="포함"
                                    checked={yoyaklistSpoilerOption === "포함"}
                                    onChange={() => setYoyaklistSpoilerOption("포함")}
                                />
                                포함
                            </label>
                            <label className="yoyaklist-filter-option">
                                <input
                                    type="checkbox"
                                    name="yoyaklistSpoiler"
                                    value="미포함"
                                    checked={yoyaklistSpoilerOption === "미포함"}
                                    onChange={() => setYoyaklistSpoilerOption("미포함")}
                                />
                                미포함
                            </label>
                        </div>
                    </div>
                </div>

                <div className="yoyaklist-line"></div>  {/* 추가한 가로선 div */}

                <div className="yoyaklist-genre-container">
                    {yoyaklistCategories.map((category, index) => (
                        <div
                            key={index}
                            className={`yoyaklist-genre-item ${yoyaklistSelectedCategories.includes(category) ? "selected" : ""}`}
                            onClick={() => yoyaklistHandleCategoryClick(category)}
                        >
                            {category}
                        </div>
                    ))}
                </div>

                {/* 요약본 */}
                <div className='yoyak-summary'>
                    <RankSelector />
                    <div className='yoyak-summary-component'>
                        <Summary2 />
                        <hr />
                        <Summary2 />
                        <hr />
                        <Summary2 />
                        <hr />
                        <Summary2 />
                        <hr />
                    </div>
                    <div className="yoyak-summary-more">더보기</div>
                </div>
            </div>
        </div>
    );
};

export default YoyakList;
