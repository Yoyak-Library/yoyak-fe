import Menu from "../../components/menu";
import Summary2 from '../../components/summary2';
import RankSelector from "../../components/rankSelector";

import '../../assets/css/yoyak.css';

import React from 'react';
import { useNavigate } from 'react-router-dom';

import yoyak_example_img from '../../assets/images/yoyak_example_img.png';
import top from '../../assets/images/top.png';
import write from '../../assets/images/write.png';
import star from '../../assets/images/star.png';
import reset from '../../assets/images/reset.png';

const YOYAK = () => {
    const navigate = useNavigate();

    return (
        <div className='yoyak'>
            <Menu />
            <div className='yoyak-container'>
                {/*임시 이미지*/}
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
                        <div className='yoyak-intro-btn' id="review" onClick={() => navigate('/review')} >
                            <img src={star} alt="한줄 리뷰 보러가기" />한줄 리뷰 보러가기
                        </div>
                    </div>

                </div>
                {/*요약본*/}
                <div className='yoyak-summary'>
                    <RankSelector />
                    {/*요약본들 컴포넌트*/}
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
                {/*필터*/}
                <div className='yoyak-filter'>
                    <div className='yoyak-filter-name'>검색 필터</div>
                    <div className='yoyak-filter-reset'><img src={reset} />초기화</div>
                    <hr />
                    <div className='yoyak-filter-length'>
                        <div className="yoyak-filter-name2">요약글 길이</div>
                        <div className="yoyak-filter-checkbox">
                            <input type="checkbox" id="checkbox" /><label for="checkbox">단문 요약</label>
                        </div>
                        <div className="yoyak-filter-checkbox">
                            <input type="checkbox" id="checkbox" /><label for="checkbox">장문 요약</label>
                        </div>
                    </div>
                    <div className='yoyak-filter-range'>
                        <div className="yoyak-filter-name2">범위</div>
                        <input type="text" placeholder="회차를 입력해주세요."></input>
                    </div>
                    <div className='yoyak-filter-spoiler'>
                        <div className="yoyak-filter-name2">스포일러</div>
                        <div className="yoyak-filter-checkbox">
                            <input type="checkbox" id="checkbox" /><label for="checkbox">포함</label>
                        </div>
                        <div className="yoyak-filter-checkbox">
                            <input type="checkbox" id="checkbox" /><label for="checkbox">미포함</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YOYAK;