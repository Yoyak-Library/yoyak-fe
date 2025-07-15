import { useState } from "react";

import Menu from "../../components/menu";
import Sort from "../../components/sort3";
import Card from "../../components/card";
import Pagination from "../../components/pagination";

import '../../assets/css/myPost.css';
import '../../assets/css/like.css';

import back_arrow from '../../assets/images/back_arrow.png';

const Like:React.FC = () => {

    return (
        <div className='like'>
            <Menu />
            <div className='myPost-container'>
                {/* 제목 */}
                <div className="myPost-pageName">
                    <img src={back_arrow} />찜
                </div>
                {/* 제목순 / 콘텐츠순 / 작성일순 */}
                <div className="like-sorts">
                    <Sort />
                </div>
                {/* 내가 작성한 글 카드 */}
                <div className="like-cards">
                    <Card />
                </div>
                {/* 페이지네이션 */}
                <div className="like-paginations">
                    <Pagination />
                </div>
            </div>
        </div>
    )
}

export default Like;