import { useState } from "react";

import Menu from "../../components/menu";
import Sort from "../../components/sort3";
import Card from "../../components/card";
import Pagination from "../../components/pagination";

import '../../assets/css/myPost.css';

import back_arrow from '../../assets/images/back_arrow.png';

const MyPost:React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const buttons = ['전체', '작성한 요약', '작성 중인 요약'];

    const handleClick = (index: number) => {
        setActiveIndex(index);
    };    

    return (
        <div className='myPost'>
            <Menu />
            <div className='myPost-container'>
                {/* 제목 */}
                <div className="myPost-pageName">
                    <img src={back_arrow} />내가 작성한 글
                </div>
                {/* 전체 / 작성한 요약 / 작성 중인 요약 */}
                <div className="myPost-menu">
                    {buttons.map((button, index) => (
                        <div
                        key={index}
                        onClick={() => handleClick(index)}
                        className={`myPost-menu-btn ${activeIndex === index ? 'active' : ''}`}
                        >
                        {button}
                        </div>
                    ))}
                </div>
                {/* 제목순 / 콘텐츠순 / 작성일순 */}
                <div className="myPost-sorts">
                    <Sort />
                </div>
                {/* 내가 작성한 글 카드 */}
                <div className="myPost-cards">
                    <Card />
                </div>
                {/* 페이지네이션 */}
                <div className="myPost-paginations">
                    <Pagination />
                </div>
            </div>
        </div>
    )
}

export default MyPost;