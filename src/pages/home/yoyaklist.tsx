import Menu from "../../components/menu";
import Summary2 from '../../components/summary2';
import RankSelector from "../../components/rankSelector";

import React, { useState, ChangeEvent } from "react";
import { Search } from "lucide-react";
import "../../assets/css/yoyaklist.css";

const yoyaklistCategories: string[] = ["애니메이션", "다큐멘터리", "액션", "로맨스", "코미디", "공포", "스릴러", "SF", "판타지"];

const YoyakList: React.FC = () => {
    const [yoyaklistSelectedCategories, setYoyaklistSelectedCategories] = useState<string[]>([]);
    const [yoyaklistSummaryLength, setYoyaklistSummaryLength] = useState<string[]>([]);
    const [yoyaklistSpoilerOption, setYoyaklistSpoilerOption] = useState<string | null>(null);
    const [yoyaklistEpisodeRange, setYoyaklistEpisodeRange] = useState<string>("");

    const yoyaklistHandleCategoryClick = (category: string) => {
        setYoyaklistSelectedCategories((prev) =>
            prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
        );
    };

    const handleSummaryLengthChange = (value: string) => {
        setYoyaklistSummaryLength((prev) =>
            prev.includes(value) ? prev.filter((s) => s !== value) : [...prev, value]
        );
    };

    const handleSpoilerOptionChange = (value: string) => {
        setYoyaklistSpoilerOption(value);
    };

    const handleEpisodeRangeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setYoyaklistEpisodeRange(e.target.value);
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
                        <div className="yoyaklist-filter-group summary-length">
                            <p>요약글 길이</p>
                            <div className="yoyaklist-filter-options column-layout">
                                <label className="yoyaklist-filter-option">
                                    <input
                                        type="checkbox"
                                        value="단문"
                                        checked={yoyaklistSummaryLength.includes("단문")}
                                        onChange={() => handleSummaryLengthChange("단문")}
                                    />
                                    단문 요약
                                </label>
                                <label className="yoyaklist-filter-option">
                                    <input
                                        type="checkbox"
                                        value="장문"
                                        checked={yoyaklistSummaryLength.includes("장문")}
                                        onChange={() => handleSummaryLengthChange("장문")}
                                    />
                                    장문 요약
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="yoyaklist-separator"></div>

                    <div className="yoyaklist-filter-group">
                        <div className="yoyaklist-filter-group range">
                            <p>범위</p>
                            <input
                                type="text"
                                placeholder="회차를 입력해주세요."
                                value={yoyaklistEpisodeRange}
                                onChange={handleEpisodeRangeChange}
                                className="yoyaklist-range-input"
                            />
                        </div>
                    </div>

                    <div className="yoyaklist-separator"></div>

                    <div className="yoyaklist-filter-group">
                        <p>스포일러</p>
                        <div className="yoyaklist-filter-options column-layout">
                            <label className="yoyaklist-filter-option">
                                <input
                                    type="checkbox"
                                    name="yoyaklistSpoiler"
                                    value="포함"
                                    checked={yoyaklistSpoilerOption === "포함"}
                                    onChange={() => handleSpoilerOptionChange("포함")}
                                />
                                포함
                            </label>
                            <label className="yoyaklist-filter-option">
                                <input
                                    type="checkbox"
                                    name="yoyaklistSpoiler"
                                    value="미포함"
                                    checked={yoyaklistSpoilerOption === "미포함"}
                                    onChange={() => handleSpoilerOptionChange("미포함")}
                                />
                                미포함
                            </label>
                        </div>
                    </div>
                </div>

                <div className="yoyaklist-line"></div>

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
