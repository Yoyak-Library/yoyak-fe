import React, { useState } from "react";
import "../assets/css/filterDropdown.css"; 

const sortOptions = ["제목순", "콘텐츠순", "작성일순"];

const FilterDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("제목순");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="filter-dropdown">
      <button className="filter-button" onClick={toggleDropdown}>
        {selected} <span className="triangle">▼</span>
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          {sortOptions.map((option) => (
            <div
              key={option}
              className={`dropdown-item ${
                selected === option ? "selected" : ""
              }`}
              onClick={() => handleSelect(option)}
            >
              <span className="checkmark">✔</span>
              <span className="item-text">{option}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
