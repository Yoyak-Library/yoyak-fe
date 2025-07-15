import { useState } from "react";
import '../assets/css/rankSelector.css'

interface Option {
  key: string;
  label: string;
}

const RankSelector: React.FC = () => {
  const [selected, setSelected] = useState<string>("popular");

  const options: Option[] = [
    { key: "popular", label: "인기순" },
    { key: "regist", label: "등록순" },
    { key: "suggest", label: "추천순" },
  ];

  return (
    <div className="review__summary-rank">
      {options.map((option) => (
        <div
          key={option.key}
          className={`review__summary-item ${selected === option.key ? "selected" : ""}`}
          onClick={() => setSelected(option.key)}
        >
          {option.label}
          {selected === option.key && <div className="underline" />}
        </div>
      ))}
    </div>
  );
};

export default RankSelector;
