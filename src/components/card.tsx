import { useState } from "react";

import '../assets/css/myPost.css';

import example_img from '../assets/images/yoyak_example_img.png';

const Card:React.FC = () => {
    const cardCount = 15; // 원하는 카드 개수를 지정
    // 한 페이지에 15개씩 보이도록 수정 예정
    const cards = new Array(cardCount).fill(null);

    return (
        <div className='myPost-cardContainer'>
            {cards.map((_, index) => (
                <div className='myPost-card' key={index}>
                    <img src={example_img} alt={`example ${index + 1}`} />
                    <div className="myPost-card-title">더글로리</div>
                    <div className="myPost-card-name">과거의 그림자 속으로</div>
                    <div className="myPost-card-rest">
                        <div className="myPost-card-num">1화</div>ㅣ<div className="myPost-card-time">25.01.10</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card;