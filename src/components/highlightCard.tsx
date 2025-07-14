import React from "react";
import "../assets/css/highlightCard.css";

interface HighlightCardProps {
  episode: string;
  date: string;
  content: string;
  color: "yellow" | "red" | "green";
}

const HighlightCard: React.FC<HighlightCardProps> = ({ episode, date, content, color }) => {
  return (
    <div className={`highlightview_card ${color}`}>
      <div className="highlightview_episode-date">
        <span className="episode">{episode}</span>
        <span className="date">{date}</span>
      </div>
      <div>{content}</div>
    </div>
  );
};

export default HighlightCard;
