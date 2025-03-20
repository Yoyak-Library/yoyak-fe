import { useState } from "react";

import '../assets/css/viewYoyak.css';

const Sort2: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('popular');

    return (
        <div className='viewYoyak-comment-rank'>
            <div className='viewYoyak-comment-popular' id={activeTab === 'popular' ? 'active' : ''}
                onClick={() => setActiveTab('popular')}>인기순</div>
            <div className='viewYoyak-comment-regist' id={activeTab === 'regist' ? 'active' : ''}
                onClick={() => setActiveTab('regist')}>등록순</div>
        </div>
    );
}

export default Sort2;