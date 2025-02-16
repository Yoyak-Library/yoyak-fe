import { useState } from "react";
import '../assets/css/viewYoyak.css';

import btn_down from '../assets/images/btn_down.png';
import btn_up from '../assets/images/btn_up.png';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isIndex, setIsIndex] = useState(0);

    const indexOptions = ['1', '2', '13', '14', '15', '26', '32']; // 예시

    const toggleDropdown = () => {
        setIsOpen(prev => !prev);
    };


    return (
        <div className="viewYoyak-dropdownbar">
            <div className="viewYoyak-dropdown" onClick={toggleDropdown}>
                <img src={isOpen ? btn_up : btn_down} alt="Toggle Button" />
                <div className="viewYoyak-dropdown-episode">{indexOptions[isIndex]}화</div>
                <div className="viewYoyak-dropdown-subname">부제목</div>
            </div>

            {isOpen && (
                <div className="viewYoyak-dropdown-episodes">
                    {indexOptions.map((item, index) => (
                        <label className="viewYoyak-dropdown-num">
                            <input 
                                type="radio" 
                                name="option" 
                                value={index} 
                                checked={isIndex === index}
                                onChange={() => setIsIndex(index)}
                            />
                            <span>{item}화</span>
                        </label>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Dropdown;
