import { useState } from "react";

import '../assets/css/myPost.css';

import dropdown_arrow from '../assets/images/dropdown_arrow.png';
import dropdown_check from  '../assets/images/dropdown_check.png';

const Sort3 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isClick, setIsClick] = useState(0);

    const sortOptions = ['제목순', '콘텐츠순', '작성일순'];

    const dropdown = () => {
        setIsOpen(prev => !prev);
    }

    const clickActive = (index) => {
        setIsClick(index);
        setIsOpen(false);
    }

    return (
        <div className='myPost-sort'>
            <div className='myPost-sort-btn' onClick={dropdown}>{sortOptions[isClick]}<img src={dropdown_arrow} /></div>
            {isOpen && 
                <div className='myPost-sort-drop'>
                    {sortOptions.map((item, index) => (
                        <div
                            className={`myPost-sort-content ${isClick=== index ? 'active' : ''}`}
                            key={index}
                            onClick={() => clickActive(index)}
                        >
                            <img src={dropdown_check} />{item}
                        </div>
                    ))}
                </div>
            }
        </div>
    );
}

export default Sort3;