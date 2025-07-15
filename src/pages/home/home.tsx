import React from 'react';
import '../../assets/css/home.css';
import Menu from "../../components/menu";
import Summary from '../../components/summary';
import Poster from "../../assets/images/main_poster.png";
import Note from "../../assets/images/ic_note_20.svg";
import Star from "../../assets/images/ic_star_20.svg";

const Home: React.FC = () => {
    return (
        <div className='home__container'>
            <Menu />
            <div id='main'>
                <div className="home__image-container">
                    <img src={Poster} alt="Poster" className="home__main-poster" />
                    <div className='home__content-title'>더글로리</div>
                    <div className='home__content-description'>
                        학교 폭력으로 인생이 무너진 문동은<br />
                        가해자들에게 복수하기 위해 철저히 준비하며<br />
                        그들의 세계로 다시 들어간다. 그녀의 복수극은 어디로 향할까?
                    </div>
                    <div className='home__main-button'>
                        <button className="home__button">
                            <img src={Note} alt="note" className="home__icon" />
                            <span className="home__text">요약 보러가기</span>
                        </button>
                        <button className="home__button">
                            <img src={Star} alt="star" className="home__icon" />
                            <span className="home__text">한줄 리뷰 보러가기</span>
                        </button>
                    </div>
                </div>
            </div>
            
            {[
                { title: '실시간 인기 요약글' },
                { title: '영화' },
                { title: '드라마' },
                { title: '회원님을 위한 이번주 인기 영화' },
                { title: 'TV 프로그램' }
            ].map((section, index) => (
                <div className="home__summary" key={index}>
                    <div className='home__summary-title'>{section.title}</div>
                    <div className='home__summary-component'>
                        <Summary />
                        <Summary />
                        <Summary />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Home;
