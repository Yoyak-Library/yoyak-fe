import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../../assets/css/home.css";
import Menu from "../../components/menu";
import SummaryCard from "../../components/summaryCard";
import Poster from "../../assets/images/main_poster.png";
import Note from "../../assets/images/ic_note_20.svg";
import Star from "../../assets/images/ic_star_20.svg";

interface ContentItem {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

interface SummaryItem {
  id: number;
  contentName: string;
  summaryName: string;
  thumbnailUrl?: string;
}

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [contents, setContents] = useState<ContentItem[]>([]);
  const [summaries, setSummaries] = useState<SummaryItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [summaryLoading, setSummaryLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [summaryError, setSummaryError] = useState<string | null>(null);

  // 콘텐츠 데이터 가져오기
  useEffect(() => {
    fetch("https://api.yoyaklery.site/content/now-playing")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setContents(data.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("콘텐츠를 불러오는데 실패했습니다.");
        setLoading(false);
      });
  }, []);

  // 요약 데이터 가져오기
  useEffect(() => {
    fetch("https://api.yoyaklery.site/summary") // 실제 summary API 엔드포인트로 수정 필요
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        // API 응답 구조에 따라 수정 필요
        setSummaries(data.data || data.results || data);
        setSummaryLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setSummaryError("요약글을 불러오는데 실패했습니다.");
        setSummaryLoading(false);
      });
  }, []);

  const handleReviewClick = () => {
    navigate('/review');
  }

  const handleYoyakClick = () => {
    navigate('/yoyak');
  }

  return (
    <div className="home__container">
      <Menu />
      <div id="main">
        <div className="home__image-container">
          <img src={Poster} alt="Poster" className="home__main-poster" />
          <div className="home__content-title">더글로리</div>
          <div className="home__content-description">
            학교 폭력으로 인생이 무너진 문동은
            <br />
            가해자들에게 복수하기 위해 철저히 준비하며
            <br />
            그들의 세계로 다시 들어간다. 그녀의 복수극은 어디로 향할까?
          </div>
          <div className="home__main-button">
            <button className="home__button" onClick={handleYoyakClick}>
              <img src={Note} alt="note" className="home__icon" />
              <span className="home__text">요약 보러가기</span>
            </button>
            <button className="home__button" onClick={handleReviewClick}>
              <img src={Star} alt="star" className="home__icon" />
              <span className="home__text">한줄 리뷰 보러가기</span>
            </button>
          </div>
        </div>
      </div>

      <div className="home__summary">
        <div className="home__summary-title">실시간 인기 요약글</div>
        <div className="home__summary-component">
          {contents.map((content) => (
            <SummaryCard
              key={content.id}
              contentName={content.title}
              summaryName={content.release_date}
              thumbnailUrl={`https://image.tmdb.org/t/p/w780${content.poster_path}`}
            />
          ))}
        </div>
      </div>

      {loading && <p>영화 로딩중...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && (
        <div className="home__summary">
          <div className="home__summary-title">실시간 인기 영화</div>
          <div className="home__summary-component">
            {contents.map((content) => (
              <SummaryCard
                key={content.id}
                contentName={content.title}
                summaryName={content.release_date}
                thumbnailUrl={`https://image.tmdb.org/t/p/w780${content.poster_path}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
