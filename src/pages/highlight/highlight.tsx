import Menu from "../../components/menu";
import { useState } from "react";
import "../../assets/css/highlight.css";
import HighlightBoard from "../../components/highlightBoard";
import FilterDropdown from "../../components/filterDropdown";

const Highlight = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handleClick = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="highlight">
      <Menu />
      <div className="highlight__container">
        <p className="highlight__title">&lt;&nbsp;&nbsp;&nbsp;하이라이트</p>

        <div className="filterDropdownWrapper">
          <FilterDropdown />
        </div>

        <div className="highlight__grid">
          {Array.from({ length: 10 }).map((_, index) => (
            <HighlightBoard key={index} />
          ))}
        </div>

        {/* 페이지네이션 */}
        <div className="pagination">
          <button
            className="pagination__arrow"
            disabled={currentPage === 1}
            onClick={() => handleClick(currentPage - 1)}
          >
            &lt;
          </button>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              className={`pagination__number ${
                currentPage === i + 1 ? "active" : ""
              }`}
              onClick={() => handleClick(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="pagination__arrow"
            disabled={currentPage === totalPages}
            onClick={() => handleClick(currentPage + 1)}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
