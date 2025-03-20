import { useState } from "react";

import '../assets/css/yoyak.css';

const Sort: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('popular');

    return (
        <div className='yoyak-summary-rank'>
            <div className='yoyak-summary-popular' id={activeTab === 'popular' ? 'active' : ''}
                onClick={() => setActiveTab('popular')}>인기순</div>
            <div className='yoyak-summary-regist' id={activeTab === 'regist' ? 'active' : ''}
                onClick={() => setActiveTab('regist')}>등록순</div>
            <div className='yoyak-summary-suggest' id={activeTab === 'suggest' ? 'active' : ''}
                onClick={() => setActiveTab('suggest')}>추천순</div>
        </div>
    );
}

export default Sort;