import { useState } from "react";
import '../assets/css/viewYoyak.css';

import btn_down from '../assets/images/btn_down.png';
import btn_up from '../assets/images/btn_up.png';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <div>
            <div className="viewYoyak-dropdown" onClick={toggleDropdown}>
                <img src={isOpen ? btn_up : btn_down} alt="Toggle Button" />
                <div className="viewYoyak-dropdown-episode">1화</div>
                <div className="viewYoyak-dropdown-subname">부제목</div>
            </div>

            {isOpen && (
                <div className="viewYoyak-dropdown-episodes">
                    {/* 5개 이상부터는 스크롤 미구현 */}
                    <label className="viewYoyak-dropdown-num">
                        <input type="radio" name="option" value="1" /><span>1화</span>
                    </label>
                    <label className="viewYoyak-dropdown-num">
                        <input type="radio" name="option" value="2" /><span>2화</span>
                    </label>
                    <label className="viewYoyak-dropdown-num">
                        <input type="radio" name="option" value="13" /><span>13화</span>
                    </label>
                    <label className="viewYoyak-dropdown-num">
                        <input type="radio" name="option" value="14" /><span>14화</span>
                    </label>
                    <label className="viewYoyak-dropdown-num">
                        <input type="radio" name="option" value="15" /><span>15화</span>
                    </label>
                </div>
            )}
        </div>
    );
}

export default Dropdown;
