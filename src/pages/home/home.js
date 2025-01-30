import '../../assets/css/yoyak.css';

import yoyak_example_img from '../../assets/images/yoyak_example_img.png';

const YOYAK = () => {
    return (
        <div className='yoyak'>
            <div className='yoyak-container'>
                {/*임시 이미지*/}
                <img className='yoyak-mainImg' src={yoyak_example_img} />
                {/*드라마 소개*/}
                <div className='yoyak-intro'>
                    <div className='yoyak-intro-name'>더글로리 시즌1</div>
                    <div className='yoyak-intro-count'>에피소드 16개</div>
                    <div className='yoyak-intro-content'>학교 폭력으로 인생이 무너진 문동은<br/>가해자들에게 복수하기 위해 철저히 준비하며<br/>그들의 세계로 다시 들어간다. 그녀의 복수극은 어디로 향할까?</div>
                    <div className='yoyak-intro-hashtag'>#드라마 #스릴러 #학교폭력</div>
                    <div className='yoyak-intro-badge'></div>
                    <div className='yoyak-intro-btn'></div>
                </div>
                {/*요약본*/}
                <div className='yoyak-summary'>
                    <div className='yoyak-summary-rank'></div>
                    {/*요약본들 컴포넌트*/}
                </div>
                {/*필터*/}
                <div className='yoyak-filter'></div>
            </div>
        </div>
    );
}

export default YOYAK;